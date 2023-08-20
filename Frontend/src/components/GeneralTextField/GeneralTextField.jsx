import * as React from "react";
import TextField from "@mui/material/TextField";

export default function GeneralTextField(props) {
  return (
    <div>
      <TextField
        style={{ width: props.size, backgroundColor: "#f3f3f3" }}
        required={props.required}
        id={props.id}
        label={props.label}
        type={props.type}
        autoComplete={props.autoComplete}
        onChange={(e) => props.onCh(e.target.value)}
      />
    </div>
  );
}
