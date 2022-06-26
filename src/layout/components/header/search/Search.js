import React from "react";
import styles from "../header.module.scss";
import classNames from "classnames/bind";
import { IconSearch } from "../../../../icon/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

const Search = (props) => {
  return (
    <div className={cx("search__tab")}>
      <div className={cx("search__tab__inner")}>
        <div className={cx("search__tab__icon", "search__icon")}>
          <IconSearch />
        </div>
        <div className={cx("search__tab__input")}>
          <input type="text" placeholder="Search..." />
        </div>
        <div
          className={cx("search__tab__close_1")}
          onClick={props.closeTabSearch}
        >
          <FontAwesomeIcon
            className={cx("search__tab__close")}
            icon={faCircleXmark}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
