/*
* Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
* WSO2 Inc. licenses this file to you under the Apache License,
* Version 2.0 (the "License"); you may not use this file except
* in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

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
 import show_products_B from './components/ShowProduct_for_buyer';
 import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
<Switch>
      <Route path="/products" component={Products} />
      <Route path="/show_products_B/:ID" component={show_products_B} />
      <Route path="/login" component={Login}  />
      <Route exact path="/show_products/:ID" component={ShowProduct} />
      <Route path="/cart" component={Cart} />

</Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
  registerServiceWorker();
