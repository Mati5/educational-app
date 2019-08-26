import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { LoginFormStyle } from './style';

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} method="post">
        {props.register ? <Field name="picture" component="input" type="file" value={null} /> : null}
        <LoginFormStyle.Input name="username" component="input" type="text" placeholder="username" />
        <LoginFormStyle.Input name="password" component="input" type="password" placeholder="password" />
        <LoginFormStyle.Button type="submit" 
                                bgColor="#7dd356">{ props.register ? 'Sign up' : 'Sign in' }</LoginFormStyle.Button>
    </form>
  );
};

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);

export default LoginForm;