import React from "react";



class ProgressionBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div class="container-fluid">
                <div class="container-fluid" style={{ height: "100%", width: "100%", backgroundColor: "pink" }}>
                    <div class="row" >
                        <div class="col-sm" >
                            <h1>Monthly Sale</h1>
                        </div>
                        <div class="progress mb-3">
                            <div class="progress-bar" role="progressbar" aria-valuenow="11500" aria-valuemin="0" aria-valuemax="20000"></div>
                            
                        </div>
                    </div>
                    <div class="row" style={{ marginTop: "10%" }}>
                        <div class="col-sm-6" style={{ margin: "auto" }}>
                            <p>Today :</p>
                            <h1> {this.props.user.vente}</h1>
                        </div>
                        <div class="progress mb-3">
                            <div class="progress-bar" role="progressbar" aria-valuenow="11500" aria-valuemin="0" aria-valuemax="20000"></div>
                            
                        </div>

                    </div>


                </div>



            </div>


        );

    }
}


export default ProgressionBar;