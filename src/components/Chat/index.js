import React, { useState, useEffect } from 'react';
import { ChatMKStyle } from './style';
import Shoutbox  from './Shoutbox/index';
import UserPanel from './UserPanel/index';
import Sidebar from './Sidebar/index';

const ChatMK = (props) => {
    const [userPanelParam, setUserPanelParam] = useState();

    useEffect(()=> {
        if(!props.auth) {
            setUserPanelParam();
        }
    }, [props.auth, setUserPanelParam]);

    
    return (
        <ChatMKStyle>
            <Sidebar users={props.users} />

            <Shoutbox messages={props.messages} 
                      auth={props.auth}
                      inputChanged={props.inputChanged} 
                      sendMessage={props.sendMessage} />
                      
            <UserPanel auth={props.auth} 
                       userDetails={props.userDetails}
                       userPanelParam={userPanelParam}
                       setUserPanelParam={setUserPanelParam} 
                       signUp={props.signUp}
                       signIn={props.signIn}
                       disconnect={props.disconnect} />

        </ChatMKStyle>
    );
};

export default ChatMK;