import React from "react";

const NegativeLegal = ({ data }) => {
  const legalItems = [
    {
      label: "NEGATIVE STATUS",
      value: data?.blacklist || 2,
      color:
        data?.blacklist > 4 ? "red" : data?.blacklist >= 1 ? "orange" : "green",
      logo: "/case.png",
    },
    {
      label: "CRIMINAL CASE",
      value: data?.criminal_case || "No Record Found",
      color:
        data?.criminal_case?.toLowerCase() === "recent"
          ? "red"
          : data?.criminal_case?.toLowerCase() === "old"
          ? "yellow"
          : "black",
      logo: "/criminal.png",
    },
    {
      label: "PMJAY STATUS",
      value: data?.pmjay_status || "Yes",
      color:
        data?.pmjay_status?.toLowerCase() === "yes"
          ? "green"
          : data?.pmjay_status?.toLowerCase() === "no"
          ? "red"
          : "black",
      logo: "/pmjay.png",
    },
    {
      label: "CIVIL CASE",
      value: data?.civil_case || "No Record Found",
      color:
        data?.civil_case?.toLowerCase() === "recent"
          ? "red"
          : data?.civil_case?.toLowerCase() === "old"
          ? "yellow"
          : "black",
      logo: "/civil.png",
    },
  ];

  return (
    <div className="negative-container">
      <div className="negative-img">
        <img src="/logo3.png" alt="img" />
        <h3>Negative & Legal</h3>
      </div>

      <div className="negative-row flex">
        <div className="flex">
          {legalItems.slice(0, 2).map((item, index) => {
            return (
              <div
                key={index}
                className="negative-item"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  padding: "10px",
                  borderRadius: "4px",
                  marginRight: "8px",
                  position: "relative",
                  width: "100%",
                }}
              >
                <div style={{ position: "absolute", top: "8px", left: "8px" }}>
                  <img
                    src={item.logo}
                    alt={item.label}
                    className="negative-logo"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <div style={{ marginLeft: "36px", paddingTop: "8px" }}>
                  <p
                    style={{
                      color: "black",
                      margin: "0",
                      fontWeight: "bold",
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ color: item.color, margin: "4px 0 0 0" }}>
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex">
          {legalItems.slice(2, 4).map((item, index) => {
            return (
              <div
                key={index + 2}
                className="negative-item"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  padding: "12px",
                  borderRadius: "4px",
                  marginRight: "8px",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item.logo}
                    alt={item.label}
                    className="negative-logo"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p style={{ color: "black", marginLeft: "8px" }}>
                    {item.label}
                    <br />{" "}
                    <span style={{ color: item.color }}>{item.value}</span>
                  </p>
                </div>
              </div>
            );  
          })}
        </div>
      </div>
    </div>
  );
};

export default NegativeLegal;
