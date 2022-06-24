import React from "react";
import styles from "./listcategory.module.scss";
import classNames from "classnames/bind";
import ItemCategory from "./ItemCategory";
const cx = classNames.bind(styles);
const listCategory = [
  "Cheese",
  "For kids",
  "Light",
  "Piquant",
  "Savory",
  "Sea food",
  "Sweet",
  "Veggie",
];
const ListCategory = (props) => {
  const List = listCategory.map((item) => (
    <ItemCategory category={item} key={item} />
  ));
  return <ul className={cx("category__list")}>{List}</ul>;
};

export default ListCategory;
