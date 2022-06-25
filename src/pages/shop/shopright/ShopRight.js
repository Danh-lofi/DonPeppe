import React, { useEffect, useState } from "react";
import styles from "./shopright.module.scss";
import className from "classnames/bind";

import Cart from "../../../components/cart/Cart";
import ShopHeading from "./shopheading/ShopHeading";
import ShopFoot from "./shopfoot/ShopFoot";
import ModalDetail from "../../../layout/components/modal/ModalDetail";

const cx = className.bind(styles);
const API =
  "https://donpeppe-aab2a-default-rtdb.asia-southeast1.firebasedatabase.app/donpeppes.json";

const ShopRight = (props) => {
  const [listCart, setListCart] = useState([]);
  const [page, setPage] = useState({
    totalCart: 0,
    currentPage: 1,
  });
  const arange = props.arange;
  useEffect(() => {
    const getListCart = async () => {
      const response = await fetch(API);
      const data = await response.json();
      const carts = [];
      for (const key in data) {
        if (data[key].catogery.includes(arange.category)) {
          const cart = {
            id: key,
            name: data[key].name,
            discount: data[key].discount,
            img: data[key].img,
            price: data[key].price,
            type: data[key].type,
            category: data[key].catogery,
          };
          carts.push(cart);
        }
      }
      setListCart(carts);
      setPage({
        totalCart: carts.length,
        totalPage: (carts.length / 12).toFixed(),
        cartOnPage: 12,
        currentPage: 1,
      });
    };
    getListCart();
  }, [props.arange]);

  const Carts = listCart.map((cart, id) => {
    console.log(cart);
    let start = (page.currentPage - 1) * page.cartOnPage + 1;
    let end =
      page.totalPage == page.currentPage
        ? page.totalCart
        : page.currentPage * page.cartOnPage;
    let index = id + 1;
    if (start <= index && index <= end) {
      return (
        <Cart
          key={cart.id}
          id={cart.id}
          src={cart.img}
          name={cart.name}
          price={cart.price}
          type={cart.type}
          discount={cart.discount}
        />
      );
    }
  });

  const changePage = (id) => {
    setPage((props) => ({ ...props, currentPage: id }));
  };
  const prePage = () => {
    let currentPage = page.currentPage - 1;
    if (currentPage > 0) {
      setPage((props) => ({ ...props, currentPage: currentPage }));
    }
  };

  const nextPage = () => {
    let currentPage = page.currentPage + 1;
    if (currentPage > page.currentPage) {
      setPage((props) => ({ ...props, currentPage: currentPage }));
    }
  };
  return (
    <div className={cx("container")}>
      <div>
        <ShopHeading page={page} />
      </div>
      <div className={cx("list__cart")}>
        <div className={cx("list__cart__container")}>{Carts}</div>
      </div>
      <div>
        <ShopFoot
          page={page}
          changePage={(id) => changePage(id)}
          prePage={prePage}
          nextPage={nextPage}
        />
      </div>
      <ModalDetail />
    </div>
  );
};

export default ShopRight;
