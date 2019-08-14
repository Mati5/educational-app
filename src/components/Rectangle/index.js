import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';

import { Header } from './Header';
import { Icon } from './Icon';
import { LessonLink } from './Link';

const Rectangle = styled.div`
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

Rectangle.Header = Header;
Rectangle.Icon = Icon;
Rectangle.Link = LessonLink;

export { Rectangle };