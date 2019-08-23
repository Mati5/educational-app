import React from 'react';
import { UserPanelStyle } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
 
const UserPanel = (props) => {
    const renderSwitch = (param) => {
        switch(param) {
            case 'login':
                return (
                    <React.Fragment>
                        <UserPanelStyle.Avatar>
                            <img src={"https://image.shutterstock.com/image-vector/male-default-avatar-profile-gray-260nw-387037984.jpg"} alt="" />
                        </UserPanelStyle.Avatar>
                        <UserPanelStyle.Details>
                            <UserPanelStyle.Input type="text" onChange={(event) => props.inputChanged(event, 'username')} placeholder="username" />
                            <UserPanelStyle.Input type="password" onChange={(event) => props.inputChanged(event, 'password')} placeholder="password" />
                        </UserPanelStyle.Details>
                        <UserPanelStyle.Button type="button" 
                                                    bgColor="#7dd356"
                                                    disabled>Connect</UserPanelStyle.Button>
                    </React.Fragment>
                );
            case 'register':
                return (
                    <React.Fragment>
                        <UserPanelStyle.Avatar>
                            <img src={"https://image.shutterstock.com/image-vector/male-default-avatar-profile-gray-260nw-387037984.jpg"} alt="" />
                        </UserPanelStyle.Avatar>
                        <input type="file" />
                        <UserPanelStyle.Details>
                            <UserPanelStyle.Input type="text" onChange={(event) => props.inputChanged(event, 'username')} placeholder="username" />
                            <UserPanelStyle.Input type="password" onChange={(event) => props.inputChanged(event, 'password')} placeholder="password" />
                        </UserPanelStyle.Details>
                        <UserPanelStyle.Button type="button" 
                                                    bgColor="#7dd356"
                                                    onClick={props.signUp}>Sign up</UserPanelStyle.Button>
                    </React.Fragment>
                );
            case 'authenticated':
                return (
                    <React.Fragment>
                        <UserPanelStyle.Avatar>
                            <img src={"https://image.shutterstock.com/image-vector/male-default-avatar-profile-gray-260nw-387037984.jpg"} alt="" />
                        </UserPanelStyle.Avatar>
                        <UserPanelStyle.Details>
                            WItaj~!
                        </UserPanelStyle.Details>
                        <UserPanelStyle.Button type="button" 
                                                      bgColor="#de5655"
                                                      onClick={() => props.disconnect()}>Disconnect</UserPanelStyle.Button>
                    </React.Fragment>
                );
            default:
                return (
                    <React.Fragment>
                        <UserPanelStyle.Button type="button" 
                                                    bgColor="#00405d"
                                                    onClick={() => props.setUserPanelParam('login')}>Sign in</UserPanelStyle.Button>
                        <UserPanelStyle.Button type="button" 
                                                    bgColor="#7dd356"
                                                    onClick={() => props.setUserPanelParam('register')}>Sign up</UserPanelStyle.Button>
                    </React.Fragment>
                );
        }
    }

    return (
        <UserPanelStyle>
            {props.userPanelParam && !props.auth ? <UserPanelStyle.ButtonBack type="button" onClick={() => props.setUserPanelParam()}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
            </UserPanelStyle.ButtonBack> : null}
            {/* <UserPanelStyle.Button type="button" bgColor="#de5655">Disconnect</UserPanelStyle.Button> */}

            {props.auth ? renderSwitch('authenticated') : renderSwitch(props.userPanelParam)}
            
        </UserPanelStyle>
    );
};

export default UserPanel;