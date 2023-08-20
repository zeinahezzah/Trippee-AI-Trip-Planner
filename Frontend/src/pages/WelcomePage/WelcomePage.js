import React from "react";
import "./WelcomePage.css";
import explore from "../../Assets/exploration.jpg";
import personalization from "../../Assets/personalizedTravelPlan.jpg";
import discover from "../../Assets/discover.jpg";
import WelcomeNavBar from "../../components/WelcomeNavBar/WelcomeNavBar";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import { Stack, Typography } from "@mui/material";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const WelcomePage = (props) => {
  const exploreQuestion = "Just want to look around?";
  const exploreDescription =
    "Browse all available travel options and our standardized plans here!";
  const personalizationQuestion = "Ready to plan your trip?";
  const personalizationDescription =
    "Our AI is programmed to develop the perfect itinerary for you trip!";
  const discoverQuestion =
    "  Have a certain place in mind but don't know where it is?";
  const discoverDescription =
    "Use our image recognition AI to find any place by just uploading an picture!";
  return (
    <>
      {" "}
      <NavigationBar />
      <div className="welcome-page-container">
        {/* <WelcomeNavBar />      */}
        <div id="bg"></div>

        <div className="welcome-page-container0">
          <Typography variant="h4" alignContent={"center"}>
            Start Your Journey Now! <br /> All your travel needs in one place
          </Typography>
        </div>
        <div className="welcome-page-container1">
          <Stack direction="row" spacing={2}>
            <WelcomeCard
              nav={"exploration"}
              title="Exploration"
              question={exploreQuestion}
              description={exploreDescription}
              image={explore}
            />
            <WelcomeCard
              nav={"personalization"}
              title="Personalization"
              question={personalizationQuestion}
              description={personalizationDescription}
              image={personalization}
            />
            <WelcomeCard
              nav={"discoverLandMark"}
              title="Discovery"
              question={discoverQuestion}
              description={discoverDescription}
              image={discover}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
