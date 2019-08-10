import styled from 'styled-components';

import { em } from '../../helpers/heleprs';
import { Header } from './Header';
import { Element } from './Element';
import { List } from './List';


const Attachment = styled.div`
    
`;

Attachment.Header = Header;
Attachment.Element = Element;
Attachment.List = List;

export { Attachment };