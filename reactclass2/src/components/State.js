import React, { useState } from "react";

function State() {
  const [text, settext] = useState("");
  const handleOnClick = () => {
    let newTxt = text.toUpperCase();
    settext(newTxt);
    console.log(newTxt);
  };
  const handleOnChange = (event) => {
    settext(event.target.value);
  };
  return (
    <div>
      <textarea
        className="form-control"
        value = {text}
        id="text-area"
        rows="10"
        onChange={handleOnChange}
      ></textarea>
      <button id="text_btn" onClick={handleOnClick}>
        Convert
      </button>
    </div>
  );
}

export default State;
