import React, { useEffect } from "react";
import styles from "./cart.module.scss";
import classNames from "classnames/bind";
import TitlePage from "../../components/title-page/TitlePage";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "../../components/button/Button";
import ItemInCart from "./item-in-cart/ItemInCart";

const cx = classNames.bind(styles);

const Cart = () => {
  const listCart = useSelector((state) => state.cart.items);
  const [isCart, setIsCart] = useState(false);
  useEffect(() => {
    if (listCart.length > 0) {
      setIsCart(true);
    } else setIsCart(false);
  }, [listCart]);
  return (
    <div className={cx("cart")}>
      <TitlePage>CART</TitlePage>
      <div className={cx("cart__container")}>
        <div className={cx("cart__inner")}>
          {!isCart && (
            <div className={cx("cart__none")}>
              <div className={cx("cart__title")}>
                <h4>Your cart is currently empty.</h4>
              </div>
              <div className={cx("cart__btn")}>
                <Button link="/shop" primary spacing>
                  RETURN TO SHOP
                </Button>
              </div>
            </div>
          )}
          {isCart && <ItemInCart />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
