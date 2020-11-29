import React, { Component } from "react";
import LineChart from './components/LineChart';
import Profil from './components/Profil';
import "./App.css";
import BarChart from "./components/BarChart";
import ProgressionBar from "./components/ProgressionBar";
import DoughnutChart from "./components/DoughnutChart";
import RadarChart from "./components/RadarChart";

const ventes = [
  {
    vente : 11500,
    last : 20000,
  },
];


const profils = [
  {
    nom: "Milecki",
    prenom: "Jeremy",
    date_naiss: "13 Novembre",
    photo_prof: "Bulbi.png",
    couleur: "red",
    jaime : 0,
  },
  {
    nom: "Bourgeois",
    prenom: "Antoine",
    date_naiss: "25 Decembre",
    photo_prof: "Sala.png",
    couleur: "blue",
    jaime : 0,
  },
];


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
      <div className="container-fluid">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-sm" style={{ backgroundColor: "white" }}>
            <div className="container" style={{ backgroundColor: "white" }}>
              <div className="col-md" style={{ backgroundColor: "white" }}><a href="/admin">Admin</a><LineChart /></div>
              
              <div className="col-md" style={{ backgroundColor: "white" }}><BarChart /></div>
              <div className="col-md" style={{ backgroundColor: "white" }}><DoughnutChart/></div>
              
            </div>
          </div>

          <div className="col-sm" style={{ backgroundColor: "white" }}>
            <div className="container" style={{ backgroundColor: "white" }}>
              <div className="col-md" style={{ backgroundColor: "white" }}>.</div>
              <div className="col-md" style={{ backgroundColor: "white" }}><Profil user= {profils[1]} /></div>
              <div className="col-md" style={{ backgroundColor: "white" }}><ProgressionBar user= {ventes[0]}/></div>
             
            </div>

          </div>
          <div className="col-sm" style={{ backgroundColor: "white" }}>
            <div className="container" style={{ backgroundColor: "white" }}>
              <div className="container row" style={{ backgroundColor: "white" }}>
                
                <div className="col-md" style={{ backgroundColor: "white" }}> </div>
              </div>
              <div className="col-md" style={{ backgroundColor: "white" }}> </div>
              <div className="col-md" style={{ backgroundColor: "white" }}></div>
              <div className="col-md" style={{ backgroundColor: "white" }}></div>
              <div className="col-md" style={{ backgroundColor: "white" }}><RadarChart /></div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
