import React, { useState, useEffect } from "react";
import axios from "axios";
import HospitalScore from "../hospitalScore/HospitalScore";
import FinancialAssessment from "../financialAss/FinancialAssessment";
import NegativeScore from "../negativeLegal/NegativeLegal";
import AccreditationStatus from "../accreditation/AccreditationStatus";
import "../styles/dashboard.css";
import Supplimentry from "../Supplimentry/Supplimentry";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';  

const HospitalDashboard = () => {
  const [hospitals, setHospitals] = useState([]);
  const [hospital, setHospital] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/hospitals")
      .then((response) => {
        setHospitals(response.data);
        setHospital(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch hospital data.");
        setLoading(false);
      });
  }, []);

  const searchHospital = () => {
    if (!search.trim()) return;

    const foundHospital = hospitals.find((h) => {
      const hospitalName = h.hospital_info.HOSPITAL.toLowerCase().trim();
      const hospitalID = h.hospital_info.ID.toString().trim();
      const searchValue = search.toLowerCase().trim();

      return hospitalName === searchValue || hospitalID === searchValue;
    });

    if (foundHospital) {
      setHospital(foundHospital);
      setError("");
    } else {
      setError("Hospital not found");
    }
  };

  return (
    <div className="container">
       <header className="header">
      <div className="header-content">
        <div className="back-arrow">
          <ArrowBackIcon />
        </div>
        <div className="bajaj-logo">
          <img src="bajaj-logo.png" alt="bajaj-logo" />
        </div>
      </div>
    </header>
      <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <h2>Welcome to Hospital Due Diligence</h2>
        <p>Search and analyze hospital infrastructure and financial status</p>
      </div>
    </section>
      <main>
        <h3>Hospital Information</h3>
        {loading && <p>Loading hospital data...</p>}
        {error && <p className="error">{error}</p>}
        {hospital && (
          <section className="section1">
            <div className="info-container">
              <div className="hospital-info">
                <img
                  className="hospital"
                  src="/hospital0.png"
                  alt="Hospital Logo"
                />
                <div>
                  <h4>{hospital.hospital_info.HOSPITAL}</h4>
                  <p>Address: {hospital.hospital_info.ADDRESS}</p>
                  <p
                    style={{
                      color: hospital.hospital_info.CATEGORY ? "green" : "red",
                    }}
                  >
                    Category: {hospital.hospital_info.CATEGORY}
                  </p>
                  <p>Tier: {hospital.hospital_info.TIER}</p>
                </div>
              </div>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search by name or ID"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && searchHospital()}
                />
                <button className="btn" onClick={searchHospital}>
                  Search
                </button>
              </div>
            </div>
          </section>
        )}
        <div className="grid">
          <div className="card">
            {hospital && (
              <HospitalScore score={hospital.hospital_info.INFRA_SCORE || 0} />
            )}
          </div>
          <div className="card">
            {hospital && (
              <FinancialAssessment data={hospital.financial_assessment} />
            )}
          </div>
          <div className="card">
            {hospital && <NegativeScore data={hospital.negative_legal} />}
          </div>
          <div className="card">
            {hospital && (
              <AccreditationStatus data={hospital.accreditation_status} />
            )}
          </div>
        </div>
      </main>
      <div>
        <Supplimentry/>
      </div>
      <footer>
        <p>2025 Hospital Due Diligence All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HospitalDashboard;
