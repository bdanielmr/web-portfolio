/* eslint-disable no-unused-vars */
/* eslint-disable dot-notation */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import styles from "./customCard.module.scss";
const CustomCard = ({ imageBackground = "" }) => {
  const putStylesVar = () => {
    return {
      "--image-background-td": `url(${imageBackground})`,
    };
  };
  return (
    <div style={putStylesVar()} className={styles["movie_card"]} id="bright">
      <div className={styles["info_section"]}>
        <div className={styles["movie_header"]}>
          <img
            className={styles["locandina"]}
            src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
          />
          <h1>Bright</h1>
          <h4>2017, David Ayer</h4>
          <span className={styles["minutes"]}>117 min</span>
          <p className={styles["type"]}>Action, Crime, Fantasy</p>
        </div>
        <div className={styles["movie_desc"]}>
          <p className={styles["text"]}>
            Set in a world where fantasy creatures live side by side with
            humans. A human cop is forced to work with an Orc to find a weapon
            everyone is prepared to kill for.
          </p>
        </div>
        <div className={styles["movie_social"]}>
          <ul>
            <li>
              <i className={styles["material-icons"]}>share</i>
            </li>
            <li>
              <i className={styles["material-icons"]}></i>
            </li>
            <li>
              <i className={styles["material-icons"]}>chat_bubble</i>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.blur_back + " " + styles.bright_back}`}></div>
    </div>
  );
};

CustomCard.propTypes = {};

export default CustomCard;
