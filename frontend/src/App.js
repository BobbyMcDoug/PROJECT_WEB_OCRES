import React, { Component } from "react";

import "./App.css";




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
          <div className="col-sm" style={{ backgroundColor: "blue" }}>
            <div className="container" style={{ backgroundColor: "blue" }}>
              <div className="col-md" style={{ backgroundColor: "blue" }}>.</div>
              <div className="col-md" style={{ backgroundColor: "yellow" }}>ejdfn,sm<br /> ebdhslk</div>
              <div className="col-md" style={{ backgroundColor: "blue" }}>.</div>
              <div className="col-md" style={{ backgroundColor: "yellow" }}>ejdfn,sm<br /> ebdhslk</div>
            </div>
          </div>

          <div className="col-sm-5" style={{ backgroundColor: "green" }}>
            <div className="container" style={{ backgroundColor: "blue" }}>
              <div className="col-md" style={{ backgroundColor: "blue" }}>.</div>
              <div className="col-md" style={{ backgroundColor: "yellow" }}>ejdfn,sm<br /> ebdhslk</div>
              <div className="col-md" style={{ backgroundColor: "blue" }}>.</div>
              <div className="col-md" style={{ backgroundColor: "yellow" }}>ejdfn,sm<br /> ebdhslk</div>
            </div>

          </div>
          <div className="col-sm" style={{ backgroundColor: "pink" }}>
            <div className="container" style={{ backgroundColor: "blue" }}>
              <div className="container row" style={{ backgroundColor: "pink" }}>
                <div className="col-md-7" style={{ backgroundColor: "yellow" }}>e</div>
                <div className="col-md" style={{ backgroundColor: "yellow" }}> <a href="/admin">Admin</a></div>
              </div>
              <div className="col-md" style={{ backgroundColor: "yellow" }}>ejdfn,sm<br /> ebdhslk</div>
              <div className="col-md" style={{ backgroundColor: "blue" }}>.</div>
              <div className="col-md" style={{ backgroundColor: "yellow" }}>ejdfn,sm<br /> ebdhslk</div>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default App;
