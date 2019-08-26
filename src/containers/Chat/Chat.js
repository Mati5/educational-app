import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ChatMK from '../../components/Chat/index';
import SockJsClient from 'react-stomp';
import { addMessage, clearMessages, getMessages, addMessageSuccess } from '../../store/Chat/actions';
import { getUsers, clearUsers, addUserSuccess } from '../../store/Users/actions';
import { ShoutboxStyle } from '../../components/Chat/Shoutbox/style';

const Chat = ({clientRef, messages, getMessages, addMessageSuccess, getUsers, clearUsers, users, addUserSuccess }) => {
    const [message] = useState({username: '', content: ''});
    const [userForm, setUserForm] = useState({username: '', password: '', avatar: ''});
    const [authenticated, setAuthenticated] = useState(false);

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
        userForm[inputIdentifier] = event.target.value;
        setUserForm(userForm);
    };

    const sendMessage = ()  => {
        clientRef.sendMessage('/app/add', JSON.stringify(message));
    };

    const signUpHandler = (userData) => {
        clientRef.sendMessage('/app/addUser', JSON.stringify(userData));
    };

    const signInHandler = (userData) => {
        console.log("SignIn", userData);
        setAuthenticated(true);
    }

    const disconnectHandler = () => {
        setAuthenticated(false);
    }

    return (
        <React.Fragment>
            <ShoutboxStyle.Header>
                <ShoutboxStyle.Title>Messages</ShoutboxStyle.Title>
            </ShoutboxStyle.Header>  
            <ChatMK users={users} 
                    messages={messages} 
                    auth={authenticated}
                    inputChanged={inputChangeHandler} 
                    signUp={signUpHandler}
                    signIn={signInHandler}
                    sendMessage={sendMessage}
                    disconnect={disconnectHandler} />

            <SockJsClient url='http://localhost:8080/websocket' topics={['/notification/chat']}
                        onMessage={(msg) => { 
                            console.log(msg);
                            addMessageSuccess(msg.body); 

                        }}
                        ref={ (client) => { clientRef = client }} />
            <SockJsClient url='http://localhost:8080/websocket' topics={['/notification/users']}
                        onMessage={(msg) => { 
                            console.log(msg);
                            addUserSuccess(msg.body); 
                            setAuthenticated(true);

                        }}
                        ref={ (client) => { clientRef = client }} />
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    messages: state.chat.messageList,
    users: state.users.userList,
    loading: state.chat.loading
});

const mapDispatchToProps = {
    addMessage,
    getMessages,
    clearMessages,
    addMessageSuccess,
    getUsers,
    clearUsers,
    addUserSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);