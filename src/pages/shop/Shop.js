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
    priceFrom: 0,
    priceTo: 100,
  });
  const changeSortingHandler = (sorting) => {
    setArange((arange) => ({ ...arange, sorting }));
  };

  const changeCategoryHandler = (category) => {
    setArange((arange) => ({ ...arange, category }));
  };
  const changeFitlerPriceHandler = (priceFrom, priceTo) => {
    setArange((arange) => ({ ...arange, priceFrom, priceTo }));
  };

  return (
    <div className={cx("shop")}>
      <TitlePage>SHOP</TitlePage>
      <div className={cx("shop__container")}>
        <div className={cx("shop__inner")}>
          <div className={cx("shop__left")}>
            <ShopLeft
              arange={arange}
              changeCategory={(category) => changeCategoryHandler(category)}
              changeFitlerPrice={(priceFrom, priceTo) =>
                changeFitlerPriceHandler(priceFrom, priceTo)
              }
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
