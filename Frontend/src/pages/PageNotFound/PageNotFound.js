import * as React from "react";
import "./PageNotFound.scss";
import { useNavigate } from "react-router-dom";

const PageNotFound = (props) => {
  const navigate = useNavigate();
  return (
    <div className="bodyPNF">
      <div class="mars">
        <div
          align="center"
          className="btnPNF"
          onClick={() => {
            navigate("/");
          }}
        >
          <a class="btn-back" href="#">
            Return to Earth (aka. HomePage)
          </a>
        </div>
      </div>
      <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" />
      <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />
      <p class="titlePNF">Oh no!!</p>
      <p class="subtitlePNF">
        Unfortunately <br />{" "}
        {props.description
          ? props.description
          : "An error has occured please try again."}
      </p>

      <img
        src="https://assets.codepen.io/1538474/astronaut.svg"
        class="astronaut"
      />
      <img
        src="https://assets.codepen.io/1538474/spaceship.svg"
        class="spaceship"
      />
    </div>
  );
};

export default PageNotFound;
