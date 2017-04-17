import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'
import Blog from './containers/Blog'
import Article from './containers/Article'
import NotFound from './containers/NotFound'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="blog" component={Blog} />
      <Route path="blog/:slug" component={Article} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('root'))
