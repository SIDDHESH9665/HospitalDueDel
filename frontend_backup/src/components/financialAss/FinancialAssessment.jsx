import React from "react";

const FinancialAssessment = ({ data }) => {
  const logos = {
    gst_status: "/gst.png",
    pan_status: "/pan-card.png",
    epfo_status: "/epfo.png",
  };

  return (
    <div className="financial-container">
      <h3>Financial Assessment</h3>
      <p>Assess the financial status of the hospital</p>
      <div className="financial-row">
        {["gst_status", "pan_status", "epfo_status"].map((key) => (
          <div className="financial-item" key={key}>
            <img src={logos[key]} alt={key} className="financial-logo" />
            <div style={{ color: "black" }}>
              <div>{key.replace("_", " ").toUpperCase()}</div>
                <div
                  style={{
                    color:
                      data?.[key]?.toLowerCase() === "valid"
                        ? "green"
                        : data?.[key]?.toLowerCase() === "invalid"
                        ? "red"
                        : "orange",
                    textAlign: "center",
                  }}
                >
                  {data?.[key] || "Not Available"}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialAssessment;
