import React from "react";
import styles from "./footer.module.scss";
import classNames from "classnames/bind";
import bg from "../../../assests/imgs/footer-bg-left.jpg";
import logo from "../../../assests/imgs/footer-bottom-img.png";
import bgRight from "../../../assests/imgs/footer-bg-right.jpg";

import {
  IconTwitter,
  IconFacebook,
  IconLinkEin,
  IconInstagram,
} from "../../../icon/Icon";
const cx = classNames.bind(styles);

const CONTACT = [
  {
    id: 1,
    name: "Salerno, AZ 85022",
    address: "1614 E. Bell Rd #104.",
    phone: "(602) 867-1010",
  },
  {
    id: 2,
    name: "Sorrento, AZ 85022",
    address: "204 E. Pizzetta Tommaso",
    phone: "(358) 867-1010",
  },
  {
    id: 3,
    name: "Torre Del Greco AZ 85022",
    address: "Vale Puglia 54",
    phone: "(359) 867-1010",
  },
  {
    id: 4,
    name: "Naples, AZ 85022",
    address: "Corso Itali AA",
    phone: "(989) 867-1010",
  },
];

const TIME_WORK = [
  {
    id: 1,
    days: "MONDAY",
    time: "Kitchen Closed",
    close: true,
  },
  {
    id: 2,
    days: "TUSEDAY UNTIL FRIDAY",
    time: "9:00 – 22:00",
  },
  {
    id: 3,
    days: "SATURDAY",
    time: "Saturday 11am to midnight",
    noted: true,
  },
  {
    id: 4,
    days: "SUNDAY",
    time: "9:00 – 22:00",
  },
];
const Footer = () => {
  return (
    <footer className={cx("footer")}>
      <div className={cx("left")} style={{ backgroundImage: `url(${bg})` }}>
        <div className={cx("left__container")}>
          <div className={cx("left__contact", "left__container__item")}>
            <h3 className={cx("left__contact__title", "mr-15")}>
              FIND OUR RESTAURANTS
            </h3>
            {CONTACT.map((item) => (
              <div key={item.id} className={cx("left__contact__item", "mr-15")}>
                <p>{item.address}</p>
                <p>{item.name}</p>
                <p>{item.phone}</p>
              </div>
            ))}
          </div>
          <div className={cx("left__work-time", "left__container__item")}>
            <h3 className={cx("left__contact__title", "mr-15")}>
              WORKING HOURS
            </h3>
            {TIME_WORK.map((item) => (
              <div key={item.id} className={cx("item__work", "mr-15")}>
                <h4 className={cx("weekdays")}>
                  {item.days}
                  {item.noted && <span className={cx("noted")}>*</span>}
                </h4>

                <p className={cx("time", { close: item.close })}>{item.time}</p>
              </div>
            ))}
            <div className={cx("list-socials")}>
              <h4 className={cx("list-socials__title")}>FOLLOW US:</h4>
              <IconTwitter />
              <IconFacebook />
              <IconInstagram />
              <IconLinkEin />
            </div>
          </div>
          <div className={cx("left__solugan", "left__container__item")}>
            <h3>
              THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL
              BAKED SLICE OF PIZZA.
            </h3>
          </div>
        </div>
        <div className={cx("left__bottom")}>
          <div className={cx("left__bottom__inner")}>
            <div className={cx("textwidget")}>
              <span style={{ color: "#b7903c" }}>© 2020 </span>
              <a className={cx("textwidget__link")}> Qode Interactive</a>
            </div>
            <div className={cx("left__bottom__logo")}>
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={cx("right")}
        style={{ backgroundImage: `url(${bgRight})` }}
      ></div>
    </footer>
  );
};

export default Footer;
