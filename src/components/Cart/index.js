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
import React from 'react';
import find from 'lodash/find';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { getProducts } from '../DataInventory';
import { NavLink } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default class ProItems extends React.Component {


  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //console.log(this.state.value);
    //event.preventDefault();
  }
  remove(ID) {

    var cart = localStorage.getItem('item');

    var array_value = JSON.parse(localStorage.getItem('item'));


    var cartObj = [];
    for (var i = 0; i < array_value.length; i++) {

      if (ID != array_value[i].ID) {

        cartObj.push(array_value[i]);

      }

    }

    localStorage.setItem("item", JSON.stringify(cartObj));

  }

  add(ID, stock) {

    // console.log(ID);
    // console.log(stock);

    if (stock < this.state.value) {

      alert("Please Enter less ammount of items");

    } else {



      alert(this.state.value + "  Items add to the checkout successfully ! ");
    }



    // Get access_token from localstorage
    var access_token = localStorage.getItem('access_token');

    //console.log(this.inputNode.value);

    let axiosConfig = {
      headers: {

        "Access-Control-Allow-Origin": "*",
        "Accept": "*/*",

        //"Authorization": "Bearer " + access_token

        "Authorization": "Bearer 12ee492a-e7d1-3fa5-937e-2970b5225adc"

      }
    };

    // by this we send put request through the inventory_API for add Items for the store 

    return axios.put("https://localhost:8243/orderapi/1.0.0/order/" + ID, { "stock": eval(stock) - eval(this.state.value) }, axiosConfig) //FRONTEND_URL
      .then(function (res) {
        console.log("RESPONSE RECEIVED: ", res);
        console.log("RESPONSE data: ", res.data);
        let products = res.data;
        return (products);
      }).catch((err) => {
        console.log("AXIOS ERROR: ", err);

      });

  }

  render() {

    var cart_items = JSON.parse(localStorage.getItem('item'));

    if (cart_items == null) {

      return (<div className="Empty_headder"><h4>Cart is Empty</h4></div>);
    }

    return (


      <div>{cart_items.map((product) => {
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
          <input type="Number" ref={this.state.value} onChange={this.handleChange} />

                  </label>

                  <input type="submit" value="Add" onClick={() => this.add(product.ID, product.stock)} />

                  <input type="submit" value="Remove" onClick={() => this.remove(product.ID)} />

                </form>
              </div>
            </div>
          </div>




        )
      })}
      </div>
    );
  }
}
