import React, {Component} from "react";

import UserService from "../services/user.service";
import FriendComponent from "./home/friend.component";
import ActivityComponent from "./home/activity.component";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recentActivity: [],
            friends: [],
            recommendation: []
        };
    }

    componentDidMount() {
        UserService.getBoard().then(
            response => {
                this.setState({
                    recentActivity: response.data['recentActivity'],
                    friends: response.data['friends'],
                    recommendation: response.data['recommendations']
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

        let props = {
            activity: this.state.recommendation,
            isRecommendation: true
        }


        return (
            <div className=" row justify-content-between" style={{width: "100%"}}>
                <div className="col-8">
                    <h2>Your recent activity</h2>
                    <div>
                        <ActivityComponent activity={this.state.recentActivity}/>
                    </div>
                    <h2>Recommendation</h2>
                    <div>
                            <ActivityComponent {...props}/>
                    </div>
                </div>

                <div className="col-2">

                    <h3>Meet people</h3>
                    <FriendComponent friends={this.state.friends}/>
                </div>
            </div>
        );
    }
}