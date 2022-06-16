import React from "react";
import Header from "../header/Header";
import "./ProfileInfo.scss";
const ProfileInfo = () => {
  return (
    <>
      <Header />
      <div className="formInfo">
        <h3>PROFILE INFORMATION</h3>
        <input type="text" placeholder="Name" className="formInput" />
        <input type="text" placeholder="Last Name" className="formInput" />
        <input type="email" placeholder="Email" className="formInput" />
        <input type="tel" placeholder="Phone number" className="formInput" />
        <div className="formButtonGroup">
          <button type="button" className="formButton">
            EDIT
          </button>
          <button type="button" className="formButton">
            SAVE
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
