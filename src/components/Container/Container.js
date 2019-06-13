import styled from 'styled-components';
import { em } from '../../helpers/heleprs';

const Container = styled.div`
    padding: ${em(1)} ${em(15)};
    margin: 0 auto;

    @media(min-width: 768px) {
        width: ${em(750)};
        padding: 0;
    }

    @media(min-width: 992px) {
        width: ${em(970)};
    }

    @media(min-width: 1200px) {
        width: ${em(1170)};
    }
`;

export { Container };