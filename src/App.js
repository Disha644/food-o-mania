import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import classes from './App.css';

import Layout from './containers/Layout/Layout';
import RecipeList from './containers/RecipeList/RecipeList'
import MealPlanner from './containers/MealPlanner/MealPlanner'
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import Recipe from './containers/Recipe/Recipe';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route path='/meal-planner' component={MealPlanner} />
          <Route path='/auth' component={Auth} />
          <Route path='/logout' component={Logout} />
          <Route path='/recipe/:id/:url' component={Recipe} />
          <Route path='/' exact component={RecipeList} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
