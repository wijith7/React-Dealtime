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
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
//Internals
import { getProducts } from '../DataInventory';
import { NavLink } from 'react-router-dom';
import './index.css';

export default class ProItems extends React.Component {



  render(){


    var re = JSON.parse(localStorage.getItem('item'));



    return(
      <div>{re.map((product)=>{
        return(
          <div className="product-items">

          <div className="product-details">
          <h1 id="product-name">{product.name}</h1>
          <h4 id="product-description">Product ID :{product.ID}</h4>
          <h5 id="product-description">Items remaining :{product.stock}</h5>
          <h5 id="product-price">${product.price}</h5>
          <button>Checkout</button>
          </div>


          </div>
        )
      })}
      </div>
    );
  }
}
