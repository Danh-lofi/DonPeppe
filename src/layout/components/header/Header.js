import React, { useState } from "react";
import styles from "./header.module.scss";
import classNames from "classnames/bind";
import { IconCart, IconSearch } from "../../../icon/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Button from "../../../components/button/Button";
import Popper from "../../../components/popper/Popper";

const cx = classNames.bind(styles);

const Header = () => {
  let isCart = false;
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
            <span className={cx("products-text")}>Products</span>
          </div>
          <div className={cx("cart", "menu-item")}>
            <span className={cx("cart__logo")}>
              <IconCart />
            </span>
            <span className={cx("cart__number")}>1</span>
            <span className={cx("cart-text")}>CART</span>
            <div className={cx("cart__popper")}>
              <Popper>
                {isCart ? (
                  <p>No products in the cart.</p>
                ) : (
                  <div className={cx("drop")}>
                    <div className={cx("drop__header")}>YOUR BASKET:</div>
                    <div className={cx("drop__container")}>
                      <div className={cx("drop__container__img")}>
                        <img
                          src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/product-black-img-1a-400x400.jpg"
                          alt=""
                        />
                      </div>
                      <div className={cx("drop__container__info")}>
                        <span className={cx("drop__container__info__name")}>
                          SPINACH FETA PESTO
                        </span>
                        <span className={cx("drop__container__info__price")}>
                          1X $45.00
                        </span>
                      </div>
                      <div className={cx("drop__container__close")}>
                        &times;
                      </div>
                    </div>
                    <div className={cx("drop__footer")}>
                      <div className={cx("drop__footer__inner")}>
                        <span className={cx("drop__footer__title")}>
                          TOTAL PAYMENT:
                        </span>
                        <span className={cx("drop__footer__total-price")}>
                          $45.00
                        </span>
                      </div>
                      <div className={cx("drop__footer__note")}>
                        <span>*Minimum order 10$</span>
                      </div>
                    </div>

                    <div className={cx("drop__buttons")}>
                      <div className={cx("drop__buttons__left")}>
                        <Button primary link="/cart">
                          SHOPPING CART
                        </Button>
                      </div>
                      <div className={cx("drop__buttons__right")}>
                        <Button link="/checkout">CHECKOUT</Button>
                      </div>
                    </div>
                  </div>
                )}
              </Popper>
            </div>
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
