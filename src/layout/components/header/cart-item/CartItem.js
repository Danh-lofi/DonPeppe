import React from "react";
import styles from "./cartitem.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cartSlice";
const cx = classNames.bind(styles);

const CartItem = (props) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(cartActions.addItemToCart({ id: props.id }));
  };

  const removeItemFromCart = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  };

  const removeAllFromCart = () => {
    dispatch(cartActions.removeAllItemFromCart(props.id));
  };
  return (
    <div className={cx("cart__item")}>
      <div className={cx("cart__item__img")}>
        <img src={props.src} alt="" />
      </div>
      <div className={cx("cart__item__info")}>
        <span className={cx("cart__item__info__name")}>${props.name}</span>
        <span className={cx("cart__item__info__price")}>
          {props.quantity}X ${props.price}
          <div className={cx("cart__item__info__price__change-icon")}>
            <FontAwesomeIcon icon={faMinus} onClick={removeItemFromCart} />
            <FontAwesomeIcon icon={faPlus} onClick={addItemToCart} />
          </div>
        </span>
      </div>
      <div className={cx("cart__item__close")} onClick={removeAllFromCart}>
        &times;
      </div>
    </div>
  );
};

export default CartItem;
