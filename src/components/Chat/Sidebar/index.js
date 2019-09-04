import React from 'react';
import { SidebarStyle } from './style'; 

const Sidebar = (props) => {
    return (
        <SidebarStyle>
            <SidebarStyle.ListUsers>
                {props.users ? props.users.map(user => (
                    <SidebarStyle.ListUsers.User key={user.username}>
                        <SidebarStyle.ListUsers.User.Avatar>
                            <img src={"https://scontent-waw1-1.cdninstagram.com/vp/ee843b2db77b694fbb694b9b7978f900/5DE174F5/t51.2885-19/s150x150/66143196_2349169338737163_3797397967573352448_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com"} alt="" />
                        </SidebarStyle.ListUsers.User.Avatar>
                        <SidebarStyle.ListUsers.User.Text>{user.username}</SidebarStyle.ListUsers.User.Text>
                    </SidebarStyle.ListUsers.User>
                )) : null}
                
            </SidebarStyle.ListUsers>
        </SidebarStyle>
    );
};

export default Sidebar;