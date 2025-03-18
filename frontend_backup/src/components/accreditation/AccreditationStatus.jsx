import React from "react";

const AccreditationStatus = ({ data }) => {
  const accreditationItems = [
    {
      label: "JCI",
      value: data?.jci,
      color: "green",
      logo: "/jci.png",
    },
    {
      label: "NABH",
      value: data?.nabh,
      color: "green",
      logo: "/nabh.png",
    },
    {
      label: "ROHINI",
      value: data?.rohini,
      color: "yellow",
      logo: "/rohini.png",
    },
  ];

  const hasAccreditation = accreditationItems.some((item) => item.value);

  return (
    <div className="accreditation-container">
      <h3 className="title">Accreditations</h3>
      <p className="subtitle">
        Verify the accreditation details of the hospital
      </p>
      <div className="accreditation-row">
        {hasAccreditation ? (
          accreditationItems.map((item, index) => {
            // For ROHINI, treat it as always present
            if (item.label === "ROHINI") {
              return (
                <div key={index} className="accreditation-item">
                  <img
                    src={item.logo}
                    alt={item.label}
                    className="logo-rohini"
                  />
                  <p className="item-label">
                    {item.label}
                    <br />
                    <span
                      className={item.value ? "accredited" : "not-accredited"}
                      style={{
                        color: item.value ? "green" : "red",
                      }}
                    >
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
                <p className="item-label">
                  {item.label}
                  <br />
                  <span
                    className={item.value ? "accredited" : "not-accredited"}
                    style={{
                      color: item.value ? "green" : "red",
                    }}
                  >
                    {item.value ? "Accredited" : "Not Accredited"}
                  </span>
                </p>
              </div>
            ) : null;
          })
        ) : (
          <p className="none">None: Not Accredited</p>
        )}
      </div>
    </div>
  );
};

export default AccreditationStatus;
