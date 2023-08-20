import * as React from "react";

import Tab from "@mui/joy/Tab";

export default function DayTab(props) {
  return (
    <Tab
      variant={props.currentIndex === props.index ? "soft" : "plain"}
      color={props.currentIndex === props.index ? "primary" : "neutral"}
      
    >
      Day {props.index + 1}
    </Tab>
  );
}
