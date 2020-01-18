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
// color: blue(default), pink, gray
// ...rest: bring the rest of the props
function Button({ children, size, color, outline, fullWidth }) {
  return (
    // outline, fullWidth: if it's true, it will remain
    <button className={classNames("btn", size, color, { outline, fullWidth })}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: "medium",
  color: "blue"
};

export default Button;
