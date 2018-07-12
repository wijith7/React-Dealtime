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



  handleSubmit = event => {
    event.preventDefault()
    // console.log({target: event.target})
    // console.log(event.target[0].value)
    console.log(this.inputNode.value)
  }

  constructor() {
    super();
    this.state = {
      products: [],
      loading: false


    }
  }

  submit(){

      console.log('rrrr');

      return false;

}
  componentDidMount() {
    //setState loading
    this.setState({loading: true});
    getProducts().then((res = []) => {
    this.setState({products: res, loading: false})
    });
  }

  render() {

    var re = JSON.parse(window.localStorage.getItem('pro'));
      console.log("rrrrrr");
      console.log(re);

    //get ID from the url
    const ID_Number = (parseInt(this.props.match.params.ID));
    if (this.state.loading) {

      return (<div>Loading ...</div>);

    }

    return (<div>{

            (<div className="show-product">
            <div className="title">
                <h4>My Cart</h4>
            </div>
              <div className="item-wrapper">

                <div className="item-image">

                  <img className="product-image" src={re.img} alt="product"/>
                </div>
                <div className="item-name">
                  <div className="product-info">
                    <h3 id="product-name">{re.name}</h3>
                  </div>
                  <div className="product-bio">
                    <p id="product-description">{re.description}</p>
                    <p id="product-price">${re.price}</p>
                    <Icon small="small" id="add-icon">add_shopping_cart</Icon>
                  </div>
                  <div className="product-review"></div>
                </div>
              </div>



            </div>)



      }
    </div>);

  }
}
