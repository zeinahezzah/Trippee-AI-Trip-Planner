import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Button from "@mui/joy/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import "./HotelsCard.css";
const Img = styled("img")({
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function HotelsCard(props) {
  const [value, setValue] = React.useState(5);
  const mouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = "#F5F5F5";
    e.currentTarget.style.cursor = "pointer";
  };
  function removeHtmlTags(inputText) {
    let result = "";
    let insideTag = false;
    let buffer = "";

    for (let i = 0; i < inputText.length; i++) {
      const char = inputText[i];

      if (char === "<") {
        insideTag = true;
      } else if (char === ">") {
        insideTag = false;
        if (buffer === "br/") {
          result += "\n";
          buffer = "";
        }
      } else if (insideTag) {
        buffer += char;
      } else {
        result += char;
      }
    }
    const res = [];
    for (let c of result) {
      if (c === ":") {
        return [result.substring(0,result.indexOf(':')),result.substring(result.indexOf(c) + 1)];
      }
    }

    return result;
  }
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        marginBottom: 4,
        width: "80%",
        flexGrow: 4,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
      onMouseEnter={(e) => mouseEnter(e)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
    >
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      />
      <Stack direction="column" spacing={15}>
        <Grid container spacing={2}>
          <Grid item>
            <Stack direction="column">
              <Img
                alt="complex"
                src={props.hotel.max_1440_photo_url}
                sx={{ width: 210, height: 230 }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Stack direction="row" spacing={1}>
                  <Stack direction="row" spacing={1} sx={{ width: 600 }}>
                    <Stack direction="column" spacing={0}>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                        color="blue"
                      >
                        {props.hotel.hotel_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {props.hotel.city_trans}, {props.hotel.country_trans} ( {props.hotel.distance_to_cc} km from city center )
                      </Typography>
                    </Stack>
                    <Rating name="read-only" value={parseInt(props.hotel.review_score)/2}  precision={0.5} readOnly />
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Stack
                      direction="column"
                      spacing={1}
                      sx={{ alignItems: "flex-end", width: 100 }}
                    >
                      <Typography
                        variant="body2"
                        color="black"
                        style={{ fontWeight: "bold" }}
                      >
                        {props.hotel.review_score_word
                          ? props.hotel.review_score_word
                          : "Not Rated"}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {props.hotel.review_nr
                          ? props.hotel.review_nr + " reviews"
                          : "No reviews"}
                      </Typography>
                    </Stack>
                    <Stack direction="column">
                      <div className="rating-box">
                        {props.hotel.review_score
                          ? props.hotel.review_score
                          : "0.0"}
                      </div>
                    </Stack>
                  </Stack>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Stack direction="column" spacing={0.5} sx={{ width: 600 }}>
                    <Typography
                      variant="body2"
                      gutterBottom
                      marginTop={4}
                      color="black"
                      style={{ fontWeight: "bold" }}
                      sx={{ fontSize: 14 }}
                    >
                      {removeHtmlTags(props.hotel.unit_configuration_label)[0]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {removeHtmlTags(props.hotel.unit_configuration_label)[1]}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="green"
                      style={{ fontWeight: "bold" }}
                    >
                      {props.hotel.ribbon_text}
                    </Typography>

                    {props.hotel.urgency_message ? (
                      <Typography
                        variant="body6"
                        color="red"
                        style={{ fontWeight: "bold" }}
                      >
                        {props.hotel.urgency_message + "!!!"}
                      </Typography>
                    ) : (
                      ""
                    )}
                  </Stack>
                  <Stack
                    direction="column"
                    spacing={1}
                    sx={{ alignItems: "flex-end" }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      marginTop={4}
                    >
                      {props.nod} nights, 1 adult
                    </Typography>
                    <Typography
                      variant="body2"
                      color="black"
                      style={{ fontWeight: "bold" }}
                    >
                      {props.hotel.price_breakdown.currency}{" "}
                      {parseInt(
                        props.hotel.price_breakdown.all_inclusive_price
                      )}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      including taxes
                    </Typography>
                    <Stack direction="column" paddingTop={1}>
                      <Button
                        variant="soft"
                        endDecorator={<KeyboardArrowRight />}
                        style={{ backgroundColorcolor: "blue", width: 150 }}
                        onClick={() =>{window.open(props.hotel.url, '_blank');}}
                      >
                        See Availability
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item></Grid>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
}
