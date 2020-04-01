import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Page404 from './pages/Page404';
import DynamicChart from './temp/figura/Chart.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/chart" component={DynamicChart} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
