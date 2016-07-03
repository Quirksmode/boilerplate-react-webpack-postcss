import React from 'react';
import ReactDOM from 'react-dom';
import PageHome from './components/page-home/page-home.js';
import PageAbout from './components/page-about/page-about.js';
import PageGrids from './components/page-grids/page-grids.js';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './assets/css/style.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={PageHome} />
        <Route path="about" component={PageAbout} />
        <Route path="grids" component={PageGrids} />
    </Router>
  , document.getElementById('app'));
