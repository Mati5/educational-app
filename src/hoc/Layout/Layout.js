import React from 'react';

import styled from 'styled-components';

import { Toolbar } from '../../components/Navigation/Toolbar/index';

const Main = styled.div`
    margin-top: 100px;
`;

const Layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar />
            <Main>
                {props.children}
            </Main>
        </React.Fragment>
    );
}

export default Layout;