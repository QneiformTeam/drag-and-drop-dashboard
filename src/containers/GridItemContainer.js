import GridItem from "../components/GridItem";

const GridItemContainer = ({ children, item, ...props }) => {
  return (
    <GridItem title={item.title} type={item.type} data={item.data} root={item} {...props}>
      {children}
    </GridItem>
  );
};

export default GridItemContainer;
