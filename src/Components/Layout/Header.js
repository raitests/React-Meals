import React, { Fragment } from "react";
import classes from "./Header.module.css";
import imgLink from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>React Meals</h2>
        <HeaderCartButton onClick={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={imgLink} alt="An image of food"></img>
      </div>
    </Fragment>
  );
};

export default Header;
