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
// Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';

// Internals
import './index.css';

//navigation bar top left corner
const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/products">Home</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/add_inventory_items">Inventory</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/login">Login</NavLink></li>
      </ul>
    </div>
    <div className="shopping-cart">
      <NavLink to="/cart"><Icon medium>shopping_cart</Icon></NavLink>
    </div>
  </nav>
);

export default Navbar;
