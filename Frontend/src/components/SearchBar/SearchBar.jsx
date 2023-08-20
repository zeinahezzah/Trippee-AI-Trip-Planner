import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
export default function SearchBar(props) {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        border: "1px solid white",
        display: "flex",
        alignItems: "center",
        width: "50%",
        borderRadius: "15px",
        backgroundColor: "transparent",
        backdropFilter: "blur(100px)",
        boxShadow: "none",
      }}
    >
      <IconButton type="button" sx={{ color: "white" }} aria-label="search">
        {props.iconB}
      </IconButton>
      <InputBase
        sx={{
          marginTop: 0.3,
          marginLeft: 1,
          flex: 1,
          fontSize: "17px",
          color: "white",
        }}
        placeholder={props.description}
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) => props.setLoc(e.target.value)}
      />
    </Paper>
  );
}
