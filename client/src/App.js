import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleApiHook from './components/SingleApiHook';
import ReuseableHook from './components/ReuseableHook';
import AllPromise from './components/Main';
import Page404 from './pages/Page404';
import Main from './temp/devoid/Main';
import DynamicChart from './temp/figura/Chart.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/promise" component={AllPromise} />
        <Route exact path="/chart" component={DynamicChart} />
        <Route exact path="/single" component={SingleApiHook} />
        <Route exact path="/reuse" component={ReuseableHook} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
