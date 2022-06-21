import React, { useState } from "react";
import styles from "./ItemInCart.module.scss";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import Button from "../../../components/button/Button";
import ListItemCart from "./ListItemCart";

const cx = classNames.bind(styles);

const ItemInCart = () => {
  const listCart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const ListCart = listCart.map((item) => (
    <ListItemCart
      key={item.id}
      id={item.id}
      src={item.src}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
    />
  ));

  return (
    <div className={cx("ItemInCart")}>
      <div className={cx("ItemInCart__inner")}>
        <div className={cx("ItemInCart__title", "table")}>
          <span className={cx("row-delete")}></span>
          <span className={cx("ItemInCart__text", "row-product")}>PRODUCT</span>
          <span className={cx("ItemInCart__text", "row-rest")}> PRICE</span>
          <span className={cx("ItemInCart__text", "row-rest")}> QUANTITY</span>
          <span className={cx("ItemInCart__text", "row-rest")}> SUBTOTAL</span>
        </div>
        {ListCart}
        <div className={cx("ItemInCart__total")}>
          <h3 className={cx("heading")}>CART TOTALS</h3>
          <div className={cx("ItemInCart__total__container")}>
            <span className={cx("ItemInCart__total__title")}>TOTAL</span>
            <span className={cx("ItemInCart__total__price")}>
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
        <div className={cx("button")}>
          <Button large primary spacing>
            ORDER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemInCart;
