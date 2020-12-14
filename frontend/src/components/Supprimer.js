import React from "react";
import axios from 'axios';


class Supprimer extends React.Component {

    /// Constructeur
    constructor(props) {
        super(props)

        /// this.state attributes
        this.state = {  
        id:0,
        };
        // Binding
        this.onSubmitDelete = this.onSubmitDelete.bind(this)
        this.onChangeId = this.onChangeId.bind(this)
    }


    /// Methods
    onChangeId(e)
    {
        this.setState({
            id: e.target.value
        })
    }

    onSubmitDelete(e) {
        console.log(this.state.id);
        const url = 'http://localhost:5000/profil/' + this.state.id;
        axios.delete(url)
            .then(res => {
                console.log(res.data)
            });
        window.location = '/';

    }
    render() {
        return (



            <form onSubmit={this.onSubmitDelete}>
                <div className="form-group">
                    <label> Entrez l'id du profil à supprimer </label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.id}
                        onChange={this.onChangeId}
                    />
                </div>
                <a><input type="submit" value="Supprimer" className="btn btn-danger btn-block" ></input></a>
                
            </form>


        );
    }
}
export default Supprimer;