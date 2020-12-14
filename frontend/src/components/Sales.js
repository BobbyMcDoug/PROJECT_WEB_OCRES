import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class Sales extends React.Component {

    /// Constructeur
    constructor(props) {
        super(props)

        /// this.state attributes
        this.state = {
            id: '',
            category: '',
            date: new Date(),
            sales: 0,

            Collection: [{}]
        }

        // Binding
        this.onSubmitAdd = this.onSubmitAdd.bind(this)
        this.onChangeId = this.onChangeId.bind(this)
        this.onChangeCategory = this.onChangeCategory.bind(this)
        this.onChangeDate = this.onChangeDate.bind(this)
        this.onChangeSales = this.onChangeSales.bind(this)
    }

    onChangeId(e) {
        this.setState({
            id: e.target.value
        })
    }
    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        })
    }
    onChangeDate(date) {
        this.setState({
            date: date
        })
    }
    onChangeSales(e) {
        this.setState({
            sales: e.target.value
        })
    }


    onSubmitAdd(e) {
        const url = 'http://localhost:5000/sales/add';
        axios.post(url, {

            category: this.state.category,
            date: this.state.date,
            sales: this.state.sales,

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

                <label> Category </label>
                <select className="form-control" required
                    value={this.state.category}
                    onChange={this.onChangeCategory}>
                    <optgroup label="Categories">
                        <option value=""> Selectionnez une catégorie</option>
                        <option value="Books"> Books </option>
                        <option value="Food"> Food</option>
                        <option value="Electronic"> Electronic </option>
                        <option value="Houses">Houses</option>
                        <option value="Cars">Cars</option>
                    </optgroup>
                </select>

                {/* 2eme INPUT = form group */}
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                                    <label htmlFor="email">Sales</label>
                                    <input className="form-control" type="number" placeholder={0} min={0} step="0.01" required 
                                    value={this.state.sales}
                                    onChange={this.onChangeSales}
                                    />
                                </div>
                <a><input type="submit" value="Ajouter" className="btn btn-danger btn-block" ></input></a>
            </form>

        );
    }
}
export default Sales;