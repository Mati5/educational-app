import styled from 'styled-components';

const SingleLessonLayout = styled.div`
    width: ${props => props.sidebarOpened ? "65%" : "80%"};
    float: ${props => props.sidebarOpened ? "right" : "none"};
    padding: 20px;
    margin: 0 auto;
`;

export { SingleLessonLayout };