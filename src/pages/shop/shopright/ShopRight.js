import React, { useEffect, useState } from "react";
import styles from "./shopright.module.scss";
import className from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Cart from "../../../components/cart/Cart";

const cx = className.bind(styles);
const API =
  "https://donpeppe-aab2a-default-rtdb.asia-southeast1.firebasedatabase.app/donpeppes.json";

const ShopRight = () => {
  const [listCart, setListCart] = useState([]);
  const [page, setPage] = useState({
    totalCart: 0,
    currentPage: 1,
  });
  useEffect(() => {
    const getListCart = async () => {
      const response = await fetch(API);
      const data = await response.json();
      const carts = [];
      for (const key in data) {
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
      setListCart(carts);
      setPage({
        totalCart: listCart.length,
        totalPage: (listCart.length / 12).toFixed(),
        cartOnPage: 12,
        currentPage: 1,
      });
    };
    getListCart();
  }, []);
  console.log(page);
  const Carts = listCart.map((cart, id) => {
    let start = (page.currentPage - 1) * page.cartOnPage + 1;
    let end =
      page.totalPage == page.currentPage
        ? page.totalCart
        : page.currentPage * page.cartOnPage;
    console.log(start);
    console.log(end);
    if (start <= id && id <= end)
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
  });

  const changePage = (id) => {
    console.log(page);
    setPage((props) => ({ ...props, currentPage: id }));
  };
  const prePage = () => {};

  const nextPage = () => {};
  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>
        <div className={cx("heading__left")}>
          Showing {(page.currentPage - 1) * page.cartOnPage + 1} –
          {page.totalPage == page.currentPage
            ? page.totalCart
            : page.currentPage * page.cartOnPage}{" "}
          of {page.totalCart} results
        </div>
        <div className={cx("heading__right")}>
          <select id="orderby">
            <option value="default">Default sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="average">Sort by average rating</option>
            <option value="latest">Sort by latest</option>
            <option value="latest">Sort by price: low to high</option>
            <option value="latest">Sort by price: high to low</option>
          </select>
        </div>
      </div>
      <div className={cx("list__cart")}>
        <div className={cx("list__cart__container")}>{Carts}</div>
      </div>
      <div className={cx("footer")}>
        <div className={cx("footer__list")}>
          <div className={cx("footer__inner")}>
            {page.currentPage != 1 && (
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={cx("footer__item")}
                onClick={prePage}
              />
            )}
            <div
              className={cx("footer__item", { active: page.currentPage == 1 })}
              onClick={() => changePage(1)}
            >
              1
            </div>
            <div
              className={cx("footer__item", { active: page.currentPage == 2 })}
              onClick={() => changePage(2)}
            >
              2
            </div>
            <div
              className={cx("footer__item", { active: page.currentPage == 3 })}
              onClick={() => changePage(3)}
            >
              3
            </div>

            {page.currentPage != page.totalPage && (
              <FontAwesomeIcon
                icon={faChevronRight}
                className={cx("footer__item")}
                onClick={nextPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopRight;
