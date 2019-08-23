import React from 'react';
import { AttachmentStyle } from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

const Attachment = (props) => {

    return (
        <AttachmentStyle>
            <AttachmentStyle.Header>
                <AttachmentStyle.Header.Icon>
                    <FontAwesomeIcon icon={faPaperclip} />
                </AttachmentStyle.Header.Icon>
                Załączniki
            </AttachmentStyle.Header>
            <AttachmentStyle.List>
                {props.files.map(attach => (
                    <AttachmentStyle.Element key={attach.id}>
                        <AttachmentStyle.Element.Link onClick={() => props.downloadFile(attach.id, attach.fileName)}>
                            {attach.fileName} - ({attach.size})
                        </AttachmentStyle.Element.Link>
                    </AttachmentStyle.Element> 
                ))}
                <AttachmentStyle.Element>
                    <AttachmentStyle.Element.Link as="a" href="http://localhost:8080/api/downloadFile/Styled%20components.docx" download>refds</AttachmentStyle.Element.Link>
                </AttachmentStyle.Element>
            </AttachmentStyle.List>
        </AttachmentStyle>
    );
};

export default Attachment;