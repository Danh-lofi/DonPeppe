import React from "react";
import styles from "./listcategory.module.scss";
import classNames from "classnames/bind";
import ItemCategory from "./ItemCategory";
const cx = classNames.bind(styles);

const LISTCATEGORY = {
  cheese: "Cheese",
  kid: "For kids",
  light: "Light",
  piquant: "Piquant",
  savory: "Savory",
  sea: "Sea food",
  sweet: "Sweet",
  veggie: "Veggie",
};
const ListCategory = (props) => {
  const listCategory = [];
  const listKey = [];
  for (const key in LISTCATEGORY) {
    listKey.push(key);
    listCategory.push(LISTCATEGORY[key]);
  }

  const List = listCategory.map((item, index) => (
    <ItemCategory
      category={item}
      key={item}
      id={listKey[index]}
      onClick={() => props.changeCategory(listKey[index])}
    />
  ));
  return <ul className={cx("category__list")}>{List}</ul>;
};

export default ListCategory;
