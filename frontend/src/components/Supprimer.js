import React from "react";
import axios from 'axios';


class Supprimer extends React.Component {


    state = {
        data: [],
        id:null,
        nom: null,
        desc: null,
        image: null,
        idToDelete: 0,
     
      };

    onSubmitDelete(e) {
        const stickynote = {
        title: this.state.title,
        notes: this.state.notes,
        }
        console.log(stickynote);
        const url = 'http://localhost:5000/profils/' + this.state.id;
        axios.delete(url)
        .then(res => {
        console.log(res.data)
        });
        window.location = '/';
        
        } 
    render() {
        return(
            


            <form onSubmit={this.onSubmitDelete}>
            <div className="form-group">
                <label> _id </label>
                <input type="text"
                    required
                    className="form-control"
                    value={this.state.id}
                    onChange={this.onChangeId}
                />
            </div>
            <a><input type="button" value="Submit" ></input></a>
            </form>
    
        );
    }
}
export default Supprimer;