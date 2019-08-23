import styled from 'styled-components';
    
import { Link } from 'react-router-dom';

import { rem } from '../../helpers/heleprs';

const RectangleStyle = styled.div`
    width: 100%;
    min-height: ${rem(150)};
    background-color: #fff;
    border: ${rem(1)} solid #ccc;
    border-radius: ${rem(8)};
    box-shadow: 0 0 ${rem(15)} #ccc;
    padding-right: ${rem(20)};
    margin-bottom: ${rem(20)};
    display: flex;
`;

const Header = styled.div`
    width: 80%;
    margin-left: 3%;
    padding: ${rem(10)} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const Icon = styled.div`
    width: 20%;
    background-color: rgba(58, 199, 250, 0.46);
    /* color: rgba(62, 62, 62, 0.8); */
    color: #fff;
    font-size: ${rem(30)};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LessonLink = styled(Link)`
   color: inherit;
   text-decoration: none;
   transition: 0.35s color linear;

   :hover {
       color: #18baf5;
   }
`;

RectangleStyle.Header = Header;
RectangleStyle.Icon = Icon;
RectangleStyle.Link = LessonLink;

export { RectangleStyle };