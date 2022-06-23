import React, { useState } from "react";
import styles from "./home.module.scss";
import classNames from "classnames/bind";
import titleBg from "../../assests/imgs/title-shop.jpg";
import bg from "../../assests/imgs/menu-background.png";
import ListCart from "../../components/listcart/ListCart";
import ModalDetail from "../../layout/components/modal/ModalDetail";
import { IconLoading } from "../../icon/Icon";
const cx = classNames.bind(styles);
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const changeLoadingHandler = () => {
    setIsLoading((props) => !props);
  };
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
          <div className={cx("home__menu__loading")}>
            <IconLoading active={isLoading} />
          </div>
          <div className={cx("home__menu__inner")}>
            <ListCart changeLoadingHandler={changeLoadingHandler} />
          </div>
        </div>
      </div>

      <ModalDetail />
    </div>
  );
};

export default Home;
