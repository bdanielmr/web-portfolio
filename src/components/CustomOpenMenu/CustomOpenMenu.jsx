/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styles from "./customOpenMenu.module.scss";
const CustomOpenMenu = (props) => {
  return (
    <label className={styles.labelMenuOpen}>
      <input className={styles.inputMenuOpen} type="checkbox" />
      <span className={styles.menu}>
        <span className={styles.hamburger}></span>
      </span>
      <ul className={styles.ulMenuOpen}>
        <p className={styles.aMenuOpen} href="#">
          About me:
          <li style={{ marginLeft: "50%" }}>
            <a href="/about/perfil">Profile</a>
          </li>
          <li style={{ marginLeft: "50%" }}>
            <a href="/about/projects">Workbook</a>
          </li>
          <li style={{ marginLeft: "50%" }}>
            <a
              target="_blank"
              href="https://bdanielmr.hashnode.dev/"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
        </p>

        <p>
          <a className={styles.aMenuOpen} href="/contacto">
            Contact
          </a>
        </p>
      </ul>
    </label>
  );
};

CustomOpenMenu.propTypes = {};

export default CustomOpenMenu;
