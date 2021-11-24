import React from "react";

class Avatar extends React.Component {
  render() {
    return (
      <div className="Avatar" style={{padding: "8px 8px"}}>
        <img src={this.props.url} width={this.props.size} height={this.props.size} alt=""/>,
      </div>
    );
  }
}

export default Avatar;