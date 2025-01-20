import React from "react";

const ReactImage = ({ src, alt, className, ...props }) => {
  return <img src={src} alt={alt} className={className} {...props} />;
};

export default ReactImage;
