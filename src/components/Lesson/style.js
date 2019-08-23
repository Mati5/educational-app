import styled from 'styled-components';
import { rem } from '../../helpers/heleprs';

const LessonStyle = styled.article`
    width: ${props => props.sidebarOpened ? "65%" : "80%"};
    float: ${props => props.sidebarOpened ? "right" : "none"};
    font-size: ${rem(14)};
    line-height: ${rem(25)};
    /* padding: ${rem(20)}; */
    margin: 0 auto;
    position: relative;

    @media(min-width: 1192px) {
        width: auto;
        float: none;
        margin-left: ${props => props.sidebarOpened ? rem(400) : rem(50)};
    }
`;

const H1 = styled.h1`
    color: #222;
    font-size: ${rem(24)};
    margin: 0;
`;

const H2 = styled.h2`
    font-size: ${rem(32)};
    text-transform: uppercase;
    font-weight: normal;
    font-family: 'Dosis', sans-serif;
    border-bottom: ${rem(1)} solid #e5e5e5;
    padding-bottom: ${rem(10)};
`;

const Header = styled.header`
    background-color: #f7f8fa;
    border-bottom: ${rem(0.5)} solid #dedfe0;
    /* padding-bottom: ${rem(15)};
    margin-top: ${rem(10)};
    margin-bottom: ${rem(20)}; */
    padding: ${rem(20)};
`;

const Details = styled.p`
    color: #999;
    font-size: ${rem(12)};
    margin: 0;
    margin-top: ${rem(10)};
    padding: 0 ${rem(10)};
`;

const Date = styled.span`
    padding-left: ${rem(5)};
`;

const Content = styled.div`
    padding: ${rem(20)};
`;

Details.Date = Date;

LessonStyle.Title = H1;
LessonStyle.H2 = H2;
LessonStyle.Header = Header;
LessonStyle.Details = Details;
LessonStyle.Content = Content;

export { LessonStyle };
