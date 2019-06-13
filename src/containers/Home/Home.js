import React from 'react';

import styled from 'styled-components';

import header from '../../assets/images/header.jpg';
import { H1 } from '../../components/Headers';

const PageHeader = styled.div`
    background-image: url(${header});
    background-size: cover;
    background-position: 50%;
    background-attachment: fixed;
    width: 100%;
    height: 70vh;
    position: relative;
`;

const PageHeaderContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    color: #fff;
    text-align: center;
    background-color: rgba(60, 60, 60, 0.4);
    box-shadow: 0 0 50px 5px #383838;
    padding: 30px;
`;

const Home = () => (
  <React.Fragment>
      <PageHeader>
            <PageHeaderContent>
                <H1>Tworzenie stron internetowych</H1>
                <p>Strona przedmiotowa</p>
            </PageHeaderContent>
      </PageHeader>
  </React.Fragment>
);

export default Home;