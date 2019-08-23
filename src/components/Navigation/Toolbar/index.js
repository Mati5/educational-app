import React from 'react';
import { ToolbarStyle } from './style';
import { Logo } from '../../Logo/index';

const Toolbar = () => {

    return (
        <ToolbarStyle>
            <ToolbarStyle.Container as="nav">
            <ToolbarStyle.Link to="/">
                <Logo>
                    <i className="fa fa-code" aria-hidden="true"></i>
                </Logo>
            </ToolbarStyle.Link>
            <ToolbarStyle.List>
                <ToolbarStyle.Element>
                    <ToolbarStyle.Link to="/">Strona główna</ToolbarStyle.Link>
                </ToolbarStyle.Element>
                <ToolbarStyle.Element>
                    <ToolbarStyle.Link to="/lessons">Lekcje</ToolbarStyle.Link>
                </ToolbarStyle.Element>
                <ToolbarStyle.Element>
                    <ToolbarStyle.Link to="/chat">Chat</ToolbarStyle.Link>
                </ToolbarStyle.Element>
            </ToolbarStyle.List>
            </ToolbarStyle.Container>
        </ToolbarStyle>
    );
};

export default Toolbar;