import React from "react";
import styles from "./shopfoot.module.scss";
import className from "classnames/bind";
const cx = className.bind(styles);

const ItemPage = (props) => {
  const page = props.page;

  return (
    <div
      className={cx("footer__item", {
        active: page.currentPage == props.numPage,
      })}
      onClick={props.onClick}
    >
      {props.numPage}
    </div>
  );
};

export default ItemPage;
