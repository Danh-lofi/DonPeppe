import React from "react";
import styles from "./cartitem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const CartItem = () => {
  return (
    <div className={cx("cart__item")}>
      <div className={cx("cart__item__img")}>
        <img
          src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/product-black-img-1a-400x400.jpg"
          alt=""
        />
      </div>
      <div className={cx("cart__item__info")}>
        <span className={cx("cart__item__info__name")}>SPINACH FETA PESTO</span>
        <span className={cx("cart__item__info__price")}>1X $45.00</span>
      </div>
      <div className={cx("cart__item__close")}>&times;</div>
    </div>
  );
};

export default CartItem;
