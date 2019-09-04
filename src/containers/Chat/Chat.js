import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ChatMK from '../../components/Chat/index';
import SockJsClient from 'react-stomp';
import { addMessage, clearMessages, getMessages, addMessageSuccess } from '../../store/Chat/actions';
import { getUsers, clearUsers, setUsers } from '../../store/Users/actions';
import { logout, authStart, authSuccess } from '../../store/Auth/actions';
import { saveState } from '../../helpers/heleprs';
import * as api from '../../store/Auth/api';
import { signUp } from '../../store/Users/api';

import { ShoutboxStyle } from '../../components/Chat/Shoutbox/style';

const Chat = ({clientRef, 
               messages, 
               users,
               userDetails,
               isAuthenticated,
               getMessages, 
               addMessageSuccess, 
               getUsers, 
               clearUsers, 
               setUsers,
               authStart,
               authSuccess,
               logout }) => {

    useEffect(() => {
        getMessages();

        return () => {
            clearMessages();
        }
    }, [getMessages]);

    useEffect(() => {
        getUsers();

        return () => {
            clearUsers();
        }
    }, [getUsers, clearUsers]);

    const signUpHandler = async (userData) => {
        const response = await signUp(userData);

        if(response.data) {
            signInHandler(userData);
        }
    };

    const signInHandler = async (userData) => {
        authStart();

        const response = await api.authenticate(userData.username, userData.password);
        const user = response.data;
        const token = api.createAuthHeader(userData.username, userData.password);

        clientRef.sendMessage('/app/loginUser');
        
        saveState('user', user);
        saveState('token', token.authorization);
        authSuccess(token, user);
    }

    const disconnectHandler = async () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        await api.clearLogout();

        clientRef.sendMessage('/app/loginUser');

        await api.logout();

        logout();
    }

    const sendMessageHandler = (message) => {
        clientRef.sendMessage('/app/add', JSON.stringify({user: userDetails, content: message.content}));
    }

    return (
        <React.Fragment>
            <ShoutboxStyle.Header>
                <ShoutboxStyle.Title>Messages</ShoutboxStyle.Title>
            </ShoutboxStyle.Header>  
            <ChatMK users={users} 
                    userDetails={userDetails}
                    messages={messages} 
                    auth={isAuthenticated}
                    signUp={signUpHandler}
                    signIn={signInHandler}
                    sendMessage={sendMessageHandler}
                    disconnect={disconnectHandler} />

            <SockJsClient url='http://localhost:8080/websocket' topics={['/notification/chat']}
                        onMessage={(msg) => { 
                            addMessageSuccess(msg.body); 
                        }}
                        ref={ (client) => { clientRef = client }} />
            <SockJsClient url='http://localhost:8080/websocket' topics={['/notification/activeUsers']}
                        onMessage={(msg) => { 
                            setUsers(msg.body);
                        }}
                        ref={ (client) => { clientRef = client }} />
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    messages: state.chat.messageList,
    users: state.users.userList,
    loading: state.chat.loading,
    isAuthenticated: state.auth.token != null,
    userDetails: state.auth.userDetails
});

const mapDispatchToProps = {
    addMessage,
    getMessages,
    clearMessages,
    addMessageSuccess,
    getUsers,
    clearUsers,
    logout,
    setUsers,
    authStart,
    authSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);