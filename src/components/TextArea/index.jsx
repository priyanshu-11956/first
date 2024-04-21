import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};
const variants = {
  tarOutlineWhiteA700: "border-white-A700 border-[0.5px] border-solid",
};
const sizes = {
  sm: "h-[153px] p-[21px] text-base",
  xs: "h-[114px] p-5",
};

const TextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape,
      size = "xs",
      variant = "tarOutlineWhiteA700",
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${(shape && shapes[shape]) || ""} ${sizes[size] || ""} ${variants[variant] || ""}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  },
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["tarOutlineWhiteA700"]),
};

export { TextArea };
