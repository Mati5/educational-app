import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import history from '../../history';

import Toolbar from '../../components/Navigation/Toolbar/index';
import Footer from '../../components/Footer/index';

const Main = styled.main`
    margin-top: 70px;
`;

const Layout = ({children}) => {
    const [footer, setFooter] = useState(<Footer />);

    const checkPath = () => {
        const pathname = history.location.pathname.split("/");
        if(pathname[1] === "lessons" && pathname[2]) {
            setFooter(null);
        }
        else {
            setFooter(<Footer />);
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
            <Toolbar />
            <Main>
                {children}
            </Main>
            {footer}
        </React.Fragment>
    );
}

export default Layout;