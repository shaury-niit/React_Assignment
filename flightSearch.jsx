import React from 'react';
import axios from 'axios';

class FlightSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: [],
            from: "",
            to: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.getFlights = this.getFlights.bind(this)
    }


    getFlights() {

        axios.get(`http://localhost:7000/flightsList?source=${this.state.from}&destination=${this.state.to}`)
            .then(res => {
                this.setState({ flights: res.data }, () => console.log(this.state.flights));

            });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        let flights = this.state.flights;
        return (
            <div>

                <div className="container search">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-10 card">
                            <div className="card-head">
                                <h4>
                                    <i>Search Flights</i>
                                </h4>
                            </div>
                            <div >
                                <div className="row">
                                    <div className="col-md-3 col-12">

                                        <input type="text" name="from" placeholder="From" onChange={this.handleChange} className="searchInput"
                                            id="searchFrom" required />
                                    </div>

                                    <div className="col-md-3 col-12">

                                        <input type="text" name="to" placeholder="To" onChange={this.handleChange} className="searchInput"
                                            id="searchTo" required />
                                    </div>

                                </div>

                                <div className="row">
                                    <p className="col-md-12 col-12 align-center">
                                        <button name="searchBtn" id="searchBtn" onClick={this.getFlights} className="btn btn-primary">
                                            Search Flights
                            </button>

                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {flights.length ?
                    flights.map((flight) => {
                        return <div>
                            <div className="container flightResults">
                                <div className="flight row justify-content-center" >

                                    <div className="flightProvider col-md-3">
                                        <div className="flightId">{flight.flightId}</div>
                                    </div>
                                    <div className="flightTime col-md-5">
                                        <div className="dep-arr">
                                            <p>{flight.departure}<span className="placeName">{flight.source}</span></p>&nbsp;&nbsp;
                        <span className="dash"></span> &nbsp;&nbsp;
                        <p>{flight.arrival}<span className="placeName">{flight.destination}</span></p>
                                        </div>
                                    </div>
                                    <div className="flightPrice col-md-1">
                                        ${flight.price}
                                    </div>


                                </div>
                            </div>
                        </div>
                    })

                    :
                    <h5><i>No flights to show!</i></h5>
                }




            </div>
        );
    }
}
export default FlightSearch;


