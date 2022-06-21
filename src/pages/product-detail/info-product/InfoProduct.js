import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cartActions } from "../../../store/cartSlice";

import styles from "./InfoProduct.module.scss";
import classNames from "classnames/bind";

import InputInital from "../../../components/input/InputInital";
import Button from "../../../components/button/Button";

const cx = classNames.bind(styles);
const API =
  "https://donpeppe-aab2a-default-rtdb.asia-southeast1.firebasedatabase.app/donpeppes";

const InfoProduct = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const getCart = async () => {
      const response = await fetch(`${API}/${params.id}.json`);
      const data = await response.json();
      setItem({ ...data });
    };
    getCart();
  }, [params.id]);

  const [number, setNumber] = useState(1);

  const decreaseNumberHandler = () => {
    if (number > 0) setNumber(number - 1);
  };

  const increaseNumberHandler = () => {
    setNumber(number + 1);
  };

  const addItemsToCartHandler = () => {
    dispatch(
      cartActions.addItemsToCart({
        id: item.id,
        src: item.img,
        name: item.name,
        price: item.price,
        quantity: number,
      })
    );
    setNumber(1);
  };
  return (
    <div className={cx("product")}>
      <div className={cx("img")}>
        <img src={item.img} alt="" />
      </div>
      <div className={cx("info")}>
        <div className={cx("info__inner")}>
          <h4 className={cx("name")}>{item.name}</h4>
          <span className={cx("price")}>${(item.price / 1).toFixed(2)}</span>
          <p className={cx("description")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu
            purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla
            facilisi. Nullam a urna sit amet tellus pellentesque egestas in in
            ante.
          </p>

          <h4 className={cx("nutritional__title")}>
            NUTRITIONAL VALUE PER 100 G:
          </h4>
          <div className={cx("nutritional")}>
            <div className={cx("nutritional__item")}>
              <span className={cx("nutritional__item__name")}>Calories</span>
              <div className={cx("nutritional__item__donut")}></div>
              <span className={cx("nutritional__item__num")}>800 kcal</span>
            </div>
            <div className={cx("nutritional__item")}>
              <span className={cx("nutritional__item__name")}>
                Carbohydrates
              </span>
              <div className={cx("nutritional__item__donut")}></div>
              <span className={cx("nutritional__item__num")}> 20 g</span>
            </div>
            <div className={cx("nutritional__item")}>
              <span className={cx("nutritional__item__name")}>Squirrels</span>
              <div className={cx("nutritional__item__donut")}></div>
              <span className={cx("nutritional__item__num")}>30 g</span>
            </div>
            <div className={cx("nutritional__item")}>
              <span className={cx("nutritional__item__name")}>Fats</span>
              <div className={cx("nutritional__item__donut")}></div>
              <span className={cx("nutritional__item__num")}>50 g</span>
            </div>
          </div>

          <div className={cx("meta")}>
            <span className={cx("meta__tag")}>SKU: </span>
            <span className={cx("meta__info")}>013</span>
          </div>
          <div className={cx("meta")}>
            <span className={cx("meta__tag")}>CATEGORY: </span>
            <span className={cx("meta__info")}>Veggie</span>
          </div>
          <div className={cx("meta")}>
            <span className={cx("meta__tag")}>TAG: </span>
            <span className={cx("meta__info")}>Napoli</span>
          </div>

          <div className={cx("actions")}>
            <InputInital
              number={number}
              increaseNumberHandler={increaseNumberHandler}
              decreaseNumberHandler={decreaseNumberHandler}
            />
            <div className={cx("button")}>
              <Button large primary onClick={addItemsToCartHandler}>
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
