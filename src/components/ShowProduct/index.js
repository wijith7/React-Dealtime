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

//Dependencies
import React, { Component } from "react";
import { Icon } from "react-materialize";
import { getProducts } from "../Data";
import "./index.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";
import { set_headder } from "../Headder";
export default class ShowProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  Add(ID, stock) {
    window.location.reload();

    // Get access_token from localstorage
    var access_token = localStorage.getItem("access_token");

    // by this we send put request through the inventory_API for add Items for the store

    return axios
      .put(
        "https://localhost:8243/inventoryapi/1.0.0/order/" + ID,
        { stock: eval(this.state.value) + eval(stock) },
        set_headder()
      )
      .then(function(res) {
        console.log("RESPONSE RECEIVED: ", res);
        console.log("RESPONSE data: ", res.data);
        let products = res.data;
        return products;
      })
      .catch(err => {
        console.log("AXIOS ERROR: ", err);
      });
  }
  componentDidMount() {
    //setState loading
    this.setState({ loading: true });
    getProducts().then((res = []) => {
      this.setState({ products: res, loading: false });
    });
  }

  render() {
    //get ID from the url add show the pertiquler product
    const ID_Number = parseInt(this.props.match.params.ID);

    if (this.state.loading) {
      return <div>Loading ...</div>;
    }

    return (
      <div className="product1">
        {this.state.products.map(product => {
          if (product.ID == ID_Number) {
            return (
              <div className="show-product1">
                <div className="item-wrapper1">
                  <div className="item-image1">
                    <img
                      className="product-image1"
                      src={product.img}
                      alt="product"
                    />
                  </div>

                  <div className="item-name1">
                    <div className="product-info1">
                      <h3 id="product-name">{product.name}</h3>
                    </div>

                    <div className="product-bio1">
                      <p id="product-description">{product.description}</p>
                      <p id="product-description">
                        Items in the stock :{product.stock}
                      </p>
                      <p id="product-price">${product.price}</p>
                    </div>
                  </div>
                </div>

                <div className="item-form1">
                  <form onSubmit={this.handleSubmit}>
                    <label>Numbers of items:</label>

                    <div>
                      <input
                        type="Number"
                        ref={this.state.value}
                        onChange={this.handleChange}
                      />

                      <Button
                        onClick={() =>
                          this.Add(product.ID, product.stock, this.state.value)
                        }
                        variant="contained"
                        color="primary"
                      >
                        ADD
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
