import React from "react";
import styles from "./shopleft.module.scss";
import className from "classnames/bind";
import ListCategory from "./listcategory/ListCategory";
import Filter from "./filter/Filter";
import ShopSearch from "./shopsearch/ShopSearch";
const cx = className.bind(styles);

const ShopLeft = (props) => {
  return (
    <div className={cx("container")}>
      <div className={cx("category")}>
        <h3 className={cx("title")}>PRODUCT CATEGORIES</h3>
        <ListCategory
          changeCategory={props.changeCategory}
          arange={props.arange}
        />
      </div>
      <div className={cx("filter")}>
        <h3 className={cx("title")}>FILTER BY PRICE</h3>
        <Filter changeFitlerPrice={props.changeFitlerPrice} />
      </div>
      <div className={cx("search")}>
        <h3 className={cx("title")}>SEARCH</h3>
        <ShopSearch />
      </div>
    </div>
  );
};

export default ShopLeft;
