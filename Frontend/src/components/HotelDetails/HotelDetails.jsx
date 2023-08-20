import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import BedIcon from '@mui/icons-material/Bed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
export default function HotelDetails(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 4,
          width: "auto",
          height: "auto",
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "flex-start",
          borderRadius: "10px",
        }}
      >
        <Stack direction="row" spacing={2} sx={{ m: 2 }}>
          <TextField
            disabled
            label="Destination"
            id="outlined-disabled"
            defaultValue={props.destination}
            sx={{ width: "50%" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BedIcon sx={{ color: "#d1d1d1" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            disabled
            label="Check In"
            id="outlined-disabled"
            defaultValue={props.checkin}
            sx={{ width: "30%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarMonthIcon sx={{ color: "#d1d1d1" }} />
                </InputAdornment>
              ),
            }}
          />
         
         <TextField
            disabled
            label="Check Out"
            id="outlined-disabled"
            defaultValue={props.checkout}
            sx={{ width: "30%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarMonthIcon sx={{ color: "#d1d1d1" }} />
                </InputAdornment>
              ),
            }}
          />
         <TextField
            disabled
            label="Rooms - Guests"
            id="outlined-disabled"
            defaultValue="1 Room, 1 Guest"
            sx={{ width: "50%" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "#d1d1d1" }} />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Paper>
    </Box>
  );
}
