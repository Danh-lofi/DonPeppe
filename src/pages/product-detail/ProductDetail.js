import React, { useState } from "react";
import styles from "./productDetail.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as star } from "@fortawesome/free-regular-svg-icons";

import TitlePage from "../../components/title-page/TitlePage";
import Button from "../../components/button/Button";
import Cart from "../../components/cart/Cart";
import InfoProduct from "./info-product/InfoProduct";

const cx = classNames.bind(styles);
const ProductDetail = () => {
  const [active, setActive] = useState({
    des: true,
    add: false,
    review: false,
  });
  let isLink = false;

  const changeActiveHandler = (id) => {
    switch (id) {
      case "des":
        setActive({
          des: true,
          add: false,
          review: false,
        });
        break;
      case "add":
        setActive({
          des: false,
          add: true,
          review: false,
        });
        break;
      case "review":
        setActive({
          des: false,
          add: false,
          review: true,
        });
        break;
      default:
    }
  };
  return (
    <div>
      <TitlePage>SHOP</TitlePage>
      <div className={cx("container")}>
        <div className={cx("inner")}>
          <InfoProduct />

          <div className={cx("tabs")}>
            <ul className={cx("tabs__list")}>
              <li
                onClick={() => changeActiveHandler("des")}
                className={cx("tabs__item", { active: active.des })}
              >
                Description
              </li>
              <li
                id="add"
                onClick={() => changeActiveHandler("add")}
                className={cx("tabs__item", { active: active.add })}
              >
                Additional information
              </li>
              <li
                id="review"
                onClick={() => changeActiveHandler("review")}
                className={cx("tabs__item", { active: active.review })}
              >
                REVIEW (0)
              </li>
            </ul>
            <div className="list__tab">
              <div className={cx("tab", { active: active.des })}>
                <div className={cx("content")}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                  ullamcorper leo, eget euismod orci. Cum sociis natoque
                  penatibus et magnis dis parturient montes nascetur ridiculus
                  mus. Vestibulum ultricies aliquam convallis. Maecenas ut
                  tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante
                  metus lacinia tellus, vitae condimentum nulla enim bibendum
                  nibh. Praesent turpis risus, interdum nec venenatis id,
                  pretium sit amet purus et malesuada fames ac ante ipsum primis
                  in faucibus. Aliquam eu lorem nibh.
                </div>
              </div>
              <div className={cx("tab", { active: active.add })}>
                <table className={cx("content")}>
                  <tr className={cx("additional")}>
                    <td className={cx("additional__tag")}>WEIGHT</td>
                    <td className={cx("additional__info")}>2.5 kg</td>
                  </tr>
                  <tr className={cx("additional")}>
                    <td className={cx("additional__tag")}>DIMENSIONS</td>
                    <td className={cx("additional__info")}>45 × 45 × 1.5 cm</td>
                  </tr>
                </table>
              </div>
              <div className={cx("tab", { active: active.review })}>
                <div className={cx("review")}>
                  <h4 className={cx("review__title")}>REVIEWS</h4>
                  <p className={cx("review__text")}>
                    There are no reviews yet.
                  </p>
                  <h4 className={cx("review__title")}>
                    BE THE FIRST TO REVIEW “SPINACH FETA PESTO”
                  </h4>
                  <p className={cx("review__text")}>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <p className={cx("review__rating", "review__text")}>
                    Your rating
                  </p>
                  <div className={cx("review__icons")}>
                    <FontAwesomeIcon
                      icon={star}
                      className={cx("review__icon")}
                    />
                    <FontAwesomeIcon
                      icon={star}
                      className={cx("review__icon")}
                    />
                    <FontAwesomeIcon
                      icon={star}
                      className={cx("review__icon")}
                    />
                    <FontAwesomeIcon
                      icon={star}
                      className={cx("review__icon")}
                    />
                    <FontAwesomeIcon
                      icon={star}
                      className={cx("review__icon")}
                    />
                  </div>
                  <form>
                    <div className={cx("form__inner")}>
                      <label className={cx("review__text")}>
                        Your review *
                      </label>
                      <textarea
                        cols={45}
                        rows={8}
                        className={cx("review__textarea")}
                      />
                    </div>
                    <div className={cx("form__inner")}>
                      <label className={cx("review__text")}>Name *</label>
                      <input type="text" className={cx("review__input")} />
                    </div>
                    <div className={cx("form__inner")}>
                      <label className={cx("review__text")}>Email *</label>
                      <input type="text" className={cx("review__input")} />
                    </div>
                    <div className={cx("form__checkbox")}>
                      <input type="checkbox" className={cx("review__check")} />
                      <label className={cx("review__text")}>
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <div className={cx("b")}>
                      <Button primary>SUBMIT</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className={cx("related")}>
            <h3 className={cx("related__title")}>RELATED PRODUCTS</h3>
            <div className={cx("related__container")}>
              <Cart
                key={"d1"}
                id={"d1"}
                src={
                  "https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/product-black-img-6a-400x400.jpg"
                }
                name={"PEPERONI"}
                price={50}
              />
              <Cart
                key={"d1"}
                id={"d1"}
                src={
                  "https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/product-black-img-6a-400x400.jpg"
                }
                name={"PEPERONI"}
                price={50}
              />
              <Cart
                key={"d1"}
                id={"d1"}
                src={
                  "https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/product-black-img-6a-400x400.jpg"
                }
                name={"PEPERONI"}
                price={50}
              />
              <Cart
                key={"d1"}
                id={"d1"}
                src={
                  "https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/10/product-black-img-6a-400x400.jpg"
                }
                name={"PEPERONI"}
                price={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
