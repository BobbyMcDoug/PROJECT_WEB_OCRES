import React from "react";
import axios from 'axios';


class Ajouter extends React.Component {

    /// Constructeur
    constructor(props) {
        super(props)

        /// this.state attributes
        this.state = {
            nom:"",
            prenom:"",
            date_naiss:"",
            photo_prof:"",
            couleur:""
            };

        // Binding
        this.onSubmitAdd = this.onSubmitAdd.bind(this)
        //this.onChangeId = this.onChangeId.bind(this)
    }

    onChangeId(e)
    {
        this.setState({
            nom: e.target.value,
            prenom: e.target.value,
            date_naiss: e.target.value,
            photo_prof: e.target.value,
            couleur: e.target.value
        })
    }

    onSubmitAdd(e) {
        const url = 'http://localhost:5000/profil/add';
        axios.post('/profil', {
            nom: '',
            prenom: '',
            date_naiss: '',
            photo_prof: '',
            couleur: ''

          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    render() {
        return (

            <form onSubmit={this.onSubmitAdd}>
                <div className="form-group">
                    <label> nom </label>
                    <input type="text" required className="form-control" value={this.state.nom} onChange={this.onChangeId} />
                    <label> prenom </label>
                    <input type="text" required className="form-control" value={this.state.prenom} onChange={this.onChangeId} />
                    <label> date de naissance </label>
                    <input type="text" required className="form-control" value={this.state.date_naiss} onChange={this.onChangeId} />
                    <label> photo de profil </label>
                    <input type="text" required className="form-control" value={this.state.photo_prof} onChange={this.onChangeId} />
                    <label> couleur </label>
                    <input type="text" required className="form-control" value={this.state.couleur} onChange={this.onChangeId} />
                </div>
                <a><input type="submit" value="Ajouter" className="btn btn-danger btn-block" ></input></a>
            </form>

        );
    }
}
export default Ajouter;