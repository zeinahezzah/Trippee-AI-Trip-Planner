import React, { useState } from "react";

import "./TextImageFilled.css";

const TextImageFilled = (props) => {
  const [sizeFlag, setSizeFlag] = useState(false);
  const [dontChange, setDontChange] = useState(false);
  const [sizeFlag13, setSizeFlag13] = useState(false);
  console.log(props.name)

  if (hasWordWithMoreThan9Letters(props.name) && !dontChange) {
    if (hasWordWithMoreThan13Letters(props.name)) {
      setSizeFlag13(true);
      setDontChange(true);
    } else {
      setSizeFlag(true);
      setDontChange(true);
    }
  }
  function hasWordWithMoreThan9Letters(text) {
    // Split the text into words using whitespace as the separator
    const words = text.split(/\s+/);

    // Iterate through the words and check if any of them have more than 9 letters
    for (const word of words) {
      if (word.length > 9) {
        return true; // Found a word with more than 9 letters
      }
    }

    // No word with more than 9 letters found
    return false;
  }
  function hasWordWithMoreThan13Letters(text) {
    // Split the text into words using whitespace as the separator
    const words = text.split(/\s+/);

    // Iterate through the words and check if any of them have more than 9 letters
    for (const word of words) {
      if (word.length > 13) {
        return true; // Found a word with more than 9 letters
      }
    }

    // No word with more than 9 letters found
    return false;
  }
  if (sizeFlag) {
    return (
      <body className="bodyTextFilled">
        <div class="containerTI">
          <div
            id="title"
            style={{
              backgroundImage: `url(${props.image})`,
            }}
          >
            <h1 style={{ fontSize: 140 }} className="h1Text">
              {props.name}
            </h1>
          </div>
        </div>
      </body>
    );
  } else {
    if (sizeFlag13) {
      return (
        <body className="bodyTextFilled">
          <div class="containerTI">
            <div
              id="title"
              style={{
                backgroundImage: `url(${props.image})`,
              }}
            >
              <h1 style={{ fontSize: 100 }} className="h1Text">
                {props.name}
              </h1>
            </div>
          </div>
        </body>
      );
    } else {
      return (
        <body className="bodyTextFilled">
          <div class="containerTI">
            <div
              id="title"
              style={{
                backgroundImage: `url(${props.image})`,
              }}
            >
              <h1 className="h1Text">{props.name}</h1>
            </div>
          </div>
        </body>
      );
    }
  }
};

export default TextImageFilled;
