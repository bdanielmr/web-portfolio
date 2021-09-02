/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styles from "./customTimeCard.module.scss";
const CustomTimeCard = (props) => {
  return (
    <div className={styles.timeline}>
      <div
        className={
          styles.timeline__event +
          " " +
          styles.animated +
          " " +
          styles.fadeInUp +
          " " +
          styles["delay-3s"] +
          " " +
          styles["timeline__event--type4"]
        }
      >
        <div className={styles.timeline__event__icon}>
          <i className={styles["lni-cake"]}></i>
        </div>
        <div className={styles.timeline__event__date}>
          01/12/2020 - 06/07/2021{" "}
        </div>
        <div className={styles.timeline__event__content}>
          <div className={styles.timeline__event__title}>
            CloudApi - PepperMoney
          </div>
          <div className={styles.timeline__event__description}>
            <p>
              - Desarrollo Pepper on-bording :
              <li>Firma desarrollada en React</li>
              <li>Uso de hooks</li>
              <li>ECMAScript 6/7</li>
              <li>Unit test con Jest</li>
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          styles.timeline__event +
          " " +
          styles.animated +
          " " +
          styles.fadeInUp +
          " " +
          styles["delay-3s"] +
          " " +
          styles["timeline__event--type5"]
        }
      >
        <div className={styles.timeline__event__icon}>
          <i className={styles["lni-cake"]}></i>
        </div>
        <div className={styles.timeline__event__date}>
          {" "}
          01/01/2020 - 01/09/2020{" "}
        </div>
        <div className={styles.timeline__event__content}>
          <div className={styles.timeline__event__title}>CloudApi - Rimac</div>
          <div className={styles.timeline__event__description}>
            <p>
              - Desarrollo Portal Rimac :
              <li>Portal de Apis desarrollado en Next.js </li>
              <li>Implementacion de Strapi con node.js CMS </li>
              <li>Desarrollo extras</li>
              <li>
                Investigacion de enfoque de implementacion de porta (Drupal,
                Adobe AIEM, gobierno de APIS)
              </li>
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          styles.timeline__event +
          " " +
          styles.animated +
          " " +
          styles.fadeInUp +
          " " +
          styles["delay-3s"] +
          " " +
          styles["timeline__event--type2"]
        }
      >
        <div className={styles.timeline__event__icon}>
          <i className={styles["lni-cake"]}></i>
        </div>
        <div className={styles.timeline__event__date}>
          {" "}
          01/01/2020 - 01/09/2020{" "}
        </div>
        <div className={styles.timeline__event__content}>
          <div className={styles.timeline__event__title}>CloudApi - Dexma</div>
          <div className={styles.timeline__event__description}>
            <p>
              - Desarrollo Dexma :<li>Soporte - Incidencia OpenClose</li>
              <li>Desarrollo apps para plataforma Dexma en React</li>
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          styles.timeline__event +
          " " +
          styles.animated +
          " " +
          styles.fadeInUp +
          " " +
          styles["delay-3s"] +
          " " +
          styles["timeline__event--type1"]
        }
      >
        <div className={styles.timeline__event__icon}>
          <i className={styles["lni-cake"]}></i>
        </div>
        <div className={styles.timeline__event__date}>
          {" "}
          01/01/2020 - 01/09/2020{" "}
        </div>
        <div className={styles.timeline__event__content}>
          <div className={styles.timeline__event__title}>
            CloudApi - Naturgy
          </div>
          <div className={styles.timeline__event__description}>
            <p>
              - Desarrollo Naturgy :
              <li>
                Soporte de incidencias en las herramientas MarketPlace y
                Servisolar
              </li>
              <li>
                Desarrollo y correccion de bugs en Vue3 con TypeScript desde el
                enfoque de composicion api
              </li>
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          styles.timeline__event +
          " " +
          styles.animated +
          " " +
          styles.fadeInUp +
          " " +
          styles["delay-3s"] +
          " " +
          styles["timeline__event--type3"]
        }
      >
        <div className={styles.timeline__event__icon}>
          <i className={styles["lni-cake"]}></i>
        </div>
        <div className={styles.timeline__event__date}>
          {" "}
          01/01/2020 - 01/09/2020{" "}
        </div>
        <div className={styles.timeline__event__content}>
          <div className={styles.timeline__event__title}>FractalUp</div>
          <div className={styles.timeline__event__description}>
            <p>
              - Desarrollo Portal FractalUp:
              <li>Desarrollo de componentes en Vue y Quasar</li>
              <li>Test unitarios de los componentes con Jest</li>
              <li>Documentacion de componentes con Storybook</li>
              <li>Gitflow y uso de gitlab</li>
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          styles.timeline__event +
          " " +
          styles.animated +
          " " +
          styles.fadeInUp +
          " " +
          styles["delay-3s"] +
          " " +
          styles["timeline__event--type1"]
        }
      >
        <div className={styles.timeline__event__icon}>
          <i className={styles["lni-cake"]}></i>
        </div>
        <div className={styles.timeline__event__date}>
          {" "}
          15/07/2019 - 30/12/2019{" "}
        </div>
        <div className={styles.timeline__event__content}>
          <div className={styles.timeline__event__title}>Sudafi</div>
          <div className={styles.timeline__event__description}>
            <p>
              - Desarrollo aplicacion movil MyLife:
              <li>Desarrollo de aplicacion hibrida en React Native</li>
              <li>Uso de Expo y react native cli</li>
              <li>Uso de fireBase</li>
              <li>Gitflow y uso de github </li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

CustomTimeCard.propTypes = {};

export default CustomTimeCard;
