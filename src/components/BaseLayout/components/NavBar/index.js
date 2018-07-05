// Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';

// Internals
import './index.css';

//navigation bar top left corner
const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/products">Home</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/inventory">Inventory</NavLink></li>
        {/*<li><NavLink activeClassName="selected" className="nav-link" to="/men">Men</NavLink></li>*/}
        <li><NavLink activeClassName="selected" className="nav-link" to="/login">Login</NavLink></li>
      </ul>
    </div>
    <div className="shopping-cart">
      <NavLink to="/cart"><Icon medium>shopping_cart</Icon></NavLink>
    </div>
  </nav>
);

export default Navbar;
