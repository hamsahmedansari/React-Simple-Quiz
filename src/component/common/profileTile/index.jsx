import React from "react";
import "./style.scss";

const ProfileTile = props => {
  const { username, rating } = props;
  return (
    <div
      className={`flex-align-item-space-between flex-column flex-container flex-justify-space-between flex-wrap profileTile
    ${
      rating
        ? rating >= 3
          ? rating >= 5
            ? rating >= 7
              ? rating >= 8
                ? "color-9"
                : "color-8"
              : "color-7"
            : "color-5"
          : "color-3"
        : "color-1"
    }
    `}
    >
      <div className="item w-100 text-right">
        <i className="far fa-user" />
      </div>
      <div className="item">
        <h1>{rating}</h1>
      </div>
      <div className="item w-100">
        <p className="text-center">
          {username.length > 16
            ? String(username)
                .slice(0, 16)
                .concat("...")
            : username}
        </p>
      </div>
    </div>
  );
};

export default ProfileTile;
