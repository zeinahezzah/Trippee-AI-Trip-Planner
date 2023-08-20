import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
export default function FlightDetails(props) {
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
            label="From - To"
            id="outlined-disabled"
            defaultValue={`Cairo - ${props.destination}`}
            sx={{ width: "50%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SwapHorizIcon sx={{ color: "#d1d1d1" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            disabled
            label="Trip"
            id="outlined-disabled"
            defaultValue="Return"
            sx={{ width: "40%" }}
          />
          <TextField
            disabled
            label="Depart - Return"
            id="outlined-disabled"
            defaultValue={`${props.checkin} - ${props.checkout}`}
            sx={{ width: "50%" }}
          />
          <TextField
            disabled
            label="Passenger - Class"
            id="outlined-disabled"
            defaultValue="1 Passenger, Economy"
            sx={{ width: "50%" }}
          />
        </Stack>
      </Paper>
    </Box>
  );
}
