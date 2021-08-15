/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./customNavbar.module.scss";
const CustomNavbar = ({
  dataDrop = [
    {
      id: 0,
      item: "Sobre mi",
      drop: true,
      sub: [
        {
          name: "Perfil",
          icon: "profile",
        },
        {
          name: "Workbook",
          icon: "book",
        },
        {
          name: "Blog",
          icon: "blog",
        },
      ],
    },
    {
      id: 1,
      item: "Contacto",
      drop: false,
    },
  ],
}) => {
  const [showOver, setShowOver] = useState(false);
  const handleEnter = (e) => {
    setShowOver(e?.drop);
  };

  // show items to links
  const CustomItemDrop = ({ items }) => {
    return (
      <div className={classes["sub-menu"]}>
        <ul id="oap-sub-menu">
          {items.map((item, i) => {
            return (
              <li key={i} className={classes["sub-menu-item"]}>
                <a
                  className={`${
                    classes[`${"sub-menu-item-icon-" + item.icon}`]
                  }`}
                ></a>
                <a key={item.name} className={classes.a}>
                  {item.name}
                </a>
              </li>
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
              <a className={classes["nav-item-a"]} id="oap">
                {drop.item}
              </a>

              {drop.drop && <CustomItemDrop items={drop.sub} />}
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
