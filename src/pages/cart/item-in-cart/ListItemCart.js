import React from "react";
import styles from "./ItemInCart.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cartSlice.js";
const cx = classNames.bind(styles);

const ListItemCart = (props) => {
  const dispatch = useDispatch();

  const removeAllItemFromCart = () => {
    dispatch(cartActions.removeAllItemFromCart(props.id));
  };

  const AddItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
      })
    );
  };

  const RemoveItemToCartHandler = () => {
    if (props.quantity > 1) {
      dispatch(cartActions.removeItemFromCart(props.id));
    }
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
        <input
          className={cx("number")}
          type="number"
          value={props.quantity}
          min={1}
        />
        <FontAwesomeIcon
          icon={faAngleUp}
          className={cx("icon__up", "icon__input")}
          onClick={AddItemToCartHandler}
        />
        <FontAwesomeIcon
          icon={faAngleDown}
          className={cx("icon__down", "icon__input")}
          onClick={RemoveItemToCartHandler}
        />
      </div>
      <span className={cx("ItemInCart__item__product__price", "row-rest")}>
        ${(props.price * props.quantity).toFixed(2)}
      </span>
    </div>
  );
};

export default ListItemCart;
