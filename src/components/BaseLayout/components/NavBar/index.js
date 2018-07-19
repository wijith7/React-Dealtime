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
import './index.css';


import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


//navigation bar top left corner
const Navbar = (props) => (
  // <nav className="navbar">
  //   <div className="nav-links">
  //     <ul>
  //       <li><NavLink activeClassName="selected" className="nav-link" exact to="/products">Home</NavLink></li>
  //       <li><NavLink activeClassName="selected" className="nav-link" to="/inventory_items">Inventory</NavLink></li>
  //       {props.logged ? (<li><NavLink activeClassName="selected" className="nav-link" to="/logout">Logout</NavLink></li>) : (<li><NavLink activeClassName="selected" className="nav-link" to="/login">Login</NavLink></li>)}
  //     </ul>
  //   </div>
  //   <div className="shopping-cart">
  //     <NavLink to="/cart"><Icon medium>shopping_cart</Icon></NavLink>
  //   </div>
  // </nav>

  <AppBar position="static" color="default">
        <Toolbar variant="dense">
          <Typography variant="title" color="inherit">
          <Button href="/products" >
        HOME
      </Button>
      <Button href="/login" >
        LOGIN
      </Button>
      <Button href="/inventory_items" >
        INVENTORY
      </Button>
      
      <Button href="/cart" >
        CART
      </Button>
  
          </Typography>
        </Toolbar>
      </AppBar>
);

export default Navbar;
