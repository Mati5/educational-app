import React from 'react';

import { ToolbarLayout, ToolbarContainer } from './ToolbarLayout';
import { Logo } from '../../Logo/Logo';
import { List, ListElement, ListLink } from './List';
 
export const Toolbar = () => {
    return (
        <ToolbarLayout>
            <ToolbarContainer>
                <Logo>
                    <i class="fa fa-code" aria-hidden="true"></i>
                </Logo>
                <List>
                    <ListElement>
                        <ListLink to="/">Strona główna</ListLink>
                    </ListElement>
                    <ListElement>
                        <ListLink to="/">Aktualności</ListLink>
                    </ListElement>
                    <ListElement>
                        <ListLink to="/lessons">Lekcje</ListLink>
                    </ListElement>
                </List>
            </ToolbarContainer>
        </ToolbarLayout>
    );
}