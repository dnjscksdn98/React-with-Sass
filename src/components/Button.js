import React from "react";
import classNames from "classnames";

import "./Button.scss";

// classnames library
// classNames("foo", "bar"); => "foo bar"
// classNames("foo", { bar: true }); => "foo bar"
// classNames({ "foo": false }); => ""
// classNames(["foo", "bar"]); => "foo bar"
// 'false, null, 0, undefined' is ignored

// size: large, medium(default), small
function Button({ children, size }) {
  return <button className={classNames("btn", size)}>{children}</button>;
}

Button.defaultProps = {
  size: "medium"
};

export default Button;
