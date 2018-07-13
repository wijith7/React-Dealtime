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
//import React from 'react';
import find from 'lodash/find';
import {Link} from 'react-router-dom';
import {Icon} from 'react-materialize';
import {getProducts} from '../Data';
//import PRODUCTS from '../Data';
import './index.css';


export default class ShowProduct extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      loading: false
    }
  }

  componentDidMount() {
//debugger;
    //setState loading
    this.setState({loading: true});
    getProducts().then((res = []) => {
    this.setState({products: res, loading: false})
    });
  }

  render() {


   var re = JSON.parse(localStorage.getItem('item'));

   for(var i=0; i<re.length; i++){

        re=re[i];
        
      }
          //  console.log(typeof(re));

//console.log(re);


    //get ID from the url

    if (this.state.loading) {

      return (<div>Loading ...</div>);

    }

    return (<div>{
        this.state.re.map((product) => {


            return (<div className="show-product">
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
                    <p id="product-price">${product.price}</p>
                    <Icon small="small" id="add-icon">add_shopping_cart</Icon>
                  </div>
                  <div className="product-review"></div>
                </div>
              </div>

              <div className="item-form">
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Numbers of items:
                    <input type="Number"ref={node =>(this.inputNode = node)} />
                  </label>
                  <input type="submit" className="button success"  onClick={this.submit}/>
                </form>
              </div>

            </div>)


        })
      }
    </div>);


}
}
