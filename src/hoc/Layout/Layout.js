import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import history from '../../history';
import { Toolbar } from '../../components/Navigation/Toolbar/index';
import { Logo } from '../../components/Logo';
import { Footer } from '../../components/Footer/index';
import { AppContainer } from '../../components/AppContainer/AppContainer';

const Main = styled.main`
    margin-top: 72px;
`;

const Layout = ({children}) => {
    const footerLayout = (
        <Footer>
            <AppContainer>
                2019 © Wszelkie prawa zastrzeżone.
            </AppContainer>
        </Footer>
    );
    
    const [footer, setFooter] = useState(footerLayout);

    const checkPath = () => {
        const pathname = history.location.pathname.split("/");
        if(pathname[1] === "lessons" && pathname[2]) {
            setFooter(null);
        }
        else {
            setFooter(footerLayout);
        }
    }

    useEffect(() => {
        checkPath();
        history.listen(() => {
            checkPath();
        });
    }, [setFooter]);

    return (
        <React.Fragment>
            <Toolbar>
                <Toolbar.Container as="nav">
                <Toolbar.Link to="/">
                    <Logo>
                        <i className="fa fa-code" aria-hidden="true"></i>
                    </Logo>
                </Toolbar.Link>
                <Toolbar.List>
                    <Toolbar.Element>
                        <Toolbar.Link to="/">Strona główna</Toolbar.Link>
                    </Toolbar.Element>
                    <Toolbar.Element>
                        <Toolbar.Link to="/lessons">Lekcje</Toolbar.Link>
                    </Toolbar.Element>
                </Toolbar.List>
                </Toolbar.Container>
            </Toolbar>
            <Main>
                {children}
            </Main>
            {footer}
        </React.Fragment>
    );
}

export default Layout;