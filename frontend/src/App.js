import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import Supprimer from "./components/Supprimer";
import Ajouter from "./components/Ajouter";
import Update from "./components/Update";
import Rechercher from "./components/Rechercher";
import Sales from "./components/Sales";






console.log(window.location.pathname); //si on peut voir l'url en haut
var id =
  window.location.pathname[1] === undefined ? 0 : window.location.pathname[1];
console.log("id: ", id);
class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

     <Router>
      <div className="container-fluid"> 
      <Navbar/>
      <br/>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/Admin" component={Admin}/>
      <Route path="/Supprimer" component={Supprimer}/>
      <Route path="/Ajouter" component={Ajouter}/>
      <Route path="/Update" component={Update}/>
      <Route path="/Rechercher" component={Rechercher}/>
      <Route path="/Sales" exact component={Sales} />
      </div>
 
</Router>
    );
  }
}

export default App;
