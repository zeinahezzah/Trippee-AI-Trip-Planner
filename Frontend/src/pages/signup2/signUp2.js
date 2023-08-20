import React from "react";
import "./signUp2.css";
import { useLocation } from "react-router-dom";
import logo from "../../Assets/logo.png";
import GeneralTextField from "../../components/GeneralTextField/GeneralTextField";
import { Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CountryDropdown from "../../components/CountryDropdown/country";

const SignupPage2 = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="signup-page-2-background">
      <div className="signup-page-2-container">
        <div className="signup-page-2-container1">
          <img
            alt="logo"
            src={logo}
            className="signup-page-2-logo"
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="signup-page-2-container2">
          <div className="signup-page-2-container3"></div>

          <div className="signup-page-2-container4">
            <Stack
              direction="column"
              spacing={2}
              sx={{ alignItems: "center" }}
              marginTop={3}
            >
              <Typography variant="h4">Sign Up</Typography>
              <GeneralTextField
                size={400}
                required={true}
                id="outlined-required"
                label="First Name"
                type=""
                autoComplete=""
              />
              <GeneralTextField
                size={400}
                required={true}
                id="outlined-required"
                label="Last Name"
                type=""
                autoComplete=""
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="select your birthdate" />
                </DemoContainer>
              </LocalizationProvider>
              <Stack direction="row" spacing={2}>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ marginTop: 1.2, fontWeight: "bold" }}
                >
                  Gender:
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </Stack>
              <Stack direction="row" spacing={2}>
                <CountryDropdown style={{ width: 200 }} />
              </Stack>

              <Button
                variant="contained"
                style={{ backgroundColor: "#27a8b9", width: 350 }}
              >
                create account
              </Button>
            </Stack>
          </div>

          <div className="signup-page-2-container5"></div>
        </div>
        <div className="signup-page-2-container6"></div>
      </div>
    </div>
  );
};

export default SignupPage2;
