import * as React from "react";
import "./ItineraryPage.css";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WelcomeNavBar from "../../components/WelcomeNavBar/WelcomeNavBar";
import DayItinerary from "../../components/DayItinerary/DayItinerary";
import Box from "@mui/joy/Box";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import DayTab from "../../components/DayTab/DayTab";
import { useLocation } from "react-router-dom";
import ItineraryActivityCard from "../../components/ItineraryActivityCard/ItineraryActivityCard";
import LoadingPage from "../LoadingPage/LoadingPage";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const ItineraryPage = (props) => {
  const [index, setIndex] = React.useState(0);
  const location = useLocation();
  const [landmarksArray, setLandmarksArray] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [timeArray, setTimeArray] = React.useState([]);
  const [reload, setReload] = React.useState(false);
  const [iterations, setIterations] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/pnf");
    } else {
      setLoading(true);
      axios
        .post("http://localhost:8000/recognizeLandMarkArray", {
          array: func(),
        })
        .then((res) => {
          if (containsNull(res.data)) {
            if (iterations === 3) {
              setLandmarksArray(
                divideArrayIntoSubarrays(
                  removeNullValues(res.data),
                  location.state.result[0]["Day 1"].length
                )
              );
              setTimeArray(
                divideArrayIntoSubarrays(
                  removeValuesAtIndices(getNullIndices(res.data), func2()),
                  location.state.result[0]["Day 1"].length
                )
              );
              setLoading(false);
            } else {
              setIterations(iterations + 1);
              setReload(!reload);
            }
          } else {
            setLandmarksArray(
              divideArrayIntoSubarrays(
                res.data,
                location.state.result[0]["Day 1"].length
              )
            );
            setTimeArray(
              divideArrayIntoSubarrays(
                func2(),
                location.state.result[0]["Day 1"].length
              )
            );
            setLoading(false);
          }
        });
    }
  }, [reload]);
  const func = () => {
    const daysArr = [];
    for (let j = 0; j < location.state.result.length; j++) {
      for (
        let i = 0;
        i < location.state.result[j][`Day ${j + 1}`].length;
        i++
      ) {
        daysArr.push(location.state.result[j][`Day ${j + 1}`][i].Location);
      }
    }
    return daysArr;
  };
  const func2 = () => {
    const timeArr = [];
    for (let j = 0; j < location.state.result.length; j++) {
      for (
        let i = 0;
        i < location.state.result[j][`Day ${j + 1}`].length;
        i++
      ) {
        timeArr.push(location.state.result[j][`Day ${j + 1}`][i].Time);
      }
    }
    return timeArr;
  };
  function divideArrayIntoSubarrays(array, subarrayLength) {
    const result = [];
    const arrayLength = array.length;

    for (let i = 0; i < arrayLength; i += subarrayLength) {
      result.push(array.slice(i, i + subarrayLength));
    }

    return result;
  }
  function containsNull(array) {
    return array.some((item) => item === null);
  }
  function removeNullValues(array) {
    return array.filter((item) => item !== null);
  }
  function getNullIndices(array) {
    const nullIndices = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] === null) {
        nullIndices.push(i);
      }
    }

    return nullIndices;
  }

  function removeValuesAtIndices(indices, values) {
    const result = [...values];

    indices.sort((a, b) => b - a); // Sort indices in descending order

    for (const index of indices) {
      if (index >= 0 && index < result.length) {
        result.splice(index, 1);
      }
    }

    return result;
  }

  if (loading) {
    return <LoadingPage />;
  } else {
    return (
      <>
        <NavigationBar />
        <div className="itinerary-page-container">
          {/* <WelcomeNavBar /> */}
          <div className="itinerary-page-container1">
            <div className="itinerary-page-container2">
              <Box
                sx={{ display: "flex", gap: 2, flexDirection: "column", m: 3 }}
              >
                <Tabs
                  aria-label="Outlined tabs"
                  value={index}
                  onChange={(event, value) => setIndex(value)}
                  sx={{ borderRadius: "lg" }}
                >
                  <TabList variant="outlined">
                    {location.state.result.map((day) => (
                      <DayTab
                        index={location.state.result.indexOf(day)}
                        currentIndex={index}
                      />
                    ))}
                  </TabList>
                </Tabs>
              </Box>
            </div>
            <div className="itinerary-page-container3">
              {landmarksArray[index].map((s, x) => (
                <ItineraryActivityCard
                  i={index}
                  details={s}
                  time={timeArray[index]}
                  index={x}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ItineraryPage;
