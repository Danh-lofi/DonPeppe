import React from "react";
import styles from "./shop.module.scss";
import className from "classnames/bind";

import TitlePage from "../../components/title-page/TitlePage";
import ShopLeft from "./shopleft/ShopLeft";
import ShopRight from "./shopright/ShopRight";

const cx = className.bind(styles);
const Shop = () => {
  return (
    <div className={cx("shop")}>
      <TitlePage>SHOP</TitlePage>
      <div className={cx("shop__container")}>
        <div className={cx("shop__inner")}>
          <div className={cx("shop__left")}>
            <ShopLeft />
          </div>
          <div className={cx("shop__right")}>
            <ShopRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
