import React from "react";
import styles from "./shopfoot.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ItemPage from "./ItemPage";

const cx = className.bind(styles);
const ShopFoot = (props) => {
  const page = props.page;
  const totalPage = page.totalPage;
  const listPage = [];
  for (let i = 1; i <= totalPage; i++) {
    listPage.push(i);
  }
  const ListPage = listPage.map((item) => (
    <ItemPage
    key={item}
      id={item}
      page={page}
      numPage={item}
      onClick={() => props.changePage(item)}
    />
  ));

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
          {ListPage}

          {page.currentPage != totalPage && (
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
