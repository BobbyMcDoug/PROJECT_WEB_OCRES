import React from "react";
import BarChart from "./BarChart";
import LineChart from './LineChart';
import ProgressionBar from "./ProgressionBar";
import DoughnutChart from "./DoughnutChart";
import RadarChart from "./RadarChart";
import axios from 'axios';


const ventes = [
  {
    vente: 11500,
    last: 20000,
  },
];

class Dashboard extends React.Component {

  constructor(props) {
    super(props)

    /// this.state attributes
    this.state = {
      collection: [
        {}
      ]
    }

    this.componentDidMount = this.componentDidMount.bind(this)
    this.changerdeStyle=this.changerdeStyle.bind(this);

  }

  componentDidMount(e) {
    const url = 'http://localhost:5000/profil/';
    axios.get(url)
      .then(response => {
        this.setState({
          collection: response.data
        })
        console.log(this.state.collection);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  changerdeStyle () {
    var randomColor = require('randomcolor');
    this.state.collection[0].couleur=randomColor();
    this.setState({couleur : this.state.collection[0].couleur});
  }

  render() {

 
    return (

      <div className="container-fluid">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-sm" style={{ backgroundColor: "white" }}>
            <div className="container" style={{ backgroundColor: "white" }}>
              <div className="col-md" style={{ backgroundColor: "white" }}><LineChart /></div>

              <div className="col-md" style={{ backgroundColor: "white" }}><BarChart /></div>
              <div className="col-md" style={{ backgroundColor: "white" }}><DoughnutChart /></div>

            </div>
          </div>

          <div className="col-sm" style={{ backgroundColor: "white" }}>
            <div className="container" style={{ backgroundColor: "white" }}>
              <div className="col-md" style={{ backgroundColor: "white" }}>
                {/* COPIERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR*/}

                <div class="container-fluid">
                  <div class="container-fluid" style={{ height: "100%", width: "100%", backgroundColor: this.state.collection[0].couleur }}>
                    <div class="row" >
                      <div class="col-sm" >
                        <img src={this.state.collection[0].photo_prof} style={{ height: "100%", width: "30%" }}></img>
                      </div>
                    </div>
                    <div class="row" style={{ marginTop: "10%" }}>
                      <div class="col-sm-6" style={{ margin: "auto" }}>
                        <p>Prenom : {this.state.collection[0].prenom}</p>
                      </div>
                      <div class="col-sm-6" style={{ margin: "auto" }}>
                        <p>Nom : {this.state.collection[0].nom}</p>
                      </div>

                    </div>
                    <div class="row" style={{ marginTop: "1%" }}>
                      <div class="col-sm-6">
                        <p>Date de Naissance : {this.state.collection[0].date_naiss}</p>
                      </div>
                    </div>
                    <div class="row" style={{ marginTop: "2%" }}>
                      <div class="col-sm-10">
                        <p></p>
                      </div>
                      <div class="col-sm">
                        <a><input type="button" value="Change Style" onClick={this.changerdeStyle}></input></a>
                      </div>
                    </div>
                    <br></br>
                  </div>



                </div>

                {/* COPIERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR*/}
              </div>
              <div className="col-md" style={{ backgroundColor: "white" }}></div>
              <div className="col-md" style={{ backgroundColor: "white" }}><ProgressionBar user={ventes[0]} /></div>

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