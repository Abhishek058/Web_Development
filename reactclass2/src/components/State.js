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
  return (
    <div>
      <textarea
        className="form-control"
        value={text}
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
