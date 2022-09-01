import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="inline-block mb-2 text-sm font-medium cursor-pointer text-text2"
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};
export default Label;
