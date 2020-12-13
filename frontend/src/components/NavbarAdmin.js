import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavbarAdmin extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Admin</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/admin" className="nav-link">Creation</Link>
          </li>
          <li className="navbar-item">
          <Link to="/admin" className="nav-link">Recherche</Link>
          </li>
          <li className="navbar-item">
          <Link to="/admin" className="nav-link">Suppression</Link>
          </li>
          <li className="navbar-item">
          <Link to="/admin" className="nav-link">Mise à jour</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}