import styled from 'styled-components';

import { Container } from '../../Container/Container';

const ToolbarLayout = styled.div`
    background-color: #00405d;
    width: 100%;
    min-height: 72px;
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