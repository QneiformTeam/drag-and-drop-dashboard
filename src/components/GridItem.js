import React from "react";

const GridItem = ({
  title,
  className,
  style,
  children,
  ...rest
}) => {
  return (
    <div className={`grid-item ${className}`} style={style} {...rest}>
      <div className="grid-item__title">
        <h3>{title}</h3>
      </div>
      <div className="grid-item__graph">
        <></>
      </div>
      {children}
    </div>
  );
};


export default GridItem;
