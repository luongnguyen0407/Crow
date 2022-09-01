import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
const Input = ({ control, type = "text", name, ...res }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="w-full border rounded-lg border-strock">
      <input
        {...res}
        type={type}
        className="w-full px-6 py-4 text-sm font-medium outline-none placeholder:text-text4 text-text1"
        {...field}
      ></input>
    </div>
  );
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
};
export default Input;
