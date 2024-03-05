import React from "react";
import PropTypes from "prop-types";

const GridItem = ({
  title,
  className,
  style,
  children,
  ...rest
}) => {
  const width = parseInt(style.width, 10);
  const height = parseInt(style.height, 10) - 50;
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

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array
};

export default GridItem;
