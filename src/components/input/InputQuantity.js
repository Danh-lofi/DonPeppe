import React from "react";
import styles from "./inputQuantity.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const cx = classNames.bind(styles);
const InputQuantity = (props) => {
  const dispatch = useDispatch();

  const AddItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
      })
    );
  };

  const RemoveItemToCartHandler = () => {
    console.log(props.id);
    if (props.value > 1) {
      dispatch(cartActions.removeItemFromCart(props.id));
    }
  };
  return (
    <div>
      <input
        className={cx("number")}
        type="number"
        value={props.value}
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
  );
};

export default InputQuantity;
