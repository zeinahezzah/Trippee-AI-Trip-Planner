import React from "react";
import logo from "../../Assets/logo.png";
import "./LoginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GeneralTextField from "../../components/GeneralTextField/GeneralTextField";
import { Stack, Button, Typography, Link } from "@mui/material";

const LoginPage = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const setEmailFunc = (e) => {
    setEmail(e);
  };
  const setPasswordFunc = (e) => {
    setPassword(e);
  };
  const loginFunc = () => {
    // axios
    //   .post("http://localhost:8000/login", { email: email, password: password })
    //   .then((res) => {
    //     console.log(res.data);

    //   });
    axios.get("http://localhost:8000/getToken").then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div className="login-page-background">
      <div className="login-page-container">
        <div className="login-page-container2">
          <img
            alt="logo"
            src={logo}
            className="login-page-logo"
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="login-page-container3">
          <Typography variant="h3" gutterBottom>
            Login
          </Typography>
          <Stack direction="column" spacing={2}>
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
              onCh={setPasswordFunc}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "#27a8b9" }}
              sx={{ width: 400 }}
              onClick={loginFunc}
            >
              Login
            </Button>
            <Link>Forgot password?</Link>
            <Stack direction="row" spacing={1}>
              <Typography variant="h7" gutterBottom>
                Don't have an account?
              </Typography>
              <Link
                onClick={() => {
                  navigate("/signUp");
                }}
                style={{ cursor: "pointer" }}
              >
                Sign Up
              </Link>
            </Stack>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
