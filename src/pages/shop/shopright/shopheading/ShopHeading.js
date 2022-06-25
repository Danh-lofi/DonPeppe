import React from "react";
import styles from "./shopheading.module.scss";
import className from "classnames/bind";
const cx = className.bind(styles);

const ShopHeading = (props) => {
  const page = props.page;
  const changeOptionHandler = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <div className={cx("heading")}>
      <div className={cx("heading__left")}>
        Showing {(page.currentPage - 1) * page.cartOnPage + 1} –
        {page.totalPage == page.currentPage
          ? page.totalCart
          : page.currentPage * page.cartOnPage}{" "}
        of {page.totalCart} results
      </div>
      <div className={cx("heading__right")}>
        <select id="orderby" onInput={(e) => changeOptionHandler(e)}>
          <option value="default">Default sorting</option>
          <option value="low">Sort by price: low to high</option>
          <option value="high">Sort by price: high to low</option>
        </select>
      </div>
    </div>
  );
};

export default ShopHeading;
