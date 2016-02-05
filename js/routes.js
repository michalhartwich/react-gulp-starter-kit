import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import App from './pages/app';
import HomePage from './pages/home-page';
import SamplePage from './pages/sample-page';
import NotFoundPage from './pages/not-found-page';

const historyOptions = {
  queryKey : false
};

const routes = (
  <Router history={ createHistory(historyOptions) }>
    <Route path="/" component={ App }>
      <IndexRoute component={ HomePage } />
      <Route path='/sample' component={ SamplePage } />
      <Route path="*" component={ NotFoundPage } />
    </Route>
  </Router>
);

export default routes;
