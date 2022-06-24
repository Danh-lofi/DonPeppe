import React, { useState } from "react";
import styles from "./filter.module.scss";
import classNames from "classnames/bind";
import MouseTache from "../../../../assests/imgs/moustache.png";

const cx = classNames.bind(styles);

const Filter = (props) => {
  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(100);
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(100);
  const slideOne = (e) => {
    if (parseInt(valueTwo) - parseInt(e.target.value) <= 0) {
      setValueOne(parseInt(valueTwo) - 0);
    } else {
      setValueOne(e.target.value);
    }
    setPercent1((e.target.value / 100) * 100);
  };
  const slideTwo = (e) => {
    if (parseInt(e.target.value) - parseInt(valueOne) <= 0) {
      setValueTwo(parseInt(valueOne) + 0);
    } else setValueTwo(e.target.value);
    setPercent2((e.target.value / 100) * 100);
  };
  return (
    <div className={cx("filter__container")}>
      {/* Slide */}
      <div className={cx("price-slider")}>
        <div
          className={cx("price-slider__range")}
          style={{
            backgroundImage: `linear-gradient(to right, #dadae5 ${percent1}% , #d2401e ${percent1}% , #d2401e ${percent2}%, #dadae5 ${percent2}%)`,
          }}
        ></div>
        <input
          type="range"
          min="0"
          step="10"
          max="100"
          value={valueOne}
          className={cx("slider-1")}
          onInput={(e) => slideOne(e)}
        />
        <input
          className={cx("slider-1")}
          type="range"
          min="0"
          step="10"
          max="100"
          value={valueTwo}
          id="slider-2"
          onInput={(e) => slideTwo(e)}
        />
      </div>

      <div className={cx("price-amount")}>
        <div className={cx("price-amount__label")}>
          PRICE:
          <span className={cx("price-amount__range", "text")}>
            {" "}
            ${valueOne}{" "}
          </span>
          —
          <span className={cx("price-amount__range", "text")}>
            {" "}
            ${valueTwo}{" "}
          </span>
        </div>
        <div className={cx("price-amount__submit")}>
          <span className={cx("price-amount__text")}>FILTER</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
