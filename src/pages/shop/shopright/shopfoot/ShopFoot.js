import React from "react";
import styles from "./shopfoot.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const cx = className.bind(styles);
const ShopFoot = (props) => {
  const page = props.page;

  return (
    <div className={cx("footer")}>
      <div className={cx("footer__list")}>
        <div className={cx("footer__inner")}>
          {page.currentPage != 1 && (
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={cx("footer__item")}
              onClick={props.prePage}
            />
          )}
          <div
            className={cx("footer__item", { active: page.currentPage == 1 })}
            onClick={() => props.changePage(1)}
          >
            1
          </div>
          <div
            className={cx("footer__item", { active: page.currentPage == 2 })}
            onClick={() => props.changePage(2)}
          >
            2
          </div>
          <div
            className={cx("footer__item", { active: page.currentPage == 3 })}
            onClick={() => props.changePage(3)}
          >
            3
          </div>

          {page.currentPage != page.totalPage && (
            <FontAwesomeIcon
              icon={faChevronRight}
              className={cx("footer__item")}
              onClick={props.nextPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopFoot;
