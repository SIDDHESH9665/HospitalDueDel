import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LanguageIcon from "@mui/icons-material/Language";
import AssessmentIcon from "@mui/icons-material/Assessment";
import RateReviewIcon from "@mui/icons-material/RateReview";

const cards = [
  {
    id: 1,
    title: "Age of Hospital",
    description: "Include the age details here.",
    icon: <LocalHospitalIcon />,
  },
  {
    id: 2,
    title: "Official Website",
    description: "Include the website link here.",
    icon: <LanguageIcon />,
  },
  {
    id: 3,
    title: "Hospital facility / infrastructure score",
    description: "Include the score/facility details here.",
    icon: <AssessmentIcon />,
  },
  {
    id: 4,
    title: "Google Reviews",
    description: "Include the reviews details here.",
    icon: <RateReviewIcon />,
  },
];

function Supplimentry() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <div className="supplementary-strip">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          width: "100%",
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={card.id}
            className={`supplementary-card ${
              selectedCard === index ? "selected" : ""
            }`}
            onClick={() => setSelectedCard(index)}
          >
            <CardActionArea sx={{ "&:focus": { outline: "none" } }}>
              <CardContent sx={{ textAlign: "center" }}>
                {card.icon}
                <Typography variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default Supplimentry;
