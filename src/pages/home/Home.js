import React from "react";
import styles from "./home.module.scss";
import classNames from "classnames/bind";
import titleBg from "../../assests/imgs/title-shop.jpg";
import bg from "../../assests/imgs/menu-background.png";
import ListCart from "../../components/listcart/ListCart";
import ModalDetail from "../../layout/components/modal/ModalDetail";
const cx = classNames.bind(styles);
const Home = () => {
  return (
    <div className={cx("home")} style={{ backgroundImage: `url(${bg})` }}>
      <div className={cx("home__inner")}>
        <div className={cx("home__title")}>
          <img src={titleBg} alt="title" />
          <div className={cx("home__title__container")}>
            <h3 className={cx("home__title__chonse")}>CHOOSE YOUR FAVORITE</h3>
            <h2 className={cx("home__title__name")}>MENU DARK</h2>
          </div>
        </div>
        <div className={cx("home__menu")}>
          <div className={cx("home__menu__inner")}>
            <ListCart />
          </div>
        </div>
      </div>

      <ModalDetail />
    </div>
  );
};

export default Home;
