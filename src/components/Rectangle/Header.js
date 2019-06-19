import styled from 'styled-components';

import { em } from '../../helpers/heleprs';

const Header = styled.div`
    width: 80%;
    margin-left: 3%;
    padding: ${em(10)} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export { Header };