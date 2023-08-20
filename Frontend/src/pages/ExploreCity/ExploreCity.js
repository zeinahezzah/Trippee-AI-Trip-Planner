import React from "react";
import "./ExploreCity.css";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WelcomeNavBar from "../../components/WelcomeNavBar/WelcomeNavBar";
import TextImageFilled from "../../components/TextImageFilled/TextImageFilled";
import FeatureCard32 from "../../components/FeatureCard32/FeatureCard32";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import { Stack, Typography } from "@mui/material";
import Carousel from "../../components/Carousel/Carousel";
import LoadingPage from "../LoadingPage/LoadingPage";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const ExploreCity = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [cityDetails, setCityDetails] = React.useState("");

  const location = useLocation();

  useEffect(() => {
    axios
      .post("http://localhost:8000/getCityDetails", {
        name: location.state.cityName,
      })
      .then((res) => {
        setCityDetails(res.data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <LoadingPage />;
  } else {
    return (
      <>
        <NavigationBar />
        <div className="explore-city-page-container">
          <div className="explore-city-page-container1">
            {/* <WelcomeNavBar /> */}
            <div className="nameOfCity">
              <TextImageFilled
                name={cityDetails.name.toUpperCase()}
                image={cityDetails.imagesURL[3]}
              />
            </div>
          </div>
          <div className="explore-city-page-container3">
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontFamily: "sans-serif",
                fontWeight: "italic",
                color: "black",
              }}
            >
              {cityDetails.description}
            </Typography>
            ;
          </div>
          <div className="explore-city-page-container2">
            <FeatureCard32
              title="Location"
              description={cityDetails.country + ", " + cityDetails.continent}
              icon={<RoomOutlinedIcon sx={{ color: "white" }} />}
            />
            <FeatureCard32
              title="Visa requirements"
              description={cityDetails.visaRequirements}
              icon={<GavelOutlinedIcon sx={{ color: "white" }} />}
            />
            <FeatureCard32
              title="Currency"
              description={cityDetails.currency}
              icon={<LocalAtmOutlinedIcon sx={{ color: "white" }} />}
            />
            <FeatureCard32
              title="Safety"
              description={cityDetails.safety}
              icon={<HealthAndSafetyOutlinedIcon sx={{ color: "white" }} />}
            />
          </div>

          <div className="explore-city-page-container4">
            <Stack
              direction="column"
              spacing={1}
              sx={{ alignItems: "center" }}
              paddingTop={4}
            >
              <Carousel image={cityDetails.imagesURL} />
            </Stack>
          </div>
        </div>
      </>
    );
  }
};

export default ExploreCity;
