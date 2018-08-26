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
* specific language governing permissiosfns and limitations
* under the License.
*/

//Dependencies
import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default class ShowProduct extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="title">Inventory</h1>
        <div className="links-header">
          <p>
            <NavLink
              activeClassName="selected"
              className="nav-link-header"
              to="/add_inventory_items"
            >
              Add Items
            </NavLink>
          </p>
          <p>
            <NavLink
              activeClassName="selected"
              className="nav-link-header"
              to="/inventory_items"
            >
              Inventory Items
            </NavLink>
          </p>
        </div>
      </div>
    );
  }
}
