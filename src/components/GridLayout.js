import React from "react";
import PropTypes from "prop-types";
import { Responsive, WidthProvider } from "react-grid-layout";
import { connect } from "react-redux";
import GridItemContainer from "../containers/GridItemContainer";
import { setBreakPoint } from "../actions/app-actions";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridLayout = ({ data, layouts, setBreakPoint }) => {
  const handleBreakPointChange = (breakpoint) => {
    setBreakPoint(breakpoint);
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      onBreakpointChange={handleBreakPointChange}
      isDraggable
      isRearrangeable
      isResizable
      draggableHandle=".grid-item__title"
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      {data.map((item) => (
        <GridItemContainer key={item} item={item} />
      ))}
    </ResponsiveGridLayout>
  );
};

export default connect(null, { setBreakPoint })(GridLayout);
