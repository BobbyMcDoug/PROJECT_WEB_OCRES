import React from 'react';
import axios from 'axios';


class Update extends React.Component {

    /// Constructeur
    constructor(props) {
        super(props)

        /// this.state attributes
        this.state = {
            id:'',
            nom:'',
            prenom:'',
            date_naiss:'',
            photo_prof:'',
            couleur:''
            }

        // Binding
        this.onSubmitAdd = this.onSubmitAdd.bind(this)
        this.onChangeId = this.onChangeId.bind(this)
        this.onChangeNom = this.onChangeNom.bind(this)
        this.onChangePrenom = this.onChangePrenom.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangePhoto = this.onChangePhoto.bind(this)
        this.onChangeCouleur = this.onChangeCouleur.bind(this)
    }

    onChangeId(e)
    {
        this.setState({
            id: e.target.value
        })
    }
    onChangeNom(e)
    {
        this.setState({
            nom: e.target.value
        })
    }
    onChangePrenom(e)
    {
        this.setState({
            prenom: e.target.value
        })
    }
    onChangeDate(e)
    {
        this.setState({
            date_naiss: e.target.value
        })
    }
    onChangePhoto(e)
    {
        this.setState({
            photo_prof: e.target.value
        })
    }
    onChangeCouleur(e)
    {
        this.setState({
            couleur: e.target.value
        })
    }

    onSubmitAdd(e) {
        const url = 'http://localhost:5000/profil/update/' + this.state.id;
        axios.post( url, {
            
            nom: this.state.nom,
            prenom: this.state.prenom,
            date_naiss: this.state.date_naiss,
            photo_prof: this.state.photo_prof,
            couleur: this.state.couleur,

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
                    <label> Id à modifier </label>
                    <input type="text" required className="form-control" value={this.state.Id} onChange={this.onChangeId} />
                    <div className="col-md" style={{ backgroundColor: "black" , marginTop : "3%"} }></div>
                    <label> nom </label>
                    <input type="text" required className="form-control" value={this.state.nom} onChange={this.onChangeNom} />
                    <label> prenom </label>
                    <input type="text" required className="form-control" value={this.state.prenom} onChange={this.onChangePrenom} />
                    <label> date de naissance </label>
                    <input type="text" required className="form-control" value={this.state.date_naiss} onChange={this.onChangeDate} />
                    <label> photo de profil </label>
                    <input type="text" required className="form-control" value={this.state.photo_prof} onChange={this.onChangePhoto} />
                    <label> couleur </label>
                    <input type="text" required className="form-control" value={this.state.couleur} onChange={this.onChangeCouleur} />
                </div>
                <a><input type="submit" value="Modifier" className="btn btn-danger btn-block" ></input></a>
            </form>

        );
    }
}
export default Update;