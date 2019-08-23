import React from 'react';
import { SidebarStyle } from './style';

const Sidebar = ({ opened, loadedPosts, posts }) => {
  let postList = <p>Loading...</p>;

  if(!loadedPosts) {
    postList = posts.map((post, index) => (
        <SidebarStyle.Element key={post.id}>
            <SidebarStyle.Link to={{ pathname: `/lessons/${post.title}`, search: `?id=${post.id}` }}>{index+1}. {post.title}</SidebarStyle.Link>
        </SidebarStyle.Element>
    ));
  }

  return (
    <SidebarStyle opened={opened}>
        <SidebarStyle.List>
            {postList}
        </SidebarStyle.List>
    </SidebarStyle>
  );
};

export default Sidebar;