import styled from 'styled-components';

import { Container } from '../../Container/Container';
import { em } from '../.././../helpers/heleprs';

const ToolbarLayout = styled.div`
    background-color: #00405d;
    width: 100%;
    min-height: ${em(72)};
    display: flex;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`;

const ToolbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export { ToolbarLayout, ToolbarContainer };