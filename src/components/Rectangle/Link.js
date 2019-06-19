import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LessonLink = styled(Link)`
   color: inherit;
   text-decoration: none;
   transition: 0.35s color linear;

   :hover {
       color: #18baf5;
   }
`;

export { LessonLink };