import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Signup from '../pages/mine';

const MainPage = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/mine' component={Signup}></Route>
    </Switch>
  );
}

export default MainPage;