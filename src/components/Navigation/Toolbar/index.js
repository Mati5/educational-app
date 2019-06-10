import React from 'react';

import { ToolbarLayout, ToolbarContainer } from './ToolbarLayout';
import { List, ListElement, ListLink } from './List';
 
export const Toolbar = () => {
    return (
        <ToolbarLayout>
            <ToolbarContainer>
                <div>
                    logo
                </div>
                <List>
                    <ListElement>
                        <ListLink to="/">Strona główna</ListLink>
                    </ListElement>
                    <ListElement>
                        <ListLink to="/lessons">Lekcje</ListLink>
                    </ListElement>
                </List>
            </ToolbarContainer>
        </ToolbarLayout>
    );
}