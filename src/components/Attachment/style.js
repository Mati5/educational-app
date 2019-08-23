import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';

const AttachmentStyle = styled.div`
    
`;

const Header = styled.h3`
    background-color: #f7f8fa;
    font-size: ${rem(18)};
    margin: 0;
    display: flex;
    align-items: center;
`;

const Icon = styled.div`
    background-color: #00405d;
    width: ${rem(45)};
    height: ${rem(45)};
    color: #fff;
    font-size: ${rem(16)};
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${rem(8)}; 
`;

const Element = styled.li`
    background-color: #f6f6f6;
    font-size: ${rem(12)};
    border: ${rem(1)} solid #eaeaea;
    border-radius: ${rem(6)};
    padding: ${rem(2)} ${rem(10)};
    margin-bottom: ${rem(8)};
`;

const Link = styled.div`
   color: #00405d;
   font-weight: bold;
   
   :hover {
      cursor: pointer;
      text-decoration: underline;
   }
`;

const List = styled.ul`
   list-style: none;
   margin: 0;
   padding: 0;
   padding: ${rem(15)};
`;

Header.Icon = Icon;
Element.Link = Link;

AttachmentStyle.Header = Header;
AttachmentStyle.Element = Element;
AttachmentStyle.List = List;

export { AttachmentStyle };