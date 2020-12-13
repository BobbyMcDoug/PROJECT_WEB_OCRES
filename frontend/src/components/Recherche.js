import React from 'react';
import axios from 'axios';


class Rechercher extends React.Component {

    /// Constructeur
    constructor(props) {
        super(props)

        /// this.state attributes
        this.state = {
            id:''
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
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    render() {
        return (

            <form onSubmit={this.onSubmitFind}>
                <div className="form-group">
                    <label> _id </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.id}
                        onChange={this.onChangeId}
                    />
                </div>
                <a><input type="submit" value="Trouver" className="btn btn-danger btn-block" ></input></a>
            </form>

        );
    }
}
export default Rechercher;