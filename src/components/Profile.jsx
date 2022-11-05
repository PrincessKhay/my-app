import React from "react";
import "./css/Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <div className="profile">
      <div className="img_div">
        <img id="profile_img" src="images/profile__img.svg" alt="profile " />
        <div className="overlay">
          <FontAwesomeIcon className="icon" icon={faCamera} size="xl" inverse />
        </div>
      </div>
      <a href="https://twitter.com/princess_the5th">
        <p id="twitter">Princess Kemi</p>
      </a>
      {/* <p id="slack">PrincessKhay</p> */}
      <div className="arrow_img">
        <button>
          <img src="images/arrow2.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Profile;
