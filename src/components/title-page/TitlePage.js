import React from "react";
import styles from "./TitlePage.module.scss";
import classNames from "classnames/bind";
import bg from "../../assests/imgs/menu-background.png";
const cx = classNames.bind(styles);
const TitlePage = (props) => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className={cx("container")}>
      <div className={cx("inner")}>{props.children}</div>
    </div>
  );
};

export default TitlePage;
