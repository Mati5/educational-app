import React from 'react';
import { ShoutboxStyle } from './style';
import MessageForm from '../MessageForm/index';

const Shoutbox = (props) => {
    return (
        <ShoutboxStyle>      
            <ShoutboxStyle.Posts>
                {props.messages ? props.messages.map((message, index) => (
                    <ShoutboxStyle.Post key={message.id}>
                        <ShoutboxStyle.UserInfo>
                            <ShoutboxStyle.UserInfo.Avatar>
                                <img src={index%2===0 ? "https://scontent-waw1-1.cdninstagram.com/vp/ee843b2db77b694fbb694b9b7978f900/5DE174F5/t51.2885-19/s150x150/66143196_2349169338737163_3797397967573352448_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com" : "https://image.shutterstock.com/image-vector/male-default-avatar-profile-gray-260nw-387037984.jpg"} alt="" />
                            </ShoutboxStyle.UserInfo.Avatar>
                            {message.user ? message.user.username : 'User'}
                        </ShoutboxStyle.UserInfo>
                        <ShoutboxStyle.Content odd={index%2 === 0 ? '#00405d' : '#d1d0a0'}>
                            {message.content}
                        </ShoutboxStyle.Content>
                    </ShoutboxStyle.Post>
                )) : null}
            </ShoutboxStyle.Posts>
            <ShoutboxStyle.Bottom>
                {props.auth ? 
                <React.Fragment>
                    <MessageForm onSubmit={props.sendMessage} />
                </React.Fragment> : null }
            </ShoutboxStyle.Bottom>
        </ShoutboxStyle>
    );
};

export default Shoutbox;