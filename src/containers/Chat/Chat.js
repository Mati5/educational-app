import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import SockJsClient from 'react-stomp';

import { addMessage, clearMessages, getMessages, addMessageSuccess, getUsers, clearUsers } from '../../store/Chat/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { ChatMK } from '../../components/Chat/index';
import { Shoutbox } from '../../components/Shoutbox/index';


const Chat = ({clientRef, messages, getMessages, addMessageSuccess, getUsers, clearUsers, users }) => {
    const [message, setMessage] = useState({username: '', content: ''});

    useEffect(() => {
        getMessages();

        return () => {
            clearMessages();
        }
    }, [getMessages, clearMessages]);

    useEffect(() => {
        getUsers();

        return () => {
            clearUsers();
        }
    }, [getUsers, clearUsers]);


    // const socket = new SockJS('http://localhost:8080/websocket');
    // const stompClient = Stomp.over(socket);
    // stompClient.debug = null;
    // stompClient.connect({}, () => {
    //     stompClient.subscribe('/notification/hello', (calResult) => {
    //        console.log(JSON.parse(calResult.body));
    //     });
    // });
    // stompClient.send("/app/hello", {}, JSON.stringify({handle: "Papa", message: "dupa"}));

    const inputChangeHandler = (event, inputIdentifier) => {
        message[inputIdentifier] = event.target.value;
        setMessage(message);
    }

    const sendMessage = ()  => {
        clientRef.sendMessage('/app/add', JSON.stringify(message));
    }

    return (
        <React.Fragment>
            <Shoutbox.Header>
                <Shoutbox.Title>Messages</Shoutbox.Title>
            </Shoutbox.Header>  
            <ChatMK>
                <SockJsClient url='http://localhost:8080/websocket' topics={['/notification/chat']}
                            onMessage={(msg) => { 
                                console.log(msg);
                                addMessageSuccess(msg.body); 

                            }}
                            ref={ (client) => { clientRef = client }} />
                <ChatMK.Sidebar>
                    <ChatMK.Sidebar.ListUsers>
                        {users.map(user => (
                            <ChatMK.Sidebar.ListUsers.User>
                                <ChatMK.Sidebar.ListUsers.User.Avatar>
                                    <img src={"https://scontent-waw1-1.cdninstagram.com/vp/ee843b2db77b694fbb694b9b7978f900/5DE174F5/t51.2885-19/s150x150/66143196_2349169338737163_3797397967573352448_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com"} alt="" />
                                </ChatMK.Sidebar.ListUsers.User.Avatar>
                                <ChatMK.Sidebar.ListUsers.User.Text>{user.username}</ChatMK.Sidebar.ListUsers.User.Text>
                            </ChatMK.Sidebar.ListUsers.User>
                        ))}
                        
                    </ChatMK.Sidebar.ListUsers>
                </ChatMK.Sidebar>
                
                <Shoutbox>      
                    <Shoutbox.Posts>
                        {messages.map((message, index) => (
                            <Shoutbox.Post>
                                <Shoutbox.UserInfo>
                                    <Shoutbox.UserInfo.Avatar>
                                        <img src={index%2===0 ? "https://scontent-waw1-1.cdninstagram.com/vp/ee843b2db77b694fbb694b9b7978f900/5DE174F5/t51.2885-19/s150x150/66143196_2349169338737163_3797397967573352448_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com" : "https://image.shutterstock.com/image-vector/male-default-avatar-profile-gray-260nw-387037984.jpg"} alt="" />
                                    </Shoutbox.UserInfo.Avatar>
                                    {message.user.username}
                                </Shoutbox.UserInfo>
                                <Shoutbox.Content odd={index%2 === 0 ? '#00405d' : '#d1d0a0'}>
                                    {message.content}
                                </Shoutbox.Content>
                            </Shoutbox.Post>
                        ))}
                    </Shoutbox.Posts>
                    <Shoutbox.Bottom>
                        <Shoutbox.Input type="text" onChange={(event) => inputChangeHandler(event, 'content')} placeholder="content" />
                        <Shoutbox.Button onClick={() => sendMessage()}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </Shoutbox.Button>
                    </Shoutbox.Bottom>
                </Shoutbox>
                <ChatMK.UserPanel>
                    <ChatMK.UserPanel.Avatar>
                        <img src={"https://image.shutterstock.com/image-vector/male-default-avatar-profile-gray-260nw-387037984.jpg"} alt="" />
                    </ChatMK.UserPanel.Avatar>
                    <input type="file" />
                    <ChatMK.UserPanel.Details>
                        <ChatMK.UserPanel.Input type="text" onChange={(event) => inputChangeHandler(event, 'username')} placeholder="username" />
                        <ChatMK.UserPanel.Input type="password" onChange={(event) => inputChangeHandler(event, 'password')} placeholder="password" />
                    </ChatMK.UserPanel.Details>
                    <ChatMK.UserPanel.Button type="button" bgColor="#7dd356">Sign up</ChatMK.UserPanel.Button>
                    {/* <ChatMK.UserPanel.Button type="button" bgColor="#de5655">Disconnect</ChatMK.UserPanel.Button> */}
                </ChatMK.UserPanel>
            </ChatMK>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    messages: state.chat.messageList,
    users: state.chat.userList,
    loading: state.chat.loading
});

const mapDispatchToProps = {
    addMessage,
    getMessages,
    clearMessages,
    addMessageSuccess,
    getUsers,
    clearUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);