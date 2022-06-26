import React, { useState } from "react";
import styles from "./product.module.scss";
import classNames from "classnames/bind";

import ModalDetail from "../../layout/components/modal/ModalDetail";
import bg from "../../assests/imgs/menu-background.png";
import titleBg from "../../assests/imgs/title-shop.jpg";
import { IconLoading } from "../../icon/Icon";
import ListCartFilter from "../../components/listcart/ListCartFilter";

const cx = classNames.bind(styles);
const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("cheese");
  const changeLoadingHandler = (id) => {
    setIsLoading(id);
  };
  const changeCategory = (id) => {
    if (id !== category) {
      if (!isLoading) {
        setIsLoading(true);
        setCategory(id);
      }
    }
  };
  return (
    <div className={cx("product")} style={{ backgroundImage: `url(${bg})` }}>
      <div className={cx("product__inner")}>
        <div className={cx("product__title")}>
          <img
            className={cx("product__menu__item__img")}
            src={titleBg}
            alt="title"
          />
          <div className={cx("product__title__container")}>
            <h3 className={cx("product__title__chonse")}>
              CHOOSE YOUR FAVORITE
            </h3>
            <h2 className={cx("product__title__name")}>MENU FILTER DARK</h2>
          </div>
        </div>

        <div className={cx("product__menu", { loading: isLoading })}>
          <div className={cx("product__menu__loading")}>
            <IconLoading active={isLoading} />
          </div>
          <ul className={cx("product__menu__list", { loading: isLoading })}>
            <li
              onClick={() => changeCategory("cheese")}
              className={cx(
                "product__menu__item",
                {
                  active: category === "cheese" ? true : false,
                },
                { loading: isLoading }
              )}
            >
              <img
                className={cx("product__menu__item__img")}
                src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-filter-img-7.png"
                alt="filter"
              />
              <span className={cx("product__menu__item__text")}>Cheese</span>
            </li>
            <li
              onClick={() => changeCategory("kid")}
              className={cx(
                "product__menu__item",
                { loading: isLoading },
                {
                  active: category === "kid" ? true : false,
                }
              )}
            >
              <img
                className={cx("product__menu__item__img")}
                src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-filter-img-6.png"
                alt="filter"
              />
              <span className={cx("product__menu__item__text")}>For kids</span>
            </li>
            <li
              onClick={() => changeCategory("light")}
              className={cx("product__menu__item", {
                active: category === "light" ? true : false,
              })}
            >
              <img
                className={cx("product__menu__item__img")}
                src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-filter-img-5.png"
                alt="filter"
              />
              <span className={cx("product__menu__item__text")}>Light</span>
            </li>
            <li
              onClick={() => changeCategory("piquant")}
              className={cx(
                "product__menu__item",
                { loading: isLoading },
                {
                  active: category === "piquant" ? true : false,
                }
              )}
            >
              <img
                className={cx("product__menu__item__img")}
                src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-filter-img-4.png"
                alt="filter"
              />
              <span className={cx("product__menu__item__text")}>Piquant</span>
            </li>
            <li
              onClick={() => changeCategory("sea")}
              className={cx(
                "product__menu__item",
                { loading: isLoading },
                {
                  active: category === "sea" ? true : false,
                }
              )}
            >
              <img
                className={cx("product__menu__item__img")}
                src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-filter-img-3.png"
                alt="filter"
              />
              <span className={cx("product__menu__item__text")}>Sea food</span>
            </li>
            <li
              onClick={() => changeCategory("savory")}
              className={cx(
                "product__menu__item",
                { loading: isLoading },
                {
                  active: category === "savory" ? true : false,
                }
              )}
            >
              <img
                className={cx("product__menu__item__img")}
                src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-filter-img-2.png"
                alt="filter"
              />
              <span className={cx("product__menu__item__text")}>Savory</span>
            </li>
            <li
              onClick={() => changeCategory("sweet")}
              className={cx(
                "product__menu__item",
                { loading: isLoading },
                {
                  active: category === "sweet" ? true : false,
                }
              )}
            >
              <img
                className={cx("product__menu__item__img")}
                src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-filter-img-8.png"
                alt="filter"
              />
              <span className={cx("product__menu__item__text")}>Sweet</span>
            </li>
            <li
              onClick={() => changeCategory("veggie")}
              className={cx(
                "product__menu__item",
                { loading: isLoading },
                {
                  active: category === "veggie" ? true : false,
                }
              )}
            >
              <img
                className={cx("product__menu__item__img")}
                src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/h4-filter-img-1.png"
                alt="filter"
              />
              <span className={cx("product__menu__item__text")}>Veggie</span>
            </li>
          </ul>
          <div className={cx("product__menu__inner", { loading: isLoading })}>
            <ListCartFilter
              changeLoadingHandler={changeLoadingHandler}
              category={category}
            />
          </div>
        </div>
      </div>

      <ModalDetail />
    </div>
  );
};

export default Product;
