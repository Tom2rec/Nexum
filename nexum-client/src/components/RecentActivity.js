import React from "react";

class RecentActivity extends React.Component {
  render() {
    return (
      <div>
        <h6 className="icon">
          O
        </h6>
        <div className="body">
          <div className="title">
            {this.props.type}
          </div>
          <div>
            Z {this.props.otherUsersCount} innymi użytkownikami
          </div>
        </div>
      </div>
    );
  }
}

export default RecentActivity;