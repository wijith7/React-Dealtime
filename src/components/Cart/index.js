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
//import React, {Component} from 'react';
import find from 'lodash/find';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
//Internals
import { getProducts } from '../DataInventory';
import { NavLink } from 'react-router-dom';
import './index.css';
import axios from 'axios';

export default class ProItems extends React.Component {

  handleSubmit = event => {
    event.preventDefault()
    // console.log({target: event.target})
    // console.log(event.target[0].value)
    debugger;
    console.log(this.inputNode.value)
    var inputval = this.inputNode.value;
  
  }

  submit(ID,stock){
    //console.log(val);
    var access_token = localStorage.getItem('access_token');
    
    console.log(this.inputNode.value);
    
      let axiosConfig = {
        headers: {
    
            "Access-Control-Allow-Origin": "*",
            "Accept": "*/*",
            //"Authorization": "Bearer " + access_token
            "Authorization": "Bearer 12ee492a-e7d1-3fa5-937e-2970b5225adc"
    
            //I Have to add credential convertion to BEARER
    
    
            //91c3130c-2f4a-3a17-b4db-eaa9673c706c
      }
      };
    
    
    
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

  
  render(){


    var re = JSON.parse(localStorage.getItem('item'));



    return(
      <div>{re.map((product)=>{
        return(
          <div className="product-items">

          <div className="product">
          <h1 id="product-name">{product.name}</h1>
          <h4 id="product-description">Product ID :{product.ID}</h4>
          <h5 id="product-description">Items remaining :{product.stock}</h5>
          <h5 id="product-price">${product.price}</h5>

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


          </div>
        )
      })}
      </div>
    );
  }
}
