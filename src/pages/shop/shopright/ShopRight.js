import React from "react";
import styles from "./shopright.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);
const ShopRight = () => {
  return <div className={cx("container")}>ShopRight</div>;
};

export default ShopRight;
