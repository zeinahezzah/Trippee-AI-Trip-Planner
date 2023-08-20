import * as React from "react";
import "./FlippingCard.css";
import { useNavigate } from "react-router-dom";

export default function FlippingCard(props) {
  const navigate = useNavigate();

  return (
    <div
      class="colFC"
      onTouchstart="this.classList.toggle('hover');"
      onClick={() => {
        navigate("/CityExploration", { state: { cityName: props.city.name } });
      }}
    >
      <div class="containerFC">
        <div
          class="frontFC"
          style={{
            backgroundImage: `url(${props.city.imagesURL[12]})`,
          }}
        >
          <div class="innerFC">
            <p>{props.city.name}</p>
          </div>
        </div>
        <div class="backFC">
          <div class="innerFC">
            <p>
              You are one click away from knowing everthing about this city!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
