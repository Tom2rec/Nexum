import React from "react";
import RecentActivity from "./RecentActivity";

class RecentActivities extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Ostatnie aktywności
        </h2>
        <RecentActivity type="kajakowanie" otherUsersCount="2"/>
      </div>
    );
  }
}

export default RecentActivities;