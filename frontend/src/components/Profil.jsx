import React from "react";



class Profil extends React.Component  {
    constructor(props){
        super(props);
        this.state = {couleur : this.props.user.couleur};
        this.changerdeStyle=this.changerdeStyle.bind(this);
    }

    changerdeStyle () {
    var randomColor = require('randomcolor');
    this.props.user.couleur=randomColor();
    this.setState({couleur : this.props.user.couleur});
}
render(){
    return(
    <div class="container-fluid">
    <div class="container-fluid" style={{height : "100%", width :"100%", backgroundColor :  this.props.user.couleur}}>
                <div class="row" >
                    <div class="col-sm" >
                        <img  src={this.props.user.photo_prof} style={{height : "100%", width :"50%"}}></img>
                    </div>
                </div>
                <div class="row" style = {{marginTop : "10%"}}>
                <div class="col-sm-6" style = {{margin : "auto"}}>
                    <p>Prenom : {this.props.user.prenom}</p>
                </div>
                <div class="col-sm-6" style = {{margin : "auto"}}>
                    <p>Nom : {this.props.user.nom}</p>
                </div>
                    
                </div>
                <div class="row" style = {{marginTop : "1%"}}>
                    <div class="col-sm-6">
                    <p>Date de Naissance : {this.props.user.date_naiss}</p>
                    </div>
                </div>
                <div class="row" style = {{marginTop : "2%"}}>
                    <div class="col-sm-10">
                    <p></p>
                    </div>
                    <div class="col-sm-2">
                        <a><input type="button" value="Change Style" onClick={this.changerdeStyle}></input></a>
                    </div>
                </div>
                <br></br>
            </div>
            
                
            
            </div>
            
            
        );

    }
}
    

export default Profil;