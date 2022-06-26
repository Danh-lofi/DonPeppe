import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import classNames from "classnames/bind";

import { IconMenuTablet, IconSearch } from "../../../icon/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Button from "../../../components/button/Button";
import Cart from "./cart/Cart";
import Search from "./search/Search";

const cx = classNames.bind(styles);

const Header = () => {
  const [isMenuTablet, setIsMenuTablet] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isShrink, setIsShrink] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const closeTabSearch = () => {
    setIsSearch(false);
  };

  const closeMenuTabletHandler = () => {
    setIsMenuTablet(false);
  };

  useEffect(() => {
    const shrinkHeader = () => {
      if (document.documentElement.scrollTop < 400) {
        setIsShrink(true);
        setIsHide(false);
      } else {
        if (document.documentElement.scrollTop < 600) {
          setIsShrink(false);
          setIsHide(true);
        } else {
          setIsShrink(true);
          setIsHide(false);
        }
      }
    };

    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  const clickSearchHandler = () => {
    setIsSearch(true);
    setIsMenuTablet(false);
  };
  return (
    <div
      className={cx(
        "header",
        { open: !isSearch },
        { shrink: isShrink },
        { hide: isHide }
      )}
    >
      <div className={cx("container")}>
        <Link to="/" className={cx("logo")}>
          <img
            src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/logo.png"
            alt="logo"
          />
        </Link>
        <div className={cx("menu")}>
          <div className={cx("products", "menu-item")}>
            <Link to="/product" className={cx("products-text")}>
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

        <div className={cx("menu-tablet")}>
          <div className={cx("menu-table__cart")}>
            <Cart />
          </div>
          <div
            className={cx("menu-tablet__menusub__icon")}
            onClick={() => setIsMenuTablet(true)}
          >
            <IconMenuTablet />
          </div>
        </div>
      </div>

      {isSearch && <Search closeTabSearch={closeTabSearch} />}

      <div className={cx("menu-tablet__container", { active: isMenuTablet })}>
        <div className={cx("menu-tablet__inner", { active: isMenuTablet })}>
          <div
            className={cx("menu-tablet__close")}
            onClick={() => setIsMenuTablet(false)}
          >
            <span>&times;</span>
          </div>
          <ul className={cx("menu-tablet__list")}>
            <li
              className={cx("menu-tablet__item")}
              onClick={closeMenuTabletHandler}
            >
              <Link to="/" className={cx("menu-tablet__link")}>
                Home
              </Link>
            </li>
            <li
              className={cx("menu-tablet__item")}
              onClick={closeMenuTabletHandler}
            >
              <Link to="/product" className={cx("menu-tablet__link")}>
                Menu Filter
              </Link>
            </li>
            <li
              className={cx("menu-tablet__item")}
              onClick={clickSearchHandler}
            >
              Search
            </li>
            <li
              className={cx("menu-tablet__item")}
              onClick={closeMenuTabletHandler}
            >
              <Link to="/shop" className={cx("menu-tablet__link")}>
                Order Online
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
