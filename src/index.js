import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Data from './components/Data';
//import App from './components/App';
import Cart from './components/Cart';
import BaseLayout from './components/BaseLayout';
// import Women from './components/Women';
import Products from './components/Products';
import Login from './components/Login';
// import Clothes from './components/Clothes';
// import Accessories from './components/Accessories';
 import ShowProduct from './components/ShowProduct';
 import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
<Switch>
      <Route path="/products" component={Products} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login}  />

</Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
  registerServiceWorker();
