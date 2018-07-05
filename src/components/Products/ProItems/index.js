//Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
//import '../index.css';
//Internals
import { getProducts } from '../../Data';

export default class ProItems extends React.Component {

  constructor(){
    super();
    this.state = {
      products: [],
      loading: false,
    }
  }

  componentDidMount(){
    //setState loading
    this.setState({
      loading: true,
    });
    getProducts().then((res = [])=>{
      console.log('resssss', res)
      this.setState({
        products: res,
        loading: false,
      })
    });

    //setState products
  }

  render(){
    if ( this.state.loading) {
      return (
        <div>Loading ...</div>
      );
    }
    return(
      <div>{this.state.products.map((product)=>{
        return(
          <div className="items">
          <div className="product-img">
          <img alt={product.name} src={product.img} />
          </div>
          <div className="product-detai">
          <h1 id="product-name">{product.name}</h1>
          <h4 id="product-description">{product.description}</h4>
          </div>
          <div className="price-add">
          <h5 id="product-price">${product.price}</h5>
          <Icon small onClick={() => this.addProduct(product)} id="add-icon">add_shopping_cart</Icon>
          </div>
          </div>
        )
      })}
      </div>
    );
  }
}
