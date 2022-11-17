/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styles from "./homePageView.module.scss";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import CustomCard from "../../components/CustomCard/CustomCard";
import { useTranslation } from "react-i18next";
const HomePageView = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerDos}>
          <label className={styles.homeLabelText}>
            <h1 className={styles.text}>{t("home.title")}</h1>
            <h2 className={styles.textTall}>
            <div className={styles.descriptionHome}>{t("home.description")}<a>{t("home.work")}</a></div>
            </h2>
          </label>
          <div></div>
        </div>
        <section
          style={{
            background: "#dcece9",
            paddingTop: "25px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>My Work</h2>

          <CustomCard
            title="Hello Movie"
            imageBackground="https://i.imgur.com/sBbHNzY.jpg"
            description="App that shows information about movies - Made with React and Hooks with use of useReducer and useContext to control the global state; and react-router-dom for routing and more
            "
            tec={["React", "react-router-dom", "hooks", "sass"]}
            link="https://hello-movie.onrender.com/"
          />

          <CustomCard
            title="Heroku User"
            imageBackground="https://i.imgur.com/mc2IBea.jpg"
            description="app that registers users and lists them at home. Performed with vue, vue-router and vuex as global state, use of axios and as vuevalidate for validations including nprogress, sass and others"
            tec={["Vue", "vue-router", "vuex", "sass"]}
            link="http://138.68.54.112/"
          />

          <CustomCard
            title="Weather App"
            imageBackground="https://i.imgur.com/HYLi9Wz.jpg"
            description="app that consumes external weather apis and shows the statistics obtained made with vue"
            tec={["Vue", "vue-router", "axios", "sass"]}
            link="https://codesandbox.io/s/weather-app-2bh3m?file=/src/services/DanServices.js"
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="/about/projects"
              style={{
                cursor: "pointer",
                marginBottom: "25px",
                textDecoration: "underline",
              }}
            >
              show more
            </a>
          </div>
        </section>

        <section
          style={{
            background: "#222",
            color: "black",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "70px",
            alignItems: "center",
            justifyContentc: "center",
          }}
        >
        </section>
      </div>
    </>
  );
};

HomePageView.propTypes = {};

export default HomePageView;
