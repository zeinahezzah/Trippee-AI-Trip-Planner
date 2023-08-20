import React from "react";
import "./LandmarksPage.css";
import logo from "../../Assets/logo.png";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DiscoveryCard from "../../components/DiscoveryCard/DiscoveryCard";
import WelcomeNavBar from "../../components/WelcomeNavBar/WelcomeNavBar";
import Pagination from "@mui/material/Pagination";
import LoadingPage from "../LoadingPage/LoadingPage";
import PageNotFound from "../PageNotFound/PageNotFound";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const LandmarksPage = (props) => {
  const location = useLocation();
  const [page, setPage] = React.useState(1);
  const [lm, setLandmark] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [detection, setDetection] = React.useState(true);
  const [reload, setReload] = React.useState(false);
  const [iterations, setIterations] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/pnf");
    } else {
      if (location.state.data.length === 0) {
        setDetection(false);
        setLoading(false);
      } else {
        axios
          .post("http://localhost:8000/recognizeLandMark", {
            name: location.state.data[parseInt(page) - 1].name,
          })
          .then((res) => {
            if (res.data === "ERROR") {
              if (iterations === 5) {
                setDetection(false);
                setLoading(false);
              } else {
                setReload(!reload);
              }
              setIterations(iterations + 1);
            } else {
              setLandmark(res.data);
              setDetection(true);
              setLoading(false);
            }
          });
      }
    }
  }, [reload]);

  const handleChange = (event, value) => {
    setPage(value);
  };
  if (loading) {
    return <LoadingPage />;
  } else {
    if (detection) {
      return (
        <>
          <div className="landmarks-page-container">
            <div className="lmp-navbar-container">
              <img
                alt="logo"
                src={logo}
                className="lmp-navbar-logo"
                onClick={() => {
                  navigate("/");
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div
              className="background"
              style={{
                backgroundImage: `url(${lm.imageURL})`,
              }}
            ></div>
            {/* <WelcomeNavBar /> */}
            <div className="landmarks-page-container1">
              <DiscoveryCard landmark={lm} />
            </div>
            {/* <div className="landmarks-page-container2">
              <Pagination
                count={location.state.data.length}
                page={page}
                onChange={handleChange}
              />
            </div> */}
          </div>
        </>
      );
    } else {
      return (
        <PageNotFound
          description={"We couldnot figure out what this landmark is :("}
        />
      );
    }
  }
};

export default LandmarksPage;
