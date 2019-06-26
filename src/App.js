import React from 'react';
import { Switch, Route } from 'react-router';

import Lessons from './containers/Lessons/Lessons';
import SingleLesson from './containers/SingleLesson/SingleLesson';
import Home from './containers/Home/Home';
import News from './containers/News/News';
import Layout from './hoc/Layout/Layout';
import './App.css';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/lessons/:name" component={SingleLesson} />
<<<<<<< HEAD
      <Route path="/lessons"  component={Lessons} />
=======
      <Route path="/lessons" component={Lessons} />
>>>>>>> dev
      <Route path="/news" component={News} />
      <Route path="/" exact component={Home} />
    </Switch>
  );

  return(
    <Layout>
      {routes}
    </Layout>
  );
}

export default App;
