import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Toolbar } from '../../components/Navigation/Toolbar/index';
import Footer from '../../components/Footer/index';
 
const Main = styled.div`
    margin-top: 70px;
`;

const Layout = ({selectedLesson, loading, children}) => {
    return (
        <React.Fragment>
            <Toolbar />
            <Main>
                {children}
            </Main>
            { selectedLesson ? null : <Footer /> }
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    selectedLesson: state.lessons.selectedLesson,
    loading: state.lessons.loading
});

export default connect(mapStateToProps)(Layout);