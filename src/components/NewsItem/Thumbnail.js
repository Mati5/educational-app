import styled from 'styled-components';

import { em } from '../../helpers/heleprs';

const Thumbnail = styled.div`
    max-width: ${em(376)};
    text-align: center;
    overflow: hidden;
    margin: 0 auto;

    :hover {
        img {
            transform: scale(1.1);
        }
    }

    @media(min-width: 768px) {
        margin-right: 3%;
    }

    img {
        transition: 0.35s ease;
    }
`;

export { Thumbnail };