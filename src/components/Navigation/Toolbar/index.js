import React from 'react';
import { Link } from 'react-router-dom';

import { ToolbarLayout, ToolbarContainer } from './ToolbarLayout';
import { Logo } from '../../Logo/Logo';
import { List, ListElement, ListLink } from './List';
 
export const Toolbar = () => {
    return (
        <ToolbarLayout>
            <ToolbarContainer>
            <Link to="/">
                <Logo>
                    <i className="fa fa-code" aria-hidden="true"></i>
                </Logo>
            </Link>
                <List>
                    <ListElement>
                        <ListLink to="/">Strona główna</ListLink>
                    </ListElement>
                    {/* <ListElement>
                        <ListLink to="/news">Aktualności</ListLink>
                    </ListElement> */}
                    <ListElement>
                        <ListLink to="/lessons">Lekcje</ListLink>
                    </ListElement>
                </List>
            </ToolbarContainer>
        </ToolbarLayout>
    );
}