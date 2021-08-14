/* eslint-disable react/prop-types */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable dot-notation */
import React, { useState, useEffect, useRef } from "react";

import classes from "./customSticky.module.scss";

const CustomSticky = ({ child, top, emitShow }) => {
  const [isSticky, setSticky] = useState(true);
  const [show, setShow] = useState(false);

  const ref = useRef(null);

  const isSSR = typeof window !== "undefined";
  if (isSSR) {
    window.onscroll = function () {
      myFunction();
    };

    // Get the header
    var header = document.getElementById("myHeader");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  }
  useEffect(() => {
    // Add scroll event when the component is loaded
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove scroll event after the component is unmount,
      // like componentWillUnmount()
      window.removeEventListener("scroll", () => handleScroll);
    };
    // Here, we set useEffect() arguments as empty array.
    // This means useEffect() will only run once after component loaded
  }, []);

  const handleScroll = () => {
    // Make sure ref has current attibute and getBoundingClientRect function
    // otherwise, it could cause getBoundingClientRect undefined error.

    if (ref && ref.current && ref.current.getBoundingClientRect()) {
      // Then, we compare the distance of the ref component to the top
      // with top value we set. If less than, we set isStick ture.

      setSticky(ref.current.getBoundingClientRect().top <= top);
    }
  };
  const moveTop = () => {
    if (!show) {
      return {
        paddingTop: "14px",
      };
    }
  };

  return (
    <div
      id="myHeader"
      className={`${classes?.["sticky__wrapper"]} ${
        isSticky && classes.sticky
      }`}
      ref={ref}
    >
      <div
        className={`${
          classes?.[show ? "sticky--inner" : "sticky--inner-back"]
        }`}
      >
        {child}
      </div>
    </div>
  );
};

export default CustomSticky;
