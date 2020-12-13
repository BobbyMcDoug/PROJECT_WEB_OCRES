import React from "react";
import axios from 'axios';
import NavbarAdmin from "./NavbarAdmin";


class Admin extends React.Component {

    render() {
        return(
            <div class="container-fluid">
                <NavbarAdmin/>
            <div class="container-fluid" style={{height : "100%", width :"100%", backgroundColor :  "red"}}>

                        <div class="row" >
                        <div class="col-sm-12" style = {{margin : "auto"}}>
                            <p>Nom : </p>
                            <input type="text" placeholder="Entrer le nom de l'item" ></input>
                        </div>
                        <div class="col-sm-12" style = {{margin : "auto"}}>
                            <p>Prix : </p>
                            <input type="text" placeholder="Entrer le prix de l'item" ></input>
                        </div>
                            
                        </div>
                        <div class="row" style = {{marginTop : "1%"}}>
                            <div class="col-sm-12">
                            <p>Date de création : </p>
                            <input type="text" placeholder="Entrer la date" ></input>
                            </div>
                        </div>
                        <div class="row" style = {{marginTop : "2%"}}>
                            <div class="col-sm-10">
                            <p></p>
                            </div>
                            <div class="col-sm">
                                <a><input type="button" value="Submit" onClick={this.BarChart}></input></a>
                            </div>
                        </div>
                        <br></br>
                    </div>
                    
                        
                    
                    </div>
                    
                    
                );
    }
}
export default Admin;