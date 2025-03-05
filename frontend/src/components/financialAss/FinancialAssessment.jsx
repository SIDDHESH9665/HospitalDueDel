import React from "react";

const FinancialAssessment = ({ data }) => {
  const logos = {
    gst_status: "/gst.png",
    pan_status: "/pan-card.png",
    epfo_status: "/epfo.png",
  };

  return (
    <div className="financial-container">
      <h3 style={{ marginBottom: "15px", fontSize: "30px" }}>Financial Assessment</h3>
      <div className="financial-row">
        {["gst_status", "pan_status", "epfo_status"].map((key) => (
          <div className="financial-item" key={key}>
            <img
              src={logos[key]}
              alt={key}
              className="financial-logo"
            />
            <p>
              {key.replace("_", " ").toUpperCase()}:{" "}
              <span
                style={{
                  color:
                    data?.[key]?.toLowerCase() === "valid"
                      ? "green"
                      : data?.[key]?.toLowerCase() === "invalid"
                      ? "red"
                      : "black",
                }}
              >
                {data?.[key] || "Not Available"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialAssessment;
