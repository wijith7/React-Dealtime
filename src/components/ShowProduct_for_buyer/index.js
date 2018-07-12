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

  pass_cart(product){

//     var orderJSON = {"ID":product.ID,"name":product.name,"price":product.price};
//
//     var obj = JSON.stringify(orderJSON);
//     var ob = new Array(obj);
//
//     var a = [];
//
// //localStorage.removeItem("pro");
//
// a.push(JSON.parse(localStorage.getItem('session')));
// localStorage.setItem('session', JSON.stringify(a));
// //localStorage.setItem("pro", obj);
//
// a = JSON.parse(localStorage.getItem('session'));
// a.push(data);
// localStorage.setItem('session', JSON.stringify(a));
//
//
// var re = JSON.parse(localStorage.getItem('pro'));
//    console.log(re);
   //
   //  var pro='';
   //  var pro_list =[];
   //
   //  pro_list.push(orderJSON);
   //
   //  localStorage.setItem("pro", obj);
   //
   //   var re = JSON.parse(localStorage.getItem("pro"));
   //
   //
   // console.log(re);


    // if(pro != null){
    //
    //   pro.push(obj);
    //
    // }

    // var prodObj = {"ID":product.ID,"name":product.name,"price":product.price};
    //
    // var cart = window.localStorage.getItem('cart');
    //
    // if(cart == null){
    //
    //   cart = {"items" : [prodObj]}
    //
    // }
    //
    // else{
    //
    //   cart = cart["items"].push(prodObj);
    // }
    //
    // window.localStorage.setItem('pro', prodObj);



// for(var i=0; i<pro.length; i++){
//    var re = JSON.parse(localStorage.getItem[i]);
//
//       console.log(re);
// }
  //  return orderJSON;



}
  componentDidMount() {
    //setState loading
    this.setState({loading: true});
    getProducts().then((res = []) => {
    this.setState({products: res, loading: false})
    });
  }

  render() {

    //get ID from the url
    const ID_Number = (parseInt(this.props.match.params.ID));
    if (this.state.loading) {

      return (<div>Loading ...</div>);

    }

    return (<div>{

        this.state.products.map((product) => {

        if (product.ID == ID_Number)
        {
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

                           <div className="product">

                    <p id="product-description1">{product.description}</p>

                    <p id="product-description2">{product.stock}  Items Remaining </p>

                    <p id="product-price">${product.price}</p>

                        <div>

                        <button onClick={() => this.pass_cart(product)}>

                            <Icon medium="small" id="cart"><p id= "product-description" >Add To Cart</p>add_shopping_cart</Icon>

                        </button>

                        </div>

                           </div>
                  <div className="product-review"></div>
                    </div>
              </div>



            </div>
                   )

            }
        })
      }
  </div>
  );

  }
}
