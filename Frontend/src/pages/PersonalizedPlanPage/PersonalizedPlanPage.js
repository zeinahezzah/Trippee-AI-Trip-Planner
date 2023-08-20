import * as React from "react";
import "./PersonalizedPlanPage.css";
import WelcomeNavBar from "../../components/WelcomeNavBar/WelcomeNavBar";
import FlightDetails from "../../components/FlightDetails/FlightDetails";
import HotelDetails from "../../components/HotelDetails/HotelDetails";
import HotelsCard from "../../components/HotelsCard/HotelsCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Stack, Typography, Button } from "@mui/material";
import LoadingPage from "../LoadingPage/LoadingPage";
import FLightsCard from "../../components/FlightsCard/FlightsCard";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const PersonalizedPlanPage = (props) => {
  const [hotels, setHotels] = useState([]);
  const [fligths, setFligths] = useState([]);
  const [switching, setSwitching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageC, setImageC] = React.useState();
  const [iterations, setIterations] = React.useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state == null) {
      navigate("/pnf");
    } else {
      axios
        .post("http://localhost:8000/personalizedPlan/getHotels", {
          destination: location.state.loc,
          checkin: location.state.cin,
          checkout: location.state.cout,
        })
        .then((res) => {
          setHotels(res.data);
          setLoading(false);
        })
        .then();
    }
  }, []);
  const onClickFlights = async () => {
    setLoading(true);
    await axios
      .post("http://localhost:8000/receivePreferences", {
        location: location.state.loc,
        checkin: location.state.checkinIti,
        checkout: location.state.checkoutIti,
        numberOfDays: location.state.nod,
        preferences: location.state.pref,
      })
      .then((res) => {
        if (res.data.length === 0) {
          if (iterations === 3) {
            navigate("/pnf");
          } else {
            onClickFlights();
            setIterations(iterations + 1);
          }
        } else {
          navigate("/itinerary", { state: { result: res.data } });
        }
      });
  };
  const onClickHotels = async () => {
    setLoading(true);
    await axios
      .post("http://localhost:8000/personalizedPlan/getFlights", {
        destination: location.state.loc,
        from: location.state.locDepart,
        departureDate: location.state.cin,
        arrivalDate: location.state.cout,
      })
      .then((res) => {
        setFligths(res.data);
        axios
          .post(
            "http://localhost:8000/personalizedPlan/getLandmarkImageArray",
            {
              query: getAllCarriers(res.data),
              count: 1,
            }
          )
          .then((res) => {
            setImageC(res.data);
            setSwitching(true);
            setLoading(false);
          });
      });
  };
  const getAllCarriers = (fl) => {
    const arr = [];
    fl.map((f) =>
      arr.push(f.bounds[0].segments[0].marketingCarrier.name + " logo")
    );
    return arr;
  };
  if (loading) {
    return <LoadingPage />;
  } else {
    return (
      <>
        <NavigationBar />
        <div className="personalized-plan-page-container">
          {/* <WelcomeNavBar /> */}
          <div className="personalized-plan-page-container1">
            <div className="personalized-plan-page-container2">
              {switching ? (
                <FlightDetails
                  destination={location.state.loc}
                  checkin={location.state.cin}
                  checkout={location.state.cout}
                />
              ) : (
                <HotelDetails
                  destination={location.state.loc}
                  checkin={location.state.cin}
                  checkout={location.state.cout}
                />
              )}
            </div>
            <div className="personalized-plan-page-container4">
              {switching ? (
                <Stack direction="row" spacing={4} marginTop={2}>
                  <Typography variant="h4" sx={{ color: "white" }}>
                    After you preview all flights please click on this button
                  </Typography>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#27a8b9", borderRadius: 10 }}
                    onClick={onClickFlights}
                  >
                    Create Itinerary
                  </Button>
                </Stack>
              ) : (
                <Stack direction="row" spacing={4} marginTop={2}>
                  <Typography variant="h4" sx={{ color: "white" }}>
                    After you preview all hotels please click on this button
                  </Typography>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#27a8b9", borderRadius: 10 }}
                    onClick={onClickHotels}
                  >
                    find flights
                  </Button>
                </Stack>
              )}
            </div>
            <div className="personalized-plan-page-container3">
              {switching
                ? fligths.map((f, i) => (
                    <FLightsCard
                      firstLeg={f.bounds[0].segments}
                      secondLeg={f.bounds[1].segments}
                      flight={f}
                      imageCar={imageC[i]}
                    />
                  ))
                : hotels.map((h) => (
                    <HotelsCard hotel={h} nod={location.state.numberofdays} />
                  ))}
              {/* {} */}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default PersonalizedPlanPage;
