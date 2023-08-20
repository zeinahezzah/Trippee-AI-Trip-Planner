import * as React from "react";
import "./Carousel.css";

export default function Carousel(props) {
  return (
    <div class="containerCarousel">
      <div class="carousel">
        <div
          class="carousel__face"
          style={{
            backgroundImage: `url(${props.image[0]})`,
          }}
        ></div>
        <div
          class="carousel__face"
          style={{
            backgroundImage: `url(${props.image[1]})`,
          }}
        ></div>
        <div
          class="carousel__face"
          style={{
            backgroundImage: `url(${props.image[2]})`,
          }}
        ></div>
        <div
          class="carousel__face"
          style={{
            backgroundImage: `url(${props.image[3]})`,
          }}
        ></div>
        <div
          class="carousel__face"
          style={{
            backgroundImage: `url(${props.image[4]})`,
          }}
        ></div>
        <div
          class="carousel__face"
          style={{
            backgroundImage: `url(${props.image[5]})`,
          }}
        ></div>
        <div
          class="carousel__face"
          style={{
            backgroundImage: `url(${props.image[6]})`,
          }}
        ></div>
        <div
          class="carousel__face"
          style={{
            backgroundImage: `url(${props.image[7]})`,
          }}
        ></div>
        <div
          class="carousel__face"
          style={{
            backgroundImage: `url(${props.image[8]})`,
          }}
        ></div>
      </div>
    </div>
  );
}
