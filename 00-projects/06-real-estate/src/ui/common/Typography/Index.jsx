import React from "react";
import { CN } from "../../../utils";
// import PropTypes from "prop-types";

const classNames = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-bold",
  h6: "text-base font-bold",
  p: "text-base font-normal",
  span: "text-base font-normal",
  label: "text-base font-semibold",
  before:
    "before:content-[''] before:block before:w-3/4 before:h-1 before:bg-gradient-to-r  from-[#FFAC12] to-black before:mb-0.5",
  after:
    "after:content-[''] after:block after:w-3/4 after:h-1 after:bg-gradient-to-r  from-[#FFAC12] to-black after:mt-0.5",
};

const Typography = ({
  children,
  className,
  variant,
  before,
  after,
  ...otherProps
}) => {
  const Element = variant ?? "span";
  // const baseClass = Object.keys(classNames).includes(Element)
  //   ? classNames[Element]
  //   : "";

  const baseClass = classNames[Element] ?? "";
  const beforeClass = before ? CN(classNames["before"], before) : "";
  const afterClass = after ? CN(classNames["after"], after) : "";
  return (
    <Element
      {...otherProps}
      className={CN(baseClass, className, beforeClass, afterClass)}
    >
      {children}
    </Element>
  );
};

// Typography.propTypes = {
//   children: PropTypes.node,
//   variant: PropTypes.string,
// };

export default Typography;
