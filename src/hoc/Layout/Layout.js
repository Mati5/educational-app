import React from 'react';
import styled from 'styled-components';

// import history from '../../history';
import Toolbar from '../../components/Navigation/Toolbar/index';

// import Footer  from '../../components/Footer/index';


const Main = styled.main`
    width: 100%;
    height: calc(100% - 50px);
    padding-top: 72px;
`;

const Layout = ({children}) => {
    // const footerLayout = (
    //     <Footer />
    // );
    
    // const [footer, setFooter] = useState(footerLayout);

    // const checkPath = () => {
    //     const pathname = history.location.pathname.split("/");
    //     if(pathname[1] === "lessons" && pathname[2]) {
    //         setFooter(null);
    //     }
    //     else {
    //         setFooter(footerLayout);
    //     }
    // }

    // useEffect(() => {
    //     checkPath();
    //     history.listen(() => {
    //         checkPath();
    //     });
    // }, [setFooter]);

    return (
        <React.Fragment>
            <Toolbar />
            <Main>
                {children}
            </Main>
            {/* {footer} */}
        </React.Fragment>
    );
}

export default Layout;