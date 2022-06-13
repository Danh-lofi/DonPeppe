import React from "react";
import styles from "./cart.module.scss";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { modalDetailActions } from "../../store/modalDetailSlice";

import Button from "../button/Button";

const cx = classNames.bind(styles);
const Cart = (props) => {
  const dispatch = useDispatch();
  let typeColor;
  let priceDiscount;

  if (props.discount && props.type) typeColor = "orange";
  else typeColor = "green";

  let price = props.price % 1 === 0 ? `${props.price}.00` : props.price;

  if (props.discount) {
    priceDiscount = props.price - (props.price * props.discount) / 100;
  }

  const openModalHandler = () => {
    dispatch(
      modalDetailActions.openModal({
        id: props.id,
        name: props.name,
        price: props.price,
        src: props.src,
      })
    );
  };

  const addItemToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        src: props.src,
        name: props.name,
        price: props.discount ? priceDiscount : props.price,
      })
    );
  };

  return (
    <div className={cx("cart")}>
      <div className={cx("cart__inner")}>
        <img className={cx("img")} src={props.src} alt="img" />
        <div className={cx("info")}>
          <h4 className={cx("name")}>{props.name}</h4>
          <h4 className={cx("price")}>
            <span className={cx({ price__old: props.discount })}>${price}</span>
            {props.discount && (
              <span className={cx("price__new")}> ${priceDiscount}</span>
            )}
          </h4>
        </div>
        <div className={cx("buttons")}>
          <div className={cx("btn-left")}>
            <Button primary small onClick={addItemToCart}>
              ADD TO CART
            </Button>
          </div>
          <div className={cx("btn-right")}>
            <Button small onClick={openModalHandler}>
              QUICK VIEW
            </Button>
          </div>
        </div>

        {props.type && (
          <div className={cx("type", `${typeColor}`)}>{props.type}</div>
        )}
        {props.discount && (
          <div className={cx("discount", `${typeColor}`)}>
            -{props.discount}%
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
