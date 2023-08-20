import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro";

export default function ResponsiveDateRangePickers(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]}>
        <DemoItem component="DateRangePicker">
          <div>
            <MobileDateRangePicker
              slotProps={{
                textField: {
                  sx: {
                    "& .MuiInputBase-root": {
                      color: "white",
                      border:'1px solid white',
                      borderRadius: "15px",
                      backdropFilter: "blur(100px)",
                    },
                  },
                  InputLabelProps: {
                    style: { opacity:'0.4',color: "#fff" },
                  },
                },
                fieldSeparator: { children: "to", sx: { color: "white" } },
              }}
              localeText={{
                start: "Check-in",
                end: "Check-out",
                color: "white",
              }}
              onAccept={(e) => props.setDur(e)}
            />
          </div>
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
