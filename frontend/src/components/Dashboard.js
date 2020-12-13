import React from "react";
import BarChart from "./BarChart";
import LineChart from './LineChart';
import Profil from './Profil';
import ProgressionBar from "./ProgressionBar";
import DoughnutChart from "./DoughnutChart";
import RadarChart from "./RadarChart";


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

  },
  {
    nom: "Bourgeois",
    prenom: "Antoine",
    date_naiss: "25 Decembre",
    photo_prof: "Sala.png",
    couleur: "blue",
  },
];



class Dashboard extends React.Component {

    render() {
        return(

            <div className="container-fluid">
            <div  className="row" style={{ width: "100%" }}>
              <div className="col-sm" style={{ backgroundColor: "white" }}>
                <div className="container" style={{ backgroundColor: "white" }}>
                  <div className="col-md" style={{ backgroundColor: "white" }}><LineChart /></div>
                  
                  <div className="col-md" style={{ backgroundColor: "white" }}><BarChart /></div>
                  <div className="col-md" style={{ backgroundColor: "white" }}><DoughnutChart/></div>
                  
                </div>
              </div>
    
              <div className="col-sm" style={{ backgroundColor: "white" }}>
                <div className="container" style={{ backgroundColor: "white" }}>
                  <div className="col-md" style={{ backgroundColor: "white" }}><Profil user= {profils[1]} /></div>
                  <div className="col-md" style={{ backgroundColor: "white" }}></div>
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
                  <div className="col-md" style={{ backgroundColor: "white" }}><RadarChart /></div>
                </div>
              </div>
            </div>
          </div>        
                    
                );
    }
}
export default Dashboard;