import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import Stack from "@mui/material/Stack";

export default function DiscoveryCard(props) {
  return (
    <Card
      sx={{ display: "flex", width: 800, height: 500, alignItems: "center" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Stack
            direction="column"
            spacing={1}
            sx={{ width: 400 }}
            paddingLeft={2}
          >
            <Typography
              level="title-lg"
              textColor="#fff"
              mb={1}
              style={{ fontWeight: "bold", fontSize: 25 }}
            >
              {props.landmark.name}
            </Typography>
            <Stack direction="row" spacing={0.5}>
              <LocationOnRoundedIcon color="grey" />
              <Typography variant="body2">
                {props.landmark.city.name}, {props.landmark.city.country},{" "}
                {props.landmark.city.continent}
              </Typography>
            </Stack>
            <Typography variant="body2" textColor="#fff" mb={1}>
              {props.landmark.latitude} , {props.landmark.longitude}.
            </Typography>
            <Typography variant="body2" textColor="#fff" mb={1}>
              {props.landmark.description}
            </Typography>
          </Stack>
        </CardContent>
      </Box>
      <Stack direction="column" paddingLeft={3}>
        <CardMedia
          component="img"
          sx={{ width: 350, height: 500 }}
          image={props.landmark.imageURL}
        />
      </Stack>
    </Card>
  );
}
