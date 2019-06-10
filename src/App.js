import React from 'react';
import { Switch, Route } from 'react-router';

import Lessons from './containers/Lessons';
import SingleLesson from './containers/SingleLesson/index';
import Layout from './hoc/Layout/Layout';
import './App.css';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/lessons/:name" component={SingleLesson} />
      <Route path="/lessons"  component={Lessons} />
    </Switch>
  );

  return(
    <Layout>
      {routes}
    </Layout>
  );
}

export default App;
