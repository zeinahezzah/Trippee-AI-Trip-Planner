import React from "react";
import "./ExplorationPage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import AnimatedSlogan from "../../components/AnimatedSlogan/AnimatedSlogan";
import WelcomeNavBar from "../../components/WelcomeNavBar/WelcomeNavBar";
import Pagination from "@mui/material/Pagination";
import FlippingCard from "../../components/FlippingCard/FlippingCard";
import { Stack, Typography } from "@mui/material";
import LoadingPage from "../LoadingPage/LoadingPage";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const ExplorationPage = (props) => {
  const [cities, setCities] = useState();
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    axios.get("http://localhost:8000/getAllCitiesDetails").then((res) => {
      setCities(divideArrayIntoSubarrays(res.data, 8));
      setLoading(false);
    });
  }, []);
  function divideArrayIntoSubarrays(array, subarrayLength) {
    const result = [];
    const arrayLength = array.length;

    for (let i = 0; i < arrayLength; i += subarrayLength) {
      result.push(array.slice(i, i + subarrayLength));
    }

    return result;
  }
  const handleChange = (event, value) => {
    setPage(value);
  };
  if (loading) {
    return <LoadingPage />;
  } else {
    return (
      <>
        <NavigationBar />

        <div className="exploration-page-container">
          <div className="exploration-page-container1">
            <div className="exploration-page-container2">
              {/* <WelcomeNavBar /> */}
              <AnimatedSlogan />
            </div>
            <div className="exploration-page-container4">
              <Stack
                direction="column"
                spacing={1}
                sx={{ alignItems: "center", marginBottom: 4, marginTop: 4 }}
              >
                <Typography
                  variant="h4"
                  alignContent={"center"}
                  sx={{ fontWeight: "bold", color: "black" }}
                >
                  Look into the cities that we recommend!
                </Typography>
                {/* <AnimatedSearchBar /> */}
              </Stack>
            </div>
            <div className="exploration-page-container3">
              {cities[parseInt(page) - 1].map((c) => (
                <FlippingCard city={c} />
              ))}
            </div>
            <div className="exploration-page-container5">
              <Pagination
                count={cities.length}
                page={page}
                onChange={handleChange}
                sx={{ color: "white" }}
                size="large"
                color="primary"
              />
            </div>
            {/* <div className="exploration-page-container6"></div> */}
          </div>
        </div>
      </>
    );
  }
};

export default ExplorationPage;
