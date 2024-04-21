import React from "react";

const sizes = {
  xs: "text-[10px] font-medium",
  lg: "text-base font-normal",
  s: "text-xs font-normal",
  "2xl": "text-2xl font-normal md:text-[22px]",
  xl: "text-xl font-normal",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
