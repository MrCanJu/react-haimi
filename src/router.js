import React from 'react';
import { Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import Index from 'page/index/index.js';
import Category from 'page/category/category.js';
import Cart from 'page/cart/cart.js';
import User from 'page/user/user.js';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Index} exact></Route>
      <Route path="/category" component={Category}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route path="/user" component={User}></Route>
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  </BrowserRouter>
)