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
import React, {Component} from 'react';
import {Icon} from 'react-materialize';
import {getProducts} from '../Data';
import './index.css';
import axios from 'axios';


export default class ShowProduct extends React.Component {

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.inputNode.value)
    var inputval = this.inputNode.value;
  }

  constructor() {
    super();
    this.state = {
      products: [],
      loading: false
    }
  }

  submit(ID,stock){

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

  return axios.put("https://localhost:8243/inventoryapi/1.0.0/order/"+ID,{"stock": eval(this.inputNode.value) + eval(stock)} ,axiosConfig) //FRONTEND_URL
  .then(function(res){
    console.log("RESPONSE RECEIVED: ", res);
    console.log("RESPONSE data: ", res.data);
    let products = res.data;
    return(products);
  }).catch((err) => {
    console.log("AXIOS ERROR: ", err);

  });

}
  componentDidMount() {
    //setState loading
    this.setState({loading: true});
    getProducts().then((res = []) => {
    this.setState({products: res, loading: false})
    });
  }

  render() {

    //get ID from the url add show the pertiquler product
    const ID_Number = (parseInt(this.props.match.params.ID));

    if (this.state.loading) {

      return (<div>Loading ...</div>);

    }

    return (<div>{
        this.state.products.map((product) => {

          if (product.ID == ID_Number) {
            return (
            <div className="show-product">
              <div className="item-wrapper">
                <div className="item-image">

                  <img className="product-image" src={product.img} alt="product"/>

                </div>

                <div className="item-name">
                  <div className="product-info">

                    <h3 id="product-name">{product.name}</h3>

                  </div>

                  <div className="product-bio">
                    <p id="product-description">{product.description}</p>
                    <p id="product-description">Items in the stock :{product.stock}</p>
                    <p id="product-price">${product.price}</p>
                    <Icon small="small" id="add-icon">add_shopping_cart</Icon>
                  </div>

                  </div>

              </div>

              <div className="item-form">

                <form onSubmit={this.handleSubmit}>

                  <label>
                    Numbers of items:
                    <input type="Number"ref={node =>(this.inputNode = node)} />
                  </label>

                  <div>

                      <input type="submit" className="button success"  onClick={() => this.submit(product.ID,product.stock)}/>


                  </div>


                </form>
              </div>

            </div>)

          }
        })
      }
    </div>);

  }
}
