import React from "react";
import Avatar from "./Avatar";
import '../assets/Styles/card.css'

function UserprofileCard() {
  return (
    <div className="card">
      <Avatar />
      <div className="card-name"> Solomon Ugwu </div>
      <div className="card-bio">Software Engineer</div>
    </div>
  );
}

export default UserprofileCard;
