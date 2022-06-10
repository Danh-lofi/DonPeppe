import React from "react";
import styles from "./cart.module.scss";
import classNames from "classnames/bind";

import { IconCart } from "../../../../icon/Icon";
import Button from "../../../../components/button/Button";
import Popper from "../../../../components/popper/Popper";
import CartItem from "../cart-item/CartItem";

const cx = classNames.bind(styles);

const Cart = () => {
  let isCart = false;
  return (
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
                <CartItem />
                <CartItem />
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
  );
};

export default Cart;
