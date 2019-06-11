import styled from 'styled-components';

import { em } from '../../helpers/heleprs';

const SingleLessonLayout = styled.div`
    width: ${props => props.sidebarOpened ? "65%" : "80%"};
    float: ${props => props.sidebarOpened ? "right" : "none"};
    padding: ${em(20)};
    margin: 0 auto;
`;

export { SingleLessonLayout };