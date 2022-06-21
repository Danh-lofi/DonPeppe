import React, { useState } from "react";
import styles from "./header.module.scss";
import classNames from "classnames/bind";
import { IconSearch } from "../../../icon/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Button from "../../../components/button/Button";
import Cart from "./cart/Cart";

const cx = classNames.bind(styles);

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const closeTabSearch = () => {
    setIsSearch(false);
  };
  return (
    <div className={cx("header", { open: !isSearch })}>
      <div className={cx("container")}>
        <Link to="/" className={cx("logo")}>
          <img
            src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/logo.png"
            alt="logo"
          />
        </Link>
        <div className={cx("menu")}>
          <div className={cx("products", "menu-item")}>
            <Link to="/products" className={cx("products-text")}>
              Menu Filter
            </Link>
          </div>
          <div>
            <Cart />
          </div>
          <div
            className={cx("search", "menu-item")}
            onClick={() => setIsSearch(true)}
          >
            <span className={cx("search__icon")}>
              <IconSearch />
            </span>
            <span className={cx("search-text")}>SEARCH</span>
          </div>
          <div className={cx("order", "menu-item")}>
            <Button primary large link="/shop">
              ORDER ONLINE
            </Button>
          </div>
        </div>
      </div>

      {isSearch && (
        <div className={cx("search__tab")}>
          <div className={cx("search__tab__inner")}>
            <div className={cx("search__tab__icon", "search__icon")}>
              <IconSearch />
            </div>
            <div className={cx("search__tab__input")}>
              <input type="text" placeholder="Search..." />
            </div>
            <div
              className={cx("search__tab__close_1")}
              onClick={closeTabSearch}
            >
              <FontAwesomeIcon
                className={cx("search__tab__close")}
                icon={faCircleXmark}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
