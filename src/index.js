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

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import BaseLayout from "./components/BaseLayout";
import Products from "./components/Products";
import Login from "./components/Login";
import ShowProduct from "./components/ShowProduct";
import Inventory from "./components/Inventory";
import Inventory_Items from "./components/Inventory_Items";
import show_products_B from "./components/ShowProduct_for_buyer";
import registerServiceWorker from "./registerServiceWorker";

class ShoppingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logged: false };
    this.state = { authorized: false };
    this.changeLogged = this.changeLogged.bind(this);
  }

  changeLogged(logged) {
    this.setState(logged);
  }
  //   Check whether access_token_available if so
  componentDidMount() {
    let access_token_available = localStorage.getItem("access_token");
    var scope = JSON.parse(localStorage.getItem("scope"));

    if (access_token_available != null && scope != null) {
      this.setState({ logged: true });
      if (scope.indexOf("sell") >=0) {
        this.setState({ authorized: true });
      }
    }
  }

  render() {
    const { logged } = this.state;
    const { authorized } = this.state;
    return (
      <BrowserRouter>
        <BaseLayout logged={logged} authorized={authorized}>
          <Switch>
            <Route
              path="/show_products_for_buyers/:ID"
              component={show_products_B}
            />
            <Route
              path="/login"
              render={() => (
                <Login changeLogged={this.changeLogged} logged={logged} />
              )}
            />

            <Route
              path="/inventory_items"
              render={() => <Inventory_Items authorized={authorized} />}
            />

            <Route path="/products" component={Products} />
            <Route exact path="/showproducts/:ID" component={ShowProduct} />
            <Route path="/cart" component={Cart} />
            <Route path="/inventory" component={Inventory} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <ShoppingApp />,

  document.getElementById("root")
);
registerServiceWorker();
