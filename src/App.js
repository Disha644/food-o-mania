import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import classes from './App.css';

import Layout from './containers/Layout/Layout';
import RecipeList from './containers/RecipeList/RecipeList'
import MealPlanner from './containers/MealPlanner/MealPlanner'
import Profile from './containers/Profile/Profile'
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import Recipe from './containers/Recipe/Recipe';
import Home from './components/Home/Home';
import AddPost from './containers/AddPost/AddPost';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route path='/meal-planner' component={MealPlanner} />
          <Route path='/auth' component={Auth} />
          <Route path='/logout' component={Logout} />
          <Route path='/recipe/:id/:url' component={Recipe} />
          <Route path='/search' exact component={RecipeList} />
          <Route path='/profile' component={Profile} />
          <Route path='/add-a-post' component={AddPost} />
          <Route path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;