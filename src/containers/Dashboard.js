import { useState } from "react";

import GridLayout from "../components/GridLayout";
import initialState from "../initialState";

const Dashboard = () => {
  const [ data, setData ] = useState(initialState.data);
  const [ layouts, setLayouts ] = useState(initialState.layouts);
  const [ breakpoint, setBreakpoint ] = useState("lg");

  return (
    <div className="dashboard">
      <GridLayout data={data} layouts={layouts} setBreakPoint={setBreakpoint}/>
    </div>
  );
};

export default Dashboard;
