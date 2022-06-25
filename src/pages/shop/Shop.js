import React, { useState } from "react";
import styles from "./shop.module.scss";
import className from "classnames/bind";

import TitlePage from "../../components/title-page/TitlePage";
import ShopLeft from "./shopleft/ShopLeft";
import ShopRight from "./shopright/ShopRight";

const cx = className.bind(styles);
const Shop = () => {
  const [arange, setArange] = useState({
    sorting: "default",
    category: "",
  });
  const changeSortingHandler = (sorting) => {
    setArange((arange) => ({ ...arange, sorting }));
  };

  const changeCategoryHandler = (category) => {
    setArange((arange) => ({ ...arange, category }));
  };

  return (
    <div className={cx("shop")}>
      <TitlePage>SHOP</TitlePage>
      <div className={cx("shop__container")}>
        <div className={cx("shop__inner")}>
          <div className={cx("shop__left")}>
            <ShopLeft
              changeCategory={(category) => changeCategoryHandler(category)}
            />
          </div>
          <div className={cx("shop__right")}>
            <ShopRight
              arange={arange}
              changeSorting={(sorting) => changeSortingHandler(sorting)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
