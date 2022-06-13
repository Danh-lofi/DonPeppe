import React, { useEffect, useState } from "react";
import styles from "./modaldetai.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faStar,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { modalDetailActions } from "../../../store/modalDetailSlice";
import { cartActions } from "../../../store/cartSlice";

import Button from "../../../components/button/Button";
const cx = classNames.bind(styles);
const ModalDetail = () => {
  const [number, setNumber] = useState(1);
  const isOpen = useSelector((state) => state.modalDetailItem.isOpen);
  const item = useSelector((state) => state.modalDetailItem.item);
  const dispatch = useDispatch();
  useEffect(() => {
    setNumber(1);
  }, [isOpen]);

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
        src: item.src,
        name: item.name,
        price: item.price,
        quantity: number,
      })
    );
    dispatch(modalDetailActions.closeModal());
  };

  return (
    <div className={cx("modal", { open: isOpen }, { closes: !isOpen })}>
      <div
        className={cx("backdrop")}
        onClick={() => dispatch(modalDetailActions.closeModal())}
      ></div>
      <div className={cx("container")}>
        <div className={cx("inner")}>
          <div
            className={cx("close")}
            onClick={() => dispatch(modalDetailActions.closeModal())}
          >
            <FontAwesomeIcon icon={faXmark} className={cx("close__icon")} />
          </div>
          <div className={cx("img")}>
            <img src={item.src} alt="" />
          </div>
          <div className={cx("info")}>
            <h3 className={cx("name")}>{item.name}</h3>
            <div className={cx("rating")}>
              <div className={cx("rating__icon")}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <span className={cx("price")}>
              ${item.price % 1 === 0 ? `${item.price}.00` : item.price}
            </span>
            <p className={cx("description")}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu
              purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla
              facilisi. Nullam a urna sit amet tellus pellentesque egestas in in
              ante.
            </p>
            <h4 className={cx("title")}>NUTRITIONAL VALUE PER 100 G:</h4>
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
            <div className={cx("buttons")}>
              <input
                className={cx("number")}
                type="number"
                value={number}
                min={0}
              />
              <FontAwesomeIcon
                icon={faAngleUp}
                className={cx("icon__up", "icon__input")}
                onClick={increaseNumberHandler}
              />
              <FontAwesomeIcon
                icon={faAngleDown}
                className={cx("icon__down", "icon__input")}
                onClick={decreaseNumberHandler}
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
    </div>
  );
};

export default ModalDetail;
