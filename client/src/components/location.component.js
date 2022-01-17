import React, {Component} from "react";
import LocationService from "../services/location.service";

export default class LocationComponent extends Component {
    constructor(props) {
        super(props);


        this.state = {
            locations: []
        };
    }

    componentDidMount() {
        LocationService.getAllLocations().then(
            response => {
                this.setState({
                    locations: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }

    render() {

        let locations = this.state.locations;

        if(localStorage.getItem('locations')){
            locations = localStorage.getItem('locations');
            localStorage.removeItem('locations');
        }

        return (
            <div>

                <div className="card-deck">
                    {this.state.locations.map((location) => (
                        <div className="card text-center" id={location['id']}>
                            <div className="card-header">{location['category']}</div>
                            <div className="card-body">
                                {Object.keys(location).map((key) => {
                                    if(key === 'id' || key === 'locationName')
                                        return;
                                    if(key === 'address')
                                        return <div id={key + location['id']} className="container">
                                            <span className="left">Address</span><br/>
                                            <span className="right"> {location[key]+" ul. "}{location['locationName']}</span>
                                            <br/>
                                            <br/>
                                        </div>
                                    if(key === 'category')
                                        return <div id={key + location['id']} className="container">
                                            <span className="left">Category: </span>
                                            <span className="right"> {location[key]}</span>
                                            <br/>
                                        </div>
                                    if(key === 'numberOfPeople')
                                        return <div id={key + location['id']} className="container"><br/>
                                            <span className="right"> {"Activity for "+location[key] +" people."}</span>
                                            <br/>
                                        </div>

                                    return <div id={key + location['id']} className="container">
                                        <span className="left">{key}</span>
                                        <span className="right"> {location[key]}</span>
                                        <br/>
                                    </div>
                                })}
                            </div>
                        </div>
                    ))}


                </div>
                <div style={{textAlign: "center"}}>
                    <a className="btn btn-primary"
                       href={"/locations/search"}>
                        Filter
                    </a>
                </div>
            </div>

        );
    }

}