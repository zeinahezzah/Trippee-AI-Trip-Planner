import * as React from "react";
import { useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

export default function ItineraryActivityCard(props) {
  const [landmark, setLandmark] = useState("");

  return (
    <Box
      sx={{
        width: "auto",
        marginBottom: "2%",
      }}
    >
      <Card
        orientation="horizontal"
        sx={{
          width: 900,
        }}
      >
        <AspectRatio
          ratio="1"
          maxHeight={150}
          sx={{ maxWidth: 200, minWidth: 102, flex: 1 }}
        >
          <img src={props.details.imageURL} loading="lazy" alt="" />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {props.time[props.index]}
          </Typography>
          <Typography level="body2" fontWeight="lg" textColor="text.tertiary">
            {props.details.name}
          </Typography>
          <Sheet
            sx={{
              bgcolor: "background.level1",
              borderRadius: "sm",
              p: 1.5,
              my: 1.5,
              display: "flex",
              gap: 2,
              "& > div": { flex: 1 },
            }}
          >
            <div>
              <Typography level="body3" fontWeight="bold" color="black">
                Description
              </Typography>
              <Typography level="body3" fontWeight="lg">
                {props.details.description}
              </Typography>
            </div>
          </Sheet>
          <Box
            sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}
          ></Box>
        </CardContent>
      </Card>
    </Box>
  );
}
