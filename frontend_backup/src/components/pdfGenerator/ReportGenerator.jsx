import React, { useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// PDF Document Component
const ReportDocument = ({ hospital }) => {
  const styles = StyleSheet.create({
    page: {
      padding: 20,
      fontFamily: "Helvetica",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 8,
    },
    hospitalName: {
      fontSize: 16,
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#333",
    },
    address: {
      fontSize: 8,
      color: "#555",
      textTransform: "uppercase",
      marginVertical: 5,
    },
    separator: {
      borderBottom: "1px solid #ccc",
      marginVertical: 8,
    },
    roundedBox: {
      border: "1px solid #ccc",
      borderRadius: 4,
      padding: 10,
      marginVertical: 10,
      backgroundColor: "#f9f9f9",
    },
    gauge: {
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "center",
      color: "#e57373",
    },
    sectionHeader: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 5,
    },
    sectionText: {
      fontSize: 12,
      marginBottom: 5,
    },
    stripedList: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid #ccc",
      borderRadius: 4,
      overflow: "hidden",
      marginTop: 10,
    },
    stripedRow: {
      flexDirection: "row",
      padding: 8,
      fontSize: 12,
    },
    stripedEven: {
      backgroundColor: "#f5f5f5",
    },
    stripedOdd: {
      backgroundColor: "#fff",
    },
    listText: {
      flex: 1,
      color: "#333",
    },
  });

  return (
    <Document>
      <Page style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.hospitalName}>
            {hospital?.hospital_info?.HOSPITAL || "N/A"}
          </Text>
        </View>
        <Text style={styles.address}>
          {hospital?.hospital_info?.ADDRESS || "N/A"}
        </Text>
        <View style={styles.separator} />

        {/* Gauge Box */}
        <View style={styles.roundedBox}>
          <Text style={styles.gauge}>Risk Score: 5.8/10</Text>
        </View>

        {/* Business and Identity Risk Box */}
        <View style={styles.roundedBox}>
          <Text style={styles.sectionHeader}>Business and Identity Risk</Text>
          <Text style={styles.sectionText}>
            PAN Verification: Verified Successfully
          </Text>
          <Text style={styles.sectionText}>
            GST Verification: Verified Successfully
          </Text>
        </View>

        {/* Blacklist Box */}
        <View style={styles.roundedBox}>
          <Text style={styles.sectionHeader}>Blacklist</Text>
          <Text style={styles.sectionText}>Status: Not Found</Text>
        </View>

        {/* Accreditation Section */}
        <Text style={styles.sectionHeader}>Accreditation</Text>
        <View style={styles.stripedList}>
          <View style={[styles.stripedRow, styles.stripedEven]}>
            <Text style={styles.listText}>ROHINI ID: Present</Text>
          </View>
          <View style={[styles.stripedRow, styles.stripedOdd]}>
            <Text style={styles.listText}>NABH Registered: No</Text>
          </View>
          <View style={[styles.stripedRow, styles.stripedEven]}>
            <Text style={styles.listText}>
              Present in IRDAI Public Disclosure: No
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

// Report Generator Component
const ReportGenerator = ({ hospital }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleViewPdf = () => setOpenModal(true);
  const handleClosePdfViewer = () => setOpenModal(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Button to Open Modal */}
      <Button
        variant="contained"
        color="success"
        onClick={handleViewPdf}
        style={{ padding: "5px 10px" }}
      >
        View Report
      </Button>

      {/* Modal for PDF Viewer */}
      <Dialog
        open={openModal}
        onClose={handleClosePdfViewer}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>PDF Preview</DialogTitle>
        <DialogContent>
          <PDFViewer style={{ width: "100%", height: "500px" }}>
            <ReportDocument hospital={hospital} />
          </PDFViewer>
        </DialogContent>
        <DialogActions>
          <PDFDownloadLink
            document={<ReportDocument hospital={hospital} />}
            fileName={`Hospital_Report_${
              hospital?.hospital_info?.ID || "Unknown"
            }_${new Date().toISOString().split("T")[0]}.pdf`}
          >
            {({ loading }) => (
              <Button size="small" variant="text" color="primary">
                {loading ? "Preparing Download..." : "Download PDF"}
              </Button>
            )}
          </PDFDownloadLink>
          <Button onClick={handleClosePdfViewer} size="small" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReportGenerator;
