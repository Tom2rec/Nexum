import React, {Component} from "react";

export default class FriendComponent extends Component {
    constructor(props) {
        super(props);

    }

    getAge(date) {
        var date = Date.parse(date);
        date = new Date(date);
        var now = new Date();
        return now.getFullYear() - date.getFullYear();
    }


    render() {
        return (

            <div >
                {this.props.friends.map((friend) => (
                    <div className="card text-center" id={friend['id']}>
                        <div id={friend['id']}>
                            <div>
                                {friend['name'] + " from " + friend['city'] + ", "}
                                <br/>
                                {this.getAge(friend['dateOfBirth']) + " years old."}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}