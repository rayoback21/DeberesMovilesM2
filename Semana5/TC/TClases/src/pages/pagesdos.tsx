import React from "react";
import PrimaryOne from "../components/models/one-componets";
import TwoComponent from "../components/models/two-componets";
import ThreeComponents from "../components/models/three-componets";
import FourComponets from "../components/models/four-componets";
import FiveComponets from "../components/models/five-componets";
import SixIniput from "../components/models/six-componets";


const ComponentsPage: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "56px",
      }}
    >
      <div style={{ width: "100%" }}>
        <PrimaryOne />
      </div>

      <div style={{ width: "100%" }}>
        <TwoComponent />
      </div>
      <div style={{ width: "100%" }}>
        <SixIniput />
      </div>
      <div style={{ width: "100%" }}>
        <ThreeComponents />
      </div>
      <div style={{ width: "100%" }}>
        <FourComponets />
      </div>
      <div style={{ width: "100%" }}>
        <FiveComponets />
      </div>
    </div>
  );
};

export default ComponentsPage;
