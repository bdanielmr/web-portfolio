/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styles from "./customSocialLinks.module.scss";
const CustomSocialLinks = (props) => {
  return (
    <ul className={styles.ulContainer}>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/bryan-daniel-moncada-ramos-12b5b819a"
        >
          <span></span>
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="#">
          <span></span>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://codesandbox.io/u/bdanielmr"
        >
          <span></span>
        </a>
      </li>
    </ul>
  );
};

CustomSocialLinks.propTypes = {};

export default CustomSocialLinks;
