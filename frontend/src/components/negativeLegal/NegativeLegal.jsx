import React from "react";

const NegativeLegal = ({ data }) => {
  const legalItems = [
    {
      label: "Negative Status",
      value: data?.blacklist || 0,
      color:
        data?.blacklist > 4 ? "red" : data?.blacklist >= 1 ? "orange" : "green",
      logo: "/case.png",
    },
    {
      label: "Criminal Case",
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
      label: "Civil Case",
      value: data?.civil_case || "No Record Found",
      color:
        data?.civil_case?.toLowerCase() === "recent"
          ? "red"
          : data?.civil_case?.toLowerCase() === "old"
          ? "yellow"
          : "black",
      logo: "/civil.png",
    },
    {
      label: "PMJAY Status",
      value: data?.pmjay_status || "Not Available",
      color:
        data?.pmjay_status?.toLowerCase() === "yes"
          ? "green"
          : data?.pmjay_status?.toLowerCase() === "no"
          ? "red"
          : "black",
      logo: "/pmjay.png",
    },
  ];

  return (
    <div className="negative-container">
      <div className="negative-img"><img className="negative-img" src="/logo3.png" alt="img" /></div>
      <h3>Negative Legal</h3>``
      <div className="negative-row flex">
        {legalItems.map((item, index) => (
          <div key={index} className="negative-item">
            <img src={item.logo} alt={item.label} className="negative-logo" />
            <p>
              {item.label}:{" "}
              <span style={{ color: item.color }}>{item.value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NegativeLegal;
