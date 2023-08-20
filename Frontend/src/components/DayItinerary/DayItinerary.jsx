import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ItineraryActivityCard from "../ItineraryActivityCard/ItineraryActivityCard";

export default function DayItinerary(props) {

  return (
    <Box sx={{ border: 1, marginTop: 2,padding:2,marginBottom:2 }}>
      <Stepper activeStep={-1} orientation="vertical">
        {props.iti[`Day ${props.i+1}`].map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <ItineraryActivityCard i={index} details={props.iti[`Day ${props.i+1}`]}/>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
