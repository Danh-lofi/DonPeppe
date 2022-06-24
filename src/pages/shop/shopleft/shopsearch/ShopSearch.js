import React from "react";
import styles from "./shopsearch.module.scss";
import classNames from "classnames/bind";
import { IconSearch } from "../../../../icon/Icon";
const cx = classNames.bind(styles);

const ShopSearch = (props) => {
  return (
    <div className={cx("search__tab")}>
      <div className={cx("search__tab__inner")}>
        <div className={cx("search__tab__input")}>
          <input type="text" placeholder="Search Products..." />
        </div>
        <div className={cx("search__tab__icon", "search__icon")}>
          <IconSearch />
        </div>
      </div>
    </div>
  );
};

export default ShopSearch;
