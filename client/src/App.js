import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleApiHook from './components/SingleApiHook';
import ReuseableHook from './components/ReuseableHook';
import Page404 from './pages/Page404';
import Dashboard from './temp/example/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/single" component={SingleApiHook} />
        <Route exact path="/reuse" component={ReuseableHook} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
