import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    gray_900_cc: "bg-gray-900_cc",
    indigo_900_01: "bg-indigo-900_01",
    green_400: "bg-green-400 text-white-A700",
    gray_900_cc_01: "bg-gray-900_cc_01",
    cyan_400: "bg-cyan-400 text-white-A700",
    indigo_900_cc: "bg-indigo-900_cc",
    cyan_400_01: "bg-cyan-400_01 shadow-sm",
    black_900_cc: "bg-black-900_cc",
    teal_400: "bg-teal-400 text-white-A700",
  },
};
const sizes = {
  xs: "h-[20px] px-[3px]",
  sm: "h-[23px]",
  md: "h-[48px] px-3",
  lg: "h-[52px] px-6 text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "teal_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "gray_900_cc",
    "indigo_900_01",
    "green_400",
    "gray_900_cc_01",
    "cyan_400",
    "indigo_900_cc",
    "cyan_400_01",
    "black_900_cc",
    "teal_400",
  ]),
};

export { Button };
