/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import i18n from "i18next";
import PropTypes from "prop-types";
import classes from "./customNavbar.module.scss";
import Link from "next/link";

import { useTranslation } from "react-i18next";

const CustomNavbar = ({
  dataDrop = [
    {
      id: 0,
      url: "/",
      item: "about_me",
      drop: true,
      sub: [
        {
          name: "Perfil",
          icon: "profile",
          url: "/about/perfil",
        },
        {
          name: "Workbook",
          icon: "book",
          url: "/about/projects",
        },
        {
          name: "Blog",
          icon: "blog",
          url: "https://bdanielmr.hashnode.dev/",
        },
      ],
    },
    {
      id: 1,
      item: "contact",
      drop: false,
      url: "/contacto",
    },
    {
      id: 2,
      item: "language",
      drop: true,
      sub: [
        {
          name: "English",
          icon: "",
          url: "/",
          value: "en",
        },
        {
          name: "Español",
          icon: "",
          url: "/",
          value: "es",
        },
      ],
      url: "/",
    },
  ],
}) => {
  const [showOver, setShowOver] = useState(false);
  const { t } = useTranslation()
  const handleEnter = (e) => {
    setShowOver(e?.drop);
  };

  // show items to links
  const CustomItemDrop = ({ items, status }) => {
    const onchangeLanguage = (e) => {
      i18n.changeLanguage(e.target.value);
    }
    return (
      <div className={classes["sub-menu"]}>
        <ul style={{ width: status ? "50%" : "100%"}} id="oap-sub-menu">
          {items.map((item, i) => {
            return (
              <Link key={i} href={`${item?.url}`} passHref>
                <li key={i} className={classes["sub-menu-item"]}>
                  {
                    status ? <><button className={classes["button-languaje"]} onClick={onchangeLanguage} value={item.value}>{item?.value?.toUpperCase()}</button></>:<>
                    <a
                    target="_blank"
                    rel="noreferrer"
                    key={i}
                    className={`${
                      classes[`${"sub-menu-item-icon-" + item.icon}`]
                    }`}
                  ></a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    key={item.name}
                    className={classes.a}
                  >
                    {item.name}
                  </a>
                    </>
                  }

                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div
      className={classes["c-header"]}
      onMouseLeave={() => handleEnter(false)}
    >
      <nav className={classes.nav} id="menu">
        {dataDrop?.map((drop, i) => {
          return (
            <li
              onMouseEnter={() => handleEnter(drop)}
              key={drop.item + i}
              className={classes["nav-item"]}
            >
              <Link
                className={classes["nav-item-a"]}
                id="oap"
                href={`${drop?.url}`}
              >
                {drop.item === "language" ? 
                (<a
                  key={drop.item}
                  className={`${
                    classes[`${"sub-menu-item-icon-language"}`]
                  }`}
                ></a>) : t(`home.${drop.item}`) }
              </Link>

              {drop.drop && <CustomItemDrop items={drop.sub} status={drop.item === "language"} />}
            </li>
          );
        })}
      </nav>
    </div>
  );
};

CustomNavbar.propTypes = {
  links: PropTypes.array,
};

export default CustomNavbar;
