import React, {Component} from "react";

export default class ActivityComponent extends Component {
    constructor(props) {
        super(props);

    }

    getReadableDate(dateString) {
        let date = Date.parse(dateString);
        date = new Date(date);
        return date.toLocaleString('en-US');
    }

    render() {
        return (
            <div className="card-deck">
                {this.props.activity.map((activity) => (
                    <div className="card text-center" id={activity['id']}>
                        <div className="card-header">{activity['name']}</div>
                        <div className="card-body">
                            {Object.keys(activity).map((key) => {
                                if (key === 'location')
                                    return Object.keys(activity['location']).map((key) => {
                                        if (key === 'id' || key === 'locationName' || key === 'numberOfPeople' || key === 'category' ||key === 'name' )
                                            return;
                                        if (key === 'address' )
                                            return <div id={key + activity['id']} className="container">
                                                <span className="left"><br/>Address</span>
                                                <span className="right"><br/>
                                                    {activity['location']['address']}
                                                    {" ul. "+ activity['location']['locationName']}
                                                </span>
                                                <br/>
                                            </div>
                                        return <div id={key + activity['location']['id']} className="container">
                                            <span className="left">{key}</span>
                                            <span className="right"> {activity['location'][key]}</span>
                                            <br/>
                                        </div>
                                    });
                                if (key === 'activity')
                                    return Object.keys(activity['activity']).map((key) => {
                                        if (key === 'id' || key === 'subCategory' || key === 'name')
                                            return;
                                        if (key === 'category')
                                            return <div id={key + activity['id']} className="container">
                                                <span className="left"><br/>Activity</span>
                                                <span className="right"><br/>
                                                    {activity['activity']['name']}
                                                    {" for "+ activity['location']['numberOfPeople'] + " people"}
                                                </span>
                                                <br/>
                                            </div>
                                        return <div id={key + activity['activity']['id']} className="container">
                                            <span className="left">{key}</span>
                                            <span className="right"> {activity['activity'][key]}</span>
                                            <br/>
                                        </div>
                                    });
                                if (key === 'name' || key === 'id' )
                                    return;
                                if (key === 'timeStart')
                                    return <div id={key + activity['id']} className="container">
                                        <span className="left">From</span>
                                        <span className="right"> {this.getReadableDate(activity[key])}</span>
                                        <br/>
                                    </div>
                                if (key === 'timeEnd')
                                    return <div id={key + activity['id']} className="container">
                                        <span className="left">To</span>
                                        <span className="right"> {this.getReadableDate(activity[key])}</span>
                                        <br/>
                                    </div>
                                if (key === 'additionalInfo')
                                    return <div className="collapse" id={"collapse" + activity['id']}>
                                        <div className="card card-body">
                                            <span className="right"> {activity[key]}</span>
                                        </div>
                                        <br/>
                                    </div>
                                return <div id={key + activity['id']} className="container">
                                    <span className="left">{key}</span>
                                    <span className="right"> {activity[key]}</span>
                                    <br/>
                                </div>

                            })}
                            <p>
                                <br/>
                                <a className="btn btn-primary" data-toggle="collapse"
                                   href={"#collapse" + activity['id']}
                                   role="button" aria-expanded="false" aria-controls="collapseExample">
                                    additional info
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

}