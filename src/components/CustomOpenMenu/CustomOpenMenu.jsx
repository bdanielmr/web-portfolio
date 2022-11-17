/* eslint-disable no-unused-vars */
import React from "react";
import i18n from "i18next";
import styles from "./customOpenMenu.module.scss";
import {useRouter} from "next/router";

const CustomOpenMenu = (props) => {
  const handleLanguajeMenu = (e) => {
    i18n.changeLanguage(e);
  }
  return (
    <label className={styles.labelMenuOpen}>
      <input className={styles.inputMenuOpen} type="checkbox" />
      <span className={styles.menu}>
        <span className={styles.hamburger}></span>
      </span>
      <ul className={styles.ulMenuOpen}>
        <ul className={styles.aMenuOpen} href="#">
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
        </ul>

          <ul className={styles.aMenuOpen} href="/contacto">
            Contact
          </ul>


        <ul className={styles.aMenuOpen} href="#">
          Languaje:
            <li  style={{ marginLeft: "50%" }}  href="#"  onClick={()=>handleLanguajeMenu("en")} ><a>English</a></li>
            <li  style={{ marginLeft: "50%" }}  href="#" onClick={()=>handleLanguajeMenu("es")} ><a>Spanish</a></li>
        </ul>

      </ul>
    </label>
  );
};

CustomOpenMenu.propTypes = {};

export default CustomOpenMenu;
