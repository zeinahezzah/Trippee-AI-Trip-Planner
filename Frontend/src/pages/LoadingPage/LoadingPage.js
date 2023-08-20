import * as React from "react";
import "./LoadingPage.css";

const LoadingPage = (props) => {
  return (
    <div className="fullSize">
      <div class="loader">
        <div class="plane">
          <img
            src="https://zupimages.net/up/19/34/4820.gif"
            class="plane-img"
          />
        </div>
        <div class="earth-wrapper">
          <div class="earth"></div>
        </div>
        <div class="wait">
          Channeling our inner Sherlock Holmes, take a breather and enjoy the
          suspenseful wait! <br />
          Due to high volumes this might take longer than usual (up tp 5mins)
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
