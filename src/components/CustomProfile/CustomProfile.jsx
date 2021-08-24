import React from "react";
import PropTypes from "prop-types";
import styles from "./customProfile.module.scss";
const CustomProfile = (props) => {
  return (
    <div className={styles["custom-profile"]}>
      <div
        className={styles["c-p-flex1"] + " " + styles["profile-description"]}
      >
        <img
          width="150px"
          height="150px"
          src="https://avatars.githubusercontent.com/u/50649935?v=4"
        />
        <p>About</p>
        <label>
          <p>
            <a>
              front-end-but-kinda-full-stack developer always eager to learn
              good coding practices, currently work width Node and React
            </a>
          </p>
        </label>
        <br></br>
        <p>Contact Information</p>
        <label>
          <p>
            Phone: <a>+51 910 343 108</a>
          </p>
          <p>
            Email: <a>bdanielmr@gmail.com</a>
          </p>
        </label>
        <div className={styles["body-icons-profile-share"]}>
          <div className={styles["body-icons-profile-share-wssp"]}></div>
          <div className={styles["body-icons-profile-share-mail"]}></div>
        </div>
      </div>
      <div
        className={
          styles["c-p-flex2"] + " " + styles["profile-description-body"]
        }
      >
        <label>
          <h2>Bryan Daniel Moncada Ramos</h2>
        </label>
        <label>
          <h4>Developer</h4>
          <p className={styles["body-icons-profile-share-location"]}>
            {" "}
            Peru - Lima
          </p>
        </label>
      </div>
      <div className={styles["c-p-flex3"]}></div>
    </div>
  );
};

CustomProfile.propTypes = {};

export default CustomProfile;
