import React from "react";

const AccreditationStatus = ({ data }) => {
  const accreditationItems = [
    {
      label: "JCI Accreditation",
      value: data?.jci,
      color: "green",
      logo: "/jci.png",
    },
    {
      label: "NABH Accreditation",
      value: data?.nabh,
      color: "green",
      logo: "/nabh.png",
    },
    {
      label: "ROHINI Accreditation",
      value: data?.rohini,
      color: "yellow",
      logo: "/rohini.png",
    },
  ];

  const hasAccreditation = accreditationItems.some((item) => item.value);

  return (
    <div className="accreditation-container">
      <h3>Accreditation Status</h3>
      <p>Verify the accreditation details of the hospital</p>
      <div className="accreditation-row flex">
        {hasAccreditation ? (
          accreditationItems.map((item, index) => {
            // For ROHINI, treat it as always present
            if (item.label === "ROHINI Accreditation") {
              return (
                <div key={index} className="accreditation-item">
                  <img
                    src={item.logo}
                    alt={item.label}
                    className="accreditation-logo"
                  />
                  <p style={{ color: "black" }}>
                    {item.label}
                    <br />
                    {" "}
                    <span style={{ color: item.value ? "green" : "red" }}>
                      {item.value ? "Accredited" : "Not Accredited"}
                    </span>
                  </p>
                </div>
              );
            }

            // For other accreditations, only show if value is true
            return item.value ? (
              <div key={index} className="accreditation-item">
                <img
                  src={item.logo}
                  alt={item.label}
                  className="accreditation-logo"
                />
                <p style={{ color: "black" }}>
                  {item.label}{" "}
                  <span style={{ color: item.color }}>Accredited</span>
                </p>
              </div>
            ) : null;
          })
        ) : (
          <p style={{ color: "red" }}>None: Not Accredited</p>
        )}
      </div>
    </div>
  );
};

export default AccreditationStatus;
