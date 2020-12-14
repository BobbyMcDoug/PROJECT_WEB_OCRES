import React from 'react';
import axios from 'axios';


class Rechercher extends React.Component {

    /// Constructeur
    constructor(props) {
        super(props)

        /// this.state attributes
        this.state = {
            id:'',
            collection: [{}]
            }

        // Binding
        this.onSubmitFind = this.onSubmitFind.bind(this)
        this.onChangeId = this.onChangeId.bind(this)
    }


    onChangeId(e)
    {
        this.setState({
            id: e.target.value
        })
    }

    onSubmitFind(e) {
        const url = 'http://localhost:5000/profil/' + this.state.id;
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
    render() {
        const {collection} = this.state;

        return (

            
            <form onSubmit={this.onSubmitFind}>
                <div className="form-group">
                    <label> Choisissez l'id à rechercher  </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.id}
                        onChange={this.onChangeId}
                    />
                </div>
                <a><input type="submit" value="Trouver" className="btn btn-danger btn-block" ></input></a>
                <div class="container-fluid">
                <img  src={this.state.collection[0].photo_prof} style={{height : "100%", width :"30%"}}></img>
                <p>Prenom : {this.state.collection[0].prenom}</p>
                <p>Nom : {this.state.collection[0].nom}</p>
                <p>Date de Naissance : {collection[0].date_naiss}</p>
                </div>
            </form>


            


        );
    }
}
export default Rechercher;