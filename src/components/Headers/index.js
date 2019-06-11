import styled from 'styled-components';

const H1 = styled.h1`
    color: #fff;
    font-size: 30px;
    font-family: 'Dosis', sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-weight: normal;
    line-height: 1.1;
`;

const H2 = styled.h2`
    font-weight: 400;
    text-transform: uppercase;
    font-family: 'Dosis';
    color: #333;
    font-size: 25px;
    padding: 30px 0;
    transition: 0.35s color linear
`;

const H3 = styled.h3`
    font-weight: 400;
    text-transform: uppercase;
    font-family: 'Dosis';
    color: #333;
    font-size: 25px;
    margin-top: 3px;
    margin-bottom: 20px;
    transition: 0.35s color linear;
`;

export { H1, H2, H3 }