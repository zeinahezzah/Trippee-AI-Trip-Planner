import * as React from "react";
import "./ActivitiesBar.css";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Beach from "../../Assets/Beach.png";
import Camping from "../../Assets/Camping.png";
import Castles from "../../Assets/Castles.png";
import Countryside from "../../Assets/Countryside.png";
import Desert from "../../Assets/Desert.png";
import Historical from "../../Assets/Historical.png";
import Mountain from "../../Assets/Mountain.png";
import Skiing from "../../Assets/Skiing.png";
import Tropical from "../../Assets/Tropical.png";
import { Typography } from "@mui/material";

export default function ActivitiesBar(props) {
  const [opacBeach, setOpacBeach] = useState(0.5);
  const [clickOpacBeach, setClickOpacBeach] = useState(false);
  const [hoverOpacBeach, setHoverOpacBeach] = useState(false);
  const [opacCamping, setOpacCamping] = useState(0.5);
  const [clickOpacCamping, setClickOpacCamping] = useState(false);
  const [hoverOpacCamping, setHoverOpacCamping] = useState(false);
  const [opacCastles, setOpacCastles] = useState(0.5);
  const [clickOpacCastles, setClickOpacCastles] = useState(false);
  const [hoverOpacCastles, setHoverOpacCastles] = useState(false);
  const [opacCountryside, setOpacCountryside] = useState(0.5);
  const [clickOpacCountryside, setClickOpacCountryside] = useState(false);
  const [hoverOpacCountryside, setHoverOpacCountryside] = useState(false);
  const [opacDesert, setOpacDesert] = useState(0.5);
  const [clickOpacDesert, setClickOpacDesert] = useState(false);
  const [hoverOpacDesert, setHoverOpacDesert] = useState(false);
  const [opacHistorical, setOpacHistorical] = useState(0.5);
  const [clickOpacHistorical, setClickOpacHistorical] = useState(false);
  const [hoverOpacHistorical, setHoverOpacHistorical] = useState(false);
  const [opacMountain, setOpacMountain] = useState(0.5);
  const [clickOpacMountain, setClickOpacMountain] = useState(false);
  const [hoverOpacMountain, setHoverOpacMountain] = useState(false);
  const [opacSkiing, setOpacSkiing] = useState(0.5);
  const [clickOpacSkiing, setClickOpacSkiing] = useState(false);
  const [hoverOpacSkiing, setHoverOpacSkiing] = useState(false);
  const [opacTropical, setOpacTropical] = useState(0.5);
  const [clickOpacTropical, setClickOpacTropical] = useState(false);
  const [hoverOpacTropical, setHoverOpacTropical] = useState(false);
  const [preferences,setPreferences] = useState([]);

  const onHoverEnter = (hoverFunc, checkClick, func) => {
    if (checkClick){
      hoverFunc(false);
      func(1);
    }else{
      hoverFunc(true);
      func(1);
    }
  };
  const onHoverExit = (hoverFunc, checkClick, func) => {
    if (!checkClick) {
      func(0.5);
    }
  };
  const onClick = (name,checkHover,hoverFunc, func, opac) => {
    if (opac === 1 && checkHover) {
      hoverFunc(true);
      setPreferences([...preferences, name]);
      props.setPref(preferences);
    } else {
      func(0.5);
      hoverFunc(false);
      const updatedArray = preferences.filter(item => item !== name);
      setPreferences(updatedArray);      
      props.setPref(preferences);
    }
  };

  return (
    <Stack direction="column" spacing={1}>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
        Preferences
      </Typography>
      <Stack direction="row" spacing={1}>
        <img
          alt="beach"
          src={Beach}
          style={{ filter: `opacity(${opacBeach})`, marginLeft: "0.5%" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacBeach,clickOpacBeach, setOpacBeach)}
          onMouseLeave={() => onHoverExit(setHoverOpacBeach, clickOpacBeach, setOpacBeach)}
          onClick={() => onClick("Beach",hoverOpacBeach,setClickOpacBeach, setOpacBeach, opacBeach)}
        />{" "}
        <img
          alt="camping"
          src={Camping}
          style={{ filter: `opacity(${opacCamping})`, marginLeft: "6.6%" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacCamping,clickOpacCamping, setOpacCamping)}
          onMouseLeave={() => onHoverExit(setHoverOpacCamping, clickOpacCamping, setOpacCamping)}
          onClick={() => onClick("Camping",hoverOpacCamping,setClickOpacCamping, setOpacCamping, opacCamping)}
        />{" "}
        <img
          alt="castles"
          src={Castles}
          style={{ filter: `opacity(${opacCastles})`, marginLeft: "6.8%" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacCastles,clickOpacCastles, setOpacCastles)}
          onMouseLeave={() => onHoverExit(setHoverOpacCastles, clickOpacCastles, setOpacCastles)}
          onClick={() => onClick("Castles",hoverOpacCastles,setClickOpacCastles, setOpacCastles, opacCastles)}
        />{" "}
        <img
          alt="Countryside"
          src={Countryside}
          style={{ filter: `opacity(${opacCountryside})`, marginLeft: "8%" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacCountryside,clickOpacCountryside, setOpacCountryside)}
          onMouseLeave={() => onHoverExit(setHoverOpacCountryside, clickOpacCountryside, setOpacCountryside)}
          onClick={() => onClick("Countryside",hoverOpacCountryside,setClickOpacCountryside, setOpacCountryside, opacCountryside)}
        />{" "}
        <img
          alt="Desert"
          src={Desert}
          style={{ filter: `opacity(${opacDesert})`, marginLeft: "8.5%" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacDesert,clickOpacDesert, setOpacDesert)}
          onMouseLeave={() => onHoverExit(setHoverOpacDesert, clickOpacDesert, setOpacDesert)}
          onClick={() => onClick("Desert",hoverOpacDesert,setClickOpacDesert, setOpacDesert, opacDesert)}
        />{" "}
        <img
          alt="Historical"
          src={Historical}
          style={{ filter: `opacity(${opacHistorical})`, marginLeft: "6.5%" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacHistorical,clickOpacHistorical, setOpacHistorical)}
          onMouseLeave={() => onHoverExit(setHoverOpacHistorical, clickOpacHistorical, setOpacHistorical)}
          onClick={() => onClick("Histroical",hoverOpacHistorical,setClickOpacHistorical, setOpacHistorical, opacHistorical)}
        />{" "}
        <img
          alt="Mountain"
          src={Mountain}
          style={{ filter: `opacity(${opacMountain})`, marginLeft: "8%" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacMountain,clickOpacMountain, setOpacMountain)}
          onMouseLeave={() => onHoverExit(setHoverOpacMountain, clickOpacMountain, setOpacMountain)}
          onClick={() => onClick("Mountain",hoverOpacMountain,setClickOpacMountain, setOpacMountain, opacMountain)}
        />
        <img
          alt="Skiing"
          src={Skiing}
          style={{ filter: `opacity(${opacSkiing})`, marginLeft: "6.5%" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacSkiing,clickOpacSkiing, setOpacSkiing)}
          onMouseLeave={() => onHoverExit(setHoverOpacSkiing, clickOpacSkiing, setOpacSkiing)}
          onClick={() => onClick("Skiing",hoverOpacSkiing,setClickOpacSkiing, setOpacSkiing, opacSkiing)}
        />{" "}
        <img
          alt="Tropical"
          src={Tropical}
          style={{ filter: `opacity(${opacTropical})`, marginLeft: "6%" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacTropical,clickOpacTropical, setOpacTropical)}
          onMouseLeave={() => onHoverExit(setHoverOpacTropical, clickOpacTropical, setOpacTropical)}
          onClick={() => onClick("Tropical",hoverOpacTropical,setClickOpacTropical, setOpacTropical, opacTropical)}
        />{" "}
      </Stack>
      <Stack direction="row" spacing={4} sx={{ marginTop: "3%" }}>
        <Typography
          variant="body1"
          sx={{ opacity: `${opacBeach}`, color: "white" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacBeach,clickOpacBeach, setOpacBeach)}
          onMouseLeave={() => onHoverExit(setHoverOpacBeach, clickOpacBeach, setOpacBeach)}
          onClick={() => onClick("Beach",hoverOpacBeach,setClickOpacBeach, setOpacBeach, opacBeach)}
        >
          Beach
        </Typography>
        <Typography
          variant="body1"
          sx={{ opacity: `${opacCamping}`, color: "white" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacCamping,clickOpacCamping, setOpacCamping)}
          onMouseLeave={() => onHoverExit(setHoverOpacCamping, clickOpacCamping, setOpacCamping)}
          onClick={() => onClick("Camping",hoverOpacCamping,setClickOpacCamping, setOpacCamping, opacCamping)}
        >
          Camping
        </Typography>
        <Typography
          variant="body1"
          sx={{ opacity: `${opacCastles}`, color: "white" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacCastles,clickOpacCastles, setOpacCastles)}
          onMouseLeave={() => onHoverExit(setHoverOpacCastles, clickOpacCastles, setOpacCastles)}
          onClick={() => onClick("Castles",hoverOpacCastles,setClickOpacCastles, setOpacCastles, opacCastles)}
        >
          Castles
        </Typography>
        <Typography
          variant="body1"
          sx={{ opacity: `${opacCountryside}`, color: "white" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacCountryside,clickOpacCountryside, setOpacCountryside)}
          onMouseLeave={() => onHoverExit(setHoverOpacCountryside, clickOpacCountryside, setOpacCountryside)}
          onClick={() => onClick("Countryside",hoverOpacCountryside,setClickOpacCountryside, setOpacCountryside, opacCountryside)}
        >
          Countryside
        </Typography>
        <Typography
          variant="body1"
          sx={{ opacity: `${opacDesert}`, color: "white" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacDesert,clickOpacDesert, setOpacDesert)}
          onMouseLeave={() => onHoverExit(setHoverOpacDesert, clickOpacDesert, setOpacDesert)}
          onClick={() => onClick("Desert",hoverOpacDesert,setClickOpacDesert, setOpacDesert, opacDesert)}
        >
          Desert
        </Typography>
        <Typography
          variant="body1"
          sx={{ opacity: `${opacHistorical}`, color: "white" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacHistorical,clickOpacHistorical, setOpacHistorical)}
          onMouseLeave={() => onHoverExit(setHoverOpacHistorical, clickOpacHistorical, setOpacHistorical)}
          onClick={() => onClick("Historical",hoverOpacHistorical,setClickOpacHistorical, setOpacHistorical, opacHistorical)}
        >
          Historical
        </Typography>
        <Typography
          variant="body1"
          sx={{ opacity: `${opacMountain}`, color: "white" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacMountain,clickOpacMountain, setOpacMountain)}
          onMouseLeave={() => onHoverExit(setHoverOpacMountain, clickOpacMountain, setOpacMountain)}
          onClick={() => onClick("Mountain",hoverOpacMountain,setClickOpacMountain, setOpacMountain, opacMountain)}
        >
          Mountain
        </Typography>
        <Typography
          variant="body1"
          sx={{ opacity: `${opacSkiing}`, color: "white" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacSkiing,clickOpacSkiing, setOpacSkiing)}
          onMouseLeave={() => onHoverExit(setHoverOpacSkiing, clickOpacSkiing, setOpacSkiing)}
          onClick={() => onClick("Skiing",hoverOpacSkiing,setClickOpacSkiing, setOpacSkiing, opacSkiing)}
        >
          Skiing
        </Typography>
        <Typography
          variant="body1"
          sx={{ opacity: `${opacTropical}`, color: "white" }}
          className="imgChange"
          onMouseEnter={() => onHoverEnter(setHoverOpacTropical,clickOpacTropical, setOpacTropical)}
          onMouseLeave={() => onHoverExit(setHoverOpacTropical, clickOpacTropical, setOpacTropical)}
          onClick={() => onClick("Tropical",hoverOpacTropical,setClickOpacTropical, setOpacTropical, opacTropical)}
        >
          Tropical
        </Typography>
      </Stack>
    </Stack>
  );
}
