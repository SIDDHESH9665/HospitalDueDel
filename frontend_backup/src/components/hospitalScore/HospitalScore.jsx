import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

const HospitalScore = ({ score }) => {
  const data = [{ value: score }];
  
  return (
    <div className="score-container">
      <Stack spacing={1.5}><Typography level="h3">Hospital Score</Typography></Stack>
      
      <p className="score-description">View the current assessment score of the hospital</p>
      
      <div className="gauge-container">
        <RadialBarChart className="gauge"
          width={500}
          height={260}
          cx="50%"
          cy="70%"
          innerRadius="100%"
          outerRadius="100%"
          barSize={30}
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <PolarAngleAxis
          
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="value"
            fill="url(#gradient)"
            cornerRadius={20}
            
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F26E88" />
              <stop offset="100%" stopColor="#245FE6" />
            </linearGradient>
          </defs>
        </RadialBarChart>
        <div className="score-text">
          {score.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default HospitalScore;
