import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const HospitalScore = ({ score }) => {
  return (
    <div className="score-container">
      <h3 style={{ marginBottom: "15px", fontSize: "30px" }}>Hospital Score</h3>
      <div style={{ width: 300, height: 200, marginTop: "50px" }}>
        <ReactSpeedometer
          maxValue={100}
          value={score}
          needleColor="black"
          startColor="green"
          segments={10}
          endColor="red"
          textColor="black"
        />
      </div>
    </div>
  );
};

export default HospitalScore;
