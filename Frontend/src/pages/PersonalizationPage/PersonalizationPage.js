import * as React from "react";
import "./PersonalizationPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../Assets/logo.png";
import WelcomeNavBar from "../../components/WelcomeNavBar/WelcomeNavBar";
import { Button, Stack, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SearchBar from "../../components/SearchBar/SearchBar";
import RangeDatePicker from "../../components/RangeDatePicker/RangeDatePicker";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import ActivitiesBar from "../../components/ActivitiesBar/ActivitiesBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { useSnackbar } from "notistack";

const PersonalizationPage = (props) => {
  const [locationDepart, setLocationDepart] = useState("");
  const [location, setLocation] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [budget, setBudget] = useState("");
  const [preferences, setPreferences] = useState([]);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (message, variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  const getLocation = (loc) => {
    setLocation(loc);
  };
  const getLocationDepart = (loc) => {
    setLocationDepart(loc);
  };
  const getDuration = (cIn) => {
    setCheckin(
      cIn[0].$d.getDate() +
        "/" +
        (parseInt(cIn[0].$d.getMonth()) + 1) +
        "/" +
        cIn[0].$d.getFullYear()
    );
    setCheckout(
      cIn[1].$d.getDate() +
        "/" +
        (parseInt(cIn[1].$d.getMonth()) + 1) +
        "/" +
        cIn[1].$d.getFullYear()
    );
    setNumberOfDays(
      parseInt(cIn[1].$d.getDate()) - parseInt(cIn[0].$d.getDate()) + 1
    );
  };

  const getPreferences = (pref) => {
    setPreferences(pref);
  };
  function convertDateFormat(inputDate) {
    const parts = inputDate.split("/");
    const year = parts[2];
    const month = parts[1];
    const day = parts[0];
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  const sendReferences = async (e) => {
    e.preventDefault();
    const formattedCheckin = convertDateFormat(checkin);
    const formattedCheckout = convertDateFormat(checkout);
    if (
      locationDepart === "" ||
      location === "" ||
      checkin === "" ||
      checkout === "" ||
      numberOfDays === ""
    ) {
      handleClickVariant("Please fill in all fields", "error");
    } else {
      navigate("/personalizedPlan", {
        state: {
          locDepart: locationDepart,
          loc: location,
          cin: formattedCheckin,
          checkinIti: checkin,
          checkoutIti: checkout,
          nod: numberOfDays,
          pref: preferences,
          cout: formattedCheckout,
          numberofdays: numberOfDays,
        },
      });
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="personalization-page-container">
        {/* <WelcomeNavBar /> */}
        <div className="personalization-page-container1">
          <Typography
            variant="h4"
            gutterBottom
            alignContent={"center"}
            sx={{ fontWeight: "bold", color: "white" }}
          >
            Adventure or Couch Potatoes?
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            alignContent={"center"}
            sx={{ fontWeight: "bold", color: "white" }}
          >
            {" "}
            Create your travel itinerary. View your accommodation, tours and
            flights
          </Typography>
        </div>
        <div className="personalization-page-container2">
          <Stack direction="row" spacing={4}>
            <SearchBar
              setLoc={getLocationDepart}
              iconB={<FlightLandIcon />}
              description={"Leaving from?"}
            />
            <SearchBar
              setLoc={getLocation}
              iconB={<FlightTakeoffIcon />}
              description={"Going to?"}
            />
          </Stack>
        </div>
        <div className="personalization-page-container3">
          <RangeDatePicker setDur={getDuration} />
        </div>
        <div className="personalization-page-container4">
          <ActivitiesBar setPref={getPreferences} />
          <Typography variant="body1" sx={{ color: "white", marginTop: 2 }}>
            *Disclaimer: These preferences may not always appear in the
            generated plan.
          </Typography>
          <Button
            variant="contained"
            size="large"
            style={{
              marginTop: "3%",
              marginLeft: "1.2%",
              marginBottom: "3%",
              backgroundColor: "white",
              borderRadius: 100,
              color: "black",
              marginRight: 10,
              fontWeight: "bold",
            }}
            fontFamily={"Roboto"}
            onClick={sendReferences}
          >
            Plan
          </Button>
        </div>
      </div>
    </>
  );
};

export default PersonalizationPage;
