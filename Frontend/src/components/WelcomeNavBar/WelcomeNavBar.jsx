import * as React from "react";
import "./WelcomeNavBar.css";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

export default function WelcomeNavBar(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="welcome-navbar-container">
        <div className="welcome-navbar-container1">
          <img
            alt="logo"
            src={logo}
            className="welcome-navbar-logo"
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          />
          <Typography
            variant="h6"
            gutterBottom
            color={"white"}
            lineHeight={3.2}
            marginLeft={-2}
            fontFamily={"Georgia"}
          >
            Trippee!
          </Typography>
        </div>

        <div className="welcome-navbar-container2">
          {/* <Box marginTop={2} marginRight={5}>
            <Button
              variant="text"
              style={{ color: "white", borderRadius: 20, marginRight: 3 }}
              fontFamily={"Roboto"}
              onClick={() => {
                navigate("/signup");
              }}
            >
              sign up
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#8bc8db",
                borderRadius: 20,
                marginLeft: 3,
              }}
              fontFamily={"Roboto"}
              onClick={() => {
                navigate("/login");
              }}
            >
              login
            </Button>
          </Box> */}
        </div>
      </div>
    </div>
  );
}
