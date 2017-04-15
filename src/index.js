import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './containers/App'
import Articles from './containers/Articles';
import Article from './containers/Article'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Articles} />
      <Route path="articles" component={Articles} />
      <Route path="articles/:articleId" component={Article} />
    </Route>
  </Router>
), document.getElementById('root'))
