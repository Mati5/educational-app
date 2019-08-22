import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';
import { Sidebar } from './Sidebar';
import { UserPanel } from './UserPanel';

const ChatMK = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
    display: flex;
`;

ChatMK.Sidebar = Sidebar;
ChatMK.UserPanel = UserPanel;

export { ChatMK };