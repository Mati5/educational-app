import styled from 'styled-components';

import { em } from '../../helpers/heleprs';

const LessonLayout = styled.div`
    width: 100%;
    min-height: ${em(150)};
    background-color: #fff;
    border: ${em(1)} solid #ccc;
    border-radius: ${em(8)};
    box-shadow: 0 0 ${em(15)} #ccc;
    padding-right: ${em(20)};
    margin-bottom: ${em(20)};
    display: flex;

`;

export { LessonLayout };