import React from 'react'
import { reduxForm } from 'redux-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { MessageFormStyle } from './style';

let MessageForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} method="post">
        <MessageFormStyle.Input name="content" component="input" type="textarea" placeholder="content" />
        <MessageFormStyle.Button type="submit" 
                                bgColor="#7dd356"><FontAwesomeIcon icon={faPaperPlane} /></MessageFormStyle.Button>
    </form>
  );
};

MessageForm = reduxForm({
  // a unique name for the form
  form: 'message'
})(MessageForm);

export default MessageForm;