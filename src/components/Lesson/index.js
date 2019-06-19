import styled from 'styled-components';

import { em } from '../../helpers/heleprs';
import { H1 } from './H1';
import { H2 } from './H2';
import { Header } from './Header';
import { Details } from './Details';
import { Content } from './Content';

const Lesson = styled.article`
    width: ${props => props.sidebarOpened ? "65%" : "80%"};
    float: ${props => props.sidebarOpened ? "right" : "none"};
    font-size: ${em(14)};
    line-height: ${em(25)};
    /* padding: ${em(20)}; */
    margin: 0 auto;
    position: relative;

    @media(min-width: 1192px) {
        width: auto;
        float: none;
        margin-left: ${props => props.sidebarOpened ? em(458) : em(80)};
    }
`;

Lesson.Title = H1;
Lesson.H2 = H2;
Lesson.Header = Header;
Lesson.Details = Details;
Lesson.Content = Content;

export { Lesson };