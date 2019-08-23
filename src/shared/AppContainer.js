import styled from 'styled-components';
import { rem } from '../helpers/heleprs';

const AppContainer = styled.div`
    padding: ${rem(1)} ${rem(15)};
    margin: 0 auto;

    @media(min-width: 768px) {
        width: ${rem(750)};
        padding: 0;
    }

    @media(min-width: 992px) {
        width: ${rem(970)};
    }

    @media(min-width: 1200px) {
        width: ${rem(1170)};
    }
`;

export { AppContainer };