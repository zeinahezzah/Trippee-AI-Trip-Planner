import React from "react";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./signUp.css";
import GeneralTextField from "../../components/GeneralTextField/GeneralTextField.jsx";
import { Stack, Button, Typography, Link } from "@mui/material";

const SignupPage = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const setEmailFunc = (e) => {
    setEmail(e);
  };

  return (
    <div className="signup-page-background">
      <div className="signup-page-container">
        <div className="signup-page-container1">
          <img
            alt="logo"
            src={logo}
            className="signup-page-logo"
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="signup-page-container2">
          <div className="signup-page-container4">
            <Stack
              direction="column"
              spacing={2}
              marginBottom={7}
              marginTop={5}
            >
              <Typography variant="h4" gutterBottom>
                Sign Up
              </Typography>
              <GeneralTextField
                size={400}
                required={true}
                id="outlined-required"
                label="Email"
                type=""
                autoComplete=""
                onCh={setEmailFunc}
              />
              <GeneralTextField
                size={400}
                required={true}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                style={{ backgroundColor: "#27a8b9", width: 400 }}
                onClick={() => {
                  navigate("/signup2", {
                    state: { email: email, password: password },
                  });
                }}
              >
                Next
              </Button>
              <Stack direction="row" spacing={1} marginTop={2}>
                <Typography>Already have an account?</Typography>
                <Link
                  onClick={() => {
                    navigate("/login");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Login
                </Link>
              </Stack>
            </Stack>
          </div>
        </div>

        <div className="signup-page-container3"> </div>
      </div>
    </div>
  );
};

export default SignupPage;
