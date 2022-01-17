import React, {Component} from "react";
import RecommendationService from "../services/recommendation.service";
import {Link} from "react-router-dom";

export default class RecommendationComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
           recommendation: {}
        }
    };

    getReadableDate = (dateString) =>{
        let date = Date.parse(dateString);
        date = new Date(date);
        return date.toLocaleString('en-US');
    }

    render() {
        RecommendationService.getSpecificRecommendation(this.props.id).then(
        response => {
            this.setState({
                recommendation: response.data,
            });
        });
        let locationId = 2
        return (
            <div className="card-deck">
                <div className="card text-center" id={this.state.recommendation['id']}>
                    <div className="card-header">{this.state.recommendation['name']}</div>
                    <div className="card-body">
                        {Object.keys(this.state.recommendation).map((key) => {
                            if (key === 'location')
                                return Object.keys(this.state.recommendation['location']).map((key) => {
                                    if (key === 'id' || key === 'locationName' || key === 'numberOfPeople' || key === 'category' || key === 'name')
                                        return;
                                    if (key === 'address')
                                        return <div id={key + this.state.recommendation['id']} className="container">
                                            <span className="left"><br/>Address</span>
                                            <span className="right"><br/>
                                                {this.state.recommendation['location']['address']}
                                                {" ul. " + this.state.recommendation['location']['locationName']}
                                                </span><br/><br/>
                                            <a className="btn btn-primary"
                                                  href={"/location/" +this.state.recommendation['location']['id'] }
                                            >
                                                Location
                                            </a>
                                            <br/>
                                        </div>
                                    return <div id={key + this.state.recommendation['location']['id']} className="container">
                                        <span className="left">{key}</span>
                                        <span className="right"> {this.state.recommendation['location'][key]}</span>

                                        <br/>
                                    </div>
                                });
                            if (key === 'activity')
                                return Object.keys(this.state.recommendation['activity']).map((key) => {
                                    if (key === 'id' || key === 'subCategory' || key === 'name')
                                        return;
                                    if (key === 'category')
                                        return <div id={key + this.state.recommendation['id']} className="container">
                                            <span className="left"><br/>Activity</span>
                                            <span className="right"><br/>
                                                {this.state.recommendation['activity']['name']}
                                                {" for " + this.state.recommendation['location']['numberOfPeople'] + " people"}
                                                </span>
                                            <br/>
                                        </div>
                                    return <div id={key + this.state.recommendation['activity']['id']} className="container">
                                        <span className="left">{key}</span>
                                        <span className="right"> {this.state.recommendation['activity'][key]}</span>
                                        <br/>
                                    </div>
                                });
                            if (key === 'name' || key === 'id')
                                return;
                            if (key === 'timeStart')
                                return <div id={key + this.state.recommendation['id']} className="container">
                                    <span className="left">From</span>
                                    <span className="right"> {this.getReadableDate(this.state.recommendation[key])}</span>
                                    <br/>
                                </div>
                            if (key === 'timeEnd')
                                return <div id={key + this.state.recommendation['id']} className="container">
                                    <span className="left">To</span>
                                    <span className="right"> {this.getReadableDate(this.state.recommendation[key])}</span>
                                    <br/>
                                </div>
                            if (key === 'additionalInfo')
                                return <div className="collapse" id={"collapse" + this.state.recommendation['id']}>
                                    <div className="card card-body">
                                        <span className="right"> {this.state.recommendation[key]}</span>
                                    </div>
                                    <br/>
                                </div>
                            return <div id={key + this.state.recommendation['id']} className="container">
                                <span className="left">{key}</span>
                                <span className="right"> {this.state.recommendation[key]}</span>
                                <br/>
                            </div>

                        })}
                        <p>
                            <br/>
                            <a className="btn btn-primary" data-toggle="collapse"
                               href={"#collapse" + this.state.recommendation['id']}
                               role="button" aria-expanded="false" aria-controls="collapseExample"
                               style={{margin: "5px"}}>
                                additional info
                            </a>

                        </p>
                    </div>
                </div>
            </div>
        )
    }


}


