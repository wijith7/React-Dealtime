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
import React from "react";
import { Icon } from "react-materialize";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./index.css";
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
//navigation bar top left corner
const Navbar = props => (
  <span className="set">
  <AppBar position="static" color="default" display="flex">
    <Toolbar variant="dense">
      <Typography variant="title" color="inherit">
      <span className="Home">
        <Button href="/products">HOME</Button>
        </span>
        {props.authorized ? (
          <Button href="/inventory_items"> INVENTORY </Button>
        ) : null}
      
        <span className="Cart">
          <IconButton 
            href="/cart"
            color="primary"
            aria-label="Add to shopping cart"
          >
            <AddShoppingCartIcon />
          </IconButton>
        </span>
        
        <span className="Login">
        {props.logged ? (
          <Button href="/logout" >LOGOUT</Button>
        ) : (
          <Button href="/login">LOGIN</Button>
        )}
        </span>
      </Typography>
    </Toolbar>
  </AppBar>
  </span>
);

export default Navbar;
