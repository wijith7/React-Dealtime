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
import { getProducts } from '../../DataInventory';


export default class ProItems extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      loading: false,
    }
  }
  //This can be reuse

  //we write this code bcz initialy we have to lode the items from the backend

  componentDidMount() {
    //setState loading
    this.setState({
      loading: true,
    });

    getProducts().then((res = []) => {
      this.setState({
        products: res,
        loading: false,
      })
    });
  }

  render() {

    if (this.state.loading) {
      return (
        <div>Loading ...</div>
      );
    }

    return (

      <div>{this.state.products.map((product) => {
        return (

          <div className="items">
            <div className="product-img">
              <img alt={product.name} src={product.img} />
            </div>

            <div className="product-details">
              <h4 id="product-description">Product ID :{product.ID}</h4>
              <h1 id="product-name">{product.name}</h1>
              <h4 id="product-description">{product.description}</h4>
              <h4 id="product-description">Items in stock :{product.stock}</h4>
            </div>

            <div className="price-add">
              <h5 id="product-price">${product.price}</h5>

              <Link to={`/showproducts/${product.ID}`}>
                <i class="small material-icons icon-blue">add_circle</i>
              </Link>

            </div>
          </div>
        )
      })}
      </div>
    );
  }
}
