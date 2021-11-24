import UserBox from "./UserBox";
import React from "react";
import RecentActivities from "./RecentActivities";

class UserPanel extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            Logo i nazwa
          </h1>
        </header>
        <UserBox name="Jan Kowalski" avatarUrl="http://s.cdpn.io/3/kiwi.svg"/>
        <RecentActivities/>
      </div>
    );
  }
}

export default UserPanel;