import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function FLightsCard(props) {
  function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60);

    return hours;
  }
  function convertMinutesToHoursMinutes(minutes) {
    const remainingMinutes = minutes % 60;

    return remainingMinutes;
  }

  return (
    <Paper
      sx={{
        p: 2,
        marginBottom: 5,
        maxWidth: 900,
        marginTop: "auto",
        marginRight: "auto",
        marginLeft: "auto",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      />
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}></Box>
      <Grid container spacing={2}>
        <Grid item></Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Stack direction="column" spacing={-2}>
                <Stack direction="row" spacing={8}>
                  <ButtonBase sx={{ width: 50, height: 50 }}>
                    <Img
                      alt="complex"
                      src={props.imageCar}
                      sx={{ width: 200, height: 600 }}
                    />
                  </ButtonBase>
                  <Typography variant="h6" component="div">
                    {props.firstLeg[0].departuredAt.split("T")[1]} -{" "}
                    {props.firstLeg[0].arrivedAt.split("T")[1]}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {convertMinutesToHours(
                      parseInt(props.firstLeg[0].duration) / 60000
                    )}
                    h{" "}
                    {convertMinutesToHoursMinutes(
                      parseInt(props.firstLeg[0].duration) / 60000
                    )}
                    m
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={16} paddingLeft={15}>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.firstLeg[0].origin.cityCode} -{" "}
                    {props.firstLeg[0].destination.cityCode}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    direct
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="column" spacing={-2} paddingTop={4}>
                <Stack direction="row" spacing={8}>
                  <ButtonBase sx={{ width: 50, height: 50 }}>
                    <Img
                      alt="complex"
                      src={props.imageCar}
                      sx={{ width: 200, height: 600 }}
                    />
                  </ButtonBase>
                  <Typography variant="h6" component="div">
                    {props.secondLeg[0].departuredAt.split("T")[1]} -{" "}
                    {props.secondLeg[0].arrivedAt.split("T")[1]}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {convertMinutesToHours(
                      parseInt(props.secondLeg[0].duration) / 60000
                    )}
                    h{" "}
                    {convertMinutesToHoursMinutes(
                      parseInt(props.secondLeg[0].duration) / 60000
                    )}
                    m
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={16} paddingLeft={15}>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.secondLeg[0].origin.cityCode} -{" "}
                    {props.secondLeg[0].destination.cityCode}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    direct
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={16}>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  style={{ fontWeight: "bold", fontSize: 18 }}
                  paddingTop={4}
                >
                  Price Not Available
                </Typography>
                <Button
                  variant="soft"
                  endDecorator={<KeyboardArrowRight />}
                  style={{ backgroundColorcolor: "blue", width: 150 }}
                  onClick={() => {
                    window.open(props.flight.shareableUrl, "_blank");
                  }}
                >
                  See Availability
                </Button>
              </Stack>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                operated by {props.firstLeg[0].marketingCarrier.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
