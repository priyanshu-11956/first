import React from "react";

const sizes = {
  "2xl": "text-6xl font-bold md:text-[52px] sm:text-[46px]",
  xl: "text-[52px] font-bold md:text-[44px] sm:text-[38px]",
  s: "text-[26px] font-bold md:text-2xl sm:text-[22px]",
  md: "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  xs: "text-2xl font-bold md:text-[22px]",
  lg: "text-[44px] font-bold md:text-[40px] sm:text-[34px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
