import styled from 'styled-components';

const Thumbnail = styled.div`
    max-width: 376px;
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