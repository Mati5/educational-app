import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';  
import Lessons from './containers/Lessons/Lessons';
import SingleLesson from './containers/SingleLesson/SingleLesson';
import Home from './containers/Home/Home';
import News from './containers/News/News';
import Layout from './hoc/Layout/Layout';
import './App.css';
import Chat from './containers/Chat/Chat';
import { authCheckState } from './store/Auth/actions';

const App = ({authCheckState}) => {
  useEffect(() => {
    authCheckState();
  }, [authCheckState]);

  const routes = (
    <Switch>
      <Route path="/lessons/:name" component={SingleLesson} />
      <Route path="/lessons" component={Lessons} />
      <Route path="/news" component={News} />
      <Route path="/chat" component={Chat} />
      <Route path="/" exact component={Home} />
    </Switch>
  );

  return(
    <Layout>
      {routes}
    </Layout>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null
});

const mapDispatchToProps = {
  authCheckState
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
