import Avatar from "./Avatar";
import React from "react";

function UserBox(props) {
  return <div className="User-box" style={
    {border: '2px solid black', borderRadius: '12px'}
  }>
    <Avatar size="96" url={props.avatarUrl}/>
    <div>
      <h2>{props.name}</h2>
    </div>
  </div>
}

export default UserBox