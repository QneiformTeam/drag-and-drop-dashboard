import { Responsive, WidthProvider } from "react-grid-layout";
import GridItemContainer from "../containers/GridItemContainer";

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
      {Object.keys(data).map((item) => (
        <GridItemContainer key={item} item={data[item]} />
      ))}
    </ResponsiveGridLayout>
  );
};

export default GridLayout;
