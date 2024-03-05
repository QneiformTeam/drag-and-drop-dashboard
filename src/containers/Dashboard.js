import React from "react";
import { connect } from "react-redux";

import GridLayout from "../components/GridLayout";

const Dashboard = ({ data, layouts }) => {
  return (
    <div className="dashboard">
      <GridLayout data={data} layouts={layouts} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: Object.keys(state.data),
    layouts: { ...state.layouts }
  };
};

export default connect(mapStateToProps, null, null, { pure: false })(Dashboard);
