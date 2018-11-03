import React from 'react';
import { Route, BrowserRouter, HashRouter } from 'react-router-dom';
import Index from './page/index/index.js';
import Category from './page/category/category.js';

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Index} exact></Route>
      <Route path="/category" component={Category}></Route>
    </div>
  </BrowserRouter>
)