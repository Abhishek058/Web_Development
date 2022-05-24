import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

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
      <div>
        <Accordion
        
        defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default State;
