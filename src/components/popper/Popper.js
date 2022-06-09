import React from "react";
import styles from "./popper.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Popper = (props) => {
  return <div className={cx("popper")}>{props.children}</div>;
};

export default Popper;
