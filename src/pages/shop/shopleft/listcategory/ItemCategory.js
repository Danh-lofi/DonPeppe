import React from "react";
import styles from "./listcategory.module.scss";
import classNames from "classnames/bind";
import MouseTache from "../../../../assests/imgs/moustache.png";

const cx = classNames.bind(styles);
const ItemCategory = (props) => {
  return (
    <li className={cx("category__item")} onClick={props.onClick}>
      <img src={MouseTache} className={cx("category__item__img")} alt="" />
      <span className={cx("category__item__text")}>{props.category}</span>
    </li>
  );
};

export default ItemCategory;
