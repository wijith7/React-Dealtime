/*
* Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
* WSO2 Inc. licenses this file to you under the Apache License,
* Version 2.0 (the "License"); you may not use this file except
* in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

//Dependencies
import React from "react";
import find from "lodash/find";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
import { getProducts } from "../DataInventory";
import { NavLink } from "react-router-dom";
import "./index.css";
import axios from "axios";
import Button from "@material-ui/core/Button";

export default class ProItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "1" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.state.value);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  checkout() {
    var array_value = JSON.parse(localStorage.getItem("item"));

    // Get access_token from localstorage
    var access_token = localStorage.getItem("access_token");

    for (var i = 0; i < array_value.length; i++) {
      //-----------------------------------------------------------------------
      let axiosConfig = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "*/*",
          Authorization: "Bearer " + access_token
          //Authorization: "Bearer 12ee492a-e7d1-3fa5-937e-2970b5225adc"
        }
      };
      //------------------------------------------------------------------------

      // by this we send put request to order API in port 8243 for add Items for the store
      axios
        .put(
          "https://localhost:8243/orderapi/1.0.0/order/" + array_value[i].ID,
          { stock: eval(array_value[i].stock) - eval(array_value[i].order) },
          axiosConfig
        )

        .then(function(res) {
          //console.log("RESPONSE RECEIVED: ", res);
          //console.log("RESPONSE data: ", res.data);
          let products = res.data;
          return products;
        })
        .catch(err => {
          console.log("AXIOS ERROR: ", err);
        });
    }

    localStorage.removeItem("item");

    alert("Items checkout successfully ! ");

    window.location.reload();
  }

  remove(ID) {
    var cart_items = JSON.parse(localStorage.getItem("item"));
    //var array_value = JSON.parse(localStorage.getItem("item"));

    var cartObj = [];
    for (var i = 0; i < cart_items.length; i++) {
      if (ID != cart_items[i].ID) {
        cartObj.push(cart_items[i]);
      }
    }

    localStorage.setItem("item", JSON.stringify(cartObj));
    window.location.reload();
    if(cart_items.length>0){
      localStorage.removeItem("item");
    }
  }

  update(ID, stock, value) {
    //console.log(ID);
    //console.log(value);

    if (stock < value) {
      alert("Please Enter less ammount of items");
    } else {
      alert("Items update successfully ! ");
    }

    var array_value = JSON.parse(localStorage.getItem("item"));

    for (var i = 0; i < array_value.length; i++) {
      if (ID == array_value[i].ID) {
        array_value[i].order = value;
        break;
      }
    }
    localStorage.setItem("item", JSON.stringify(array_value));
  }

  render() {
    var cart_items = JSON.parse(localStorage.getItem("item"));

    if (cart_items == null) {
      return (
        <div className="Empty_headder">
          <h4>Cart is Empty</h4>
        </div>
      );
    }

    return (
      <div>
        {cart_items.map(product => {
          return (
            <div className="product-items">
              <div className="product">
                <h1 id="product-name">{product.name}</h1>
                <h4 id="product-description">Product ID :{product.ID}</h4>
                <h5 id="product-price">${product.price}</h5>

                <div className="item-form">
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      Quentity:
                      <input
                        type="Number"
                        defaultValue="1"
                        ref={this.state.value}
                        onChange={this.handleChange}
                      />
                    </label>
                    <span className="Update">
                      <Button
                        onClick={() =>
                          this.update(
                            product.ID,
                            product.stock,
                            this.state.value
                          )
                        }
                        variant="contained"
                        color="primary"
                      >
                        Update
                      </Button>
                    </span>

                    <span>
                      <Button
                        onClick={() => this.remove(product.ID)}
                        variant="contained"
                        color="secondary"
                      >
                        Remove
                      </Button>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
        <span className="checkout">
          <Button
            onClick={() => this.checkout()}
            variant="contained"
            color="secondary"
          >
            CheckOut
          </Button>
        </span>
      </div>
    );
  }
}
