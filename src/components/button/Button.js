import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames/bind";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

// Large, Medium, Small
// Primary , Normal
const Button = (props) => {
  // button or link
  let Comp = "button";
  if (props.link) Comp = Link;
  const to = props.link ? `${props.link}` : null;
  return (
    <Comp
      to={to}
      className={cx(
        "button",
        { primary: props.primary },
        { large: props.large },
        { small: props.small }
      )}
      onClick={props.onClick}
    >
      <span className={cx("text", { "text-spacing": props.spacing })}>
        {props.children}
      </span>
    </Comp>
  );
};

export default Button;
