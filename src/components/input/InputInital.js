import React, { useState } from "react";
import styles from "./InputInital.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const InputInital = (props) => {
  const number = props.number;
  return (
    <>
      <input className={cx("number")} type="number" value={number} min={0} />
      <FontAwesomeIcon
        icon={faAngleUp}
        className={cx("icon__up", "icon__input")}
        onClick={props.increaseNumberHandler}
      />
      <FontAwesomeIcon
        icon={faAngleDown}
        className={cx("icon__down", "icon__input")}
        onClick={props.decreaseNumberHandler}
      />
    </>
  );
};

export default InputInital;
