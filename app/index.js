/* React imports */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

/* Constants */
const classNames = require('classnames');
const app = document.getElementById('app');

/* Components */
import Home from './_components/Home';
import Recipe from './_components/Recipe/Recipe';
import RecipeList from './_components/Recipe/List';

/* Router config */
render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="/przepisy" component={RecipeList} />
      <Route path="/przepisy/:recipeID/:recipeName" component={Recipe} />
    </Route>
  </Router>
), app);
