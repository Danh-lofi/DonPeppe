import React from "react";
import styles from "./ItemInCart.module.scss";
import classNames from "classnames/bind";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cartSlice.js";

import InputQuantity from "../../../components/input/InputQuantity";
const cx = classNames.bind(styles);

const ListItemCart = (props) => {
  const dispatch = useDispatch();

  const removeAllItemFromCart = () => {
    dispatch(cartActions.removeAllItemFromCart(props.id));
  };

  return (
    <div className={cx("ItemInCart__list-item", "table")}>
      <span className={cx("ItemInCart__item__delete", "row-delete")}>
        <div className={cx("pl-20")} onClick={removeAllItemFromCart}>
          &times;
        </div>
      </span>
      <div className={cx("ItemInCart__item__product", "row-product")}>
        <img src={props.src} alt="" />
        <h4 className={cx("ItemInCart__item__product__name")}>{props.name}</h4>
      </div>
      <span className={cx("ItemInCart__item__product__price", "row-rest")}>
        ${props.price.toFixed(2)}
      </span>
      <div className={cx("ItemInCart__item", "row-rest")}>
        <InputQuantity value={props.quantity} id={props.id} />
      </div>
      <span className={cx("ItemInCart__item__product__price", "row-rest")}>
        ${(props.price * props.quantity).toFixed(2)}
      </span>
    </div>
  );
};

export default ListItemCart;
