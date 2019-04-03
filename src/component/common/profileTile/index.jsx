import React from "react";
import "./style.scss";

const ProfileTile = () => {
  return (
    <div className=" flex-align-item-space-between flex-column flex-container flex-justify-space-between flex-wrap profileTile">
      <div className="item w-100 text-right">
        <i className="far fa-user" />
      </div>
      <div className="item">
        <h1>4.0</h1>
      </div>
      <div className="item w-100">
        <p className="text-center">Hams Ahmed ansari</p>
      </div>
    </div>
  );
};

export default ProfileTile;
