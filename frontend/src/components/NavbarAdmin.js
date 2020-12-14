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
          <Link to="/Ajouter" className="nav-link">Creation</Link>
          </li>
          <li className="navbar-item">
          <Link to="/Rechercher" className="nav-link">Recherche</Link>
          </li>
          <li className="navbar-item">
          <Link to="/Supprimer" className="nav-link">Suppression</Link>
          </li>
          <li className="navbar-item">
          <Link to="/Update" className="nav-link">Mise à jour</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}