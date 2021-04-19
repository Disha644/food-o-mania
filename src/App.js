import React from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './App.css';

import Layout from './containers/Layout/Layout';
import RecipeList from './containers/RecipeList/RecipeList'
import MealPlanner from './containers/MealPlanner/MealPlanner'

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route path="/meal-planner" component={MealPlanner} />
          <Route path="/" component={RecipeList} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
