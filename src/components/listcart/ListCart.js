import React, { useEffect, useState } from "react";
import styles from "./listcart.module.scss";
import classNames from "classnames/bind";
import Cart from "../cart/Cart";
const cx = classNames.bind(styles);
const API =
  "https://donpeppe-aab2a-default-rtdb.asia-southeast1.firebasedatabase.app/donpeppes.json";

const ListCart = (props) => {
  const [listCart, setListCart] = useState([]);

  useEffect(() => {
    props.changeLoadingHandler();
    const getListCart = async () => {
      const response = await fetch(API);
      const data = await response.json();
      const carts = [];
      for (const key in data) {
        if (data[key].catogery === "veggie") {
          const cart = {
            id: key,
            name: data[key].name,
            discount: data[key].discount,
            img: data[key].img,
            price: data[key].price,
            type: data[key].type,
          };
          carts.push(cart);
        }
      }
      props.changeLoadingHandler();
      setListCart(carts);
    };
    setTimeout(() => getListCart(), 1500);
  }, []);
  const Carts = listCart.map((cart) => (
    <Cart
      key={cart.id}
      id={cart.id}
      src={cart.img}
      name={cart.name}
      price={cart.price}
      type={cart.type}
      discount={cart.discount}
    />
  ));
  return <div className={cx("menu")}>{Carts}</div>;
};

export default ListCart;
