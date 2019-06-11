import styled from 'styled-components';

const NewsItemLayout = styled.div`
    width: 100%;
    border-bottom: 2px solid #db4a37;
    padding-bottom: 40px;
    margin: 40px 0;

    @media(min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export { NewsItemLayout };