import React, { useState } from "react";

function State() {
  const [text, settext] = useState("");
  const handleOnClick = () => {
    if (text == text.toLowerCase()) {
      let newTxt = text.toUpperCase();
      settext(newTxt);
    } else {
      let newTxt = text.toLowerCase();
      settext(newTxt);
    }
  };
  const handleOnChange = (event) => {
    settext(event.target.value);
  };
  const replaceStr = () => {
    let repStr = text.replace("CU", "TU");
    settext(repStr);
  };

  const charatStr = () => {
    let splStr = text.charAt(5);
    settext(splStr);
  };
  const repeatStr = () => {
    let repeStr = text.repeat(3);
    settext(repeStr);
  };

  const handleOnClear = () => {
    let newText = "";
    settext(newText);
  };
  return (
    <div>
      <textarea
        className="form-control"
        value={text}
        id="text-area"
        rows="10"
        onChange={handleOnChange}
      ></textarea>
      <div>
      <button id="text_btn" onClick={handleOnClick}>
        Convert
      </button>
      <button className="btn" id="text_btn" onClick={replaceStr}>
        Replace
      </button>
      <button className="btn" id="text_btn" onClick={handleOnClear}>
        Clear
      </button>
      <button className="btn" id="text_btn" onClick={charatStr}>
        Char At
      </button>
      <button className="btn" id="text_btn" onClick={repeatStr}>
        Repeat
      </button>
      </div>
      <div className="container my-3">
        <p>Number of words written : {text.split("").length}</p>
        <p>No. of letters in sentence written : {text.split("").length}</p>
      </div>
    </div>
  );
}

export default State;
