import React, { useState } from "react";
import "./index.css";
// import Alert from "./Alert";

function TextArea() {
  const [newText, setText] = useState("");
  function Change(e) {
    setText(e.target.value);
  }
  function upperCase() {
    if (newText === "") {
      alert("Please Enter Some Text!");
    } else {
      setText(newText.toUpperCase());
    }
  }
  function lowerCase() {
    if (newText === "") {
      alert("Please Enter Some Text!");
    } else {
      setText(newText.toLowerCase());
    }
  }
  function Capital() {
    if (newText === "") {
      alert("Please Enter Some Text!");
    }
    else if (newText.charAt(0) === newText.charAt(0).toUpperCase()) {
      setText(newText.charAt(0) + newText.substring(1).toLowerCase());
    } else {
      setText(newText.charAt(0).toUpperCase() + newText.slice(1));
    }
  }
  function Copy() {
    if (newText === "") {
      alert("Please Enter Some Text!");
    } else {
      navigator.clipboard.writeText(newText);
      alert("Text Copied: " + newText);
    }
  }
  function clear() {
    let newText = "";
    setText(newText);
  }
  return (
    <>
      <div className="container">
        <h2 id="heading">Type Your Text</h2>

        <textarea
          id="text"
          cols="100"
          rows="20"
          onChange={Change}
          value={newText}
        ></textarea>

        <div className="result">
          <div className="summary">
            <h2>Text Summary</h2>
            <p>Number Of Characters {newText.length}</p>
            <p>Number Of White Spaces: {newText.split(/\s/).length}</p>
            <p>
              Number Of Words{" "}
              {
                newText.split(/\s+/).filter((elem) => {
                  return elem.length !== 0;
                }).length
              }
            </p>
          </div>
          <div className="function">
            <button id="upperCase" className="my-btn" onClick={upperCase}>
              Convert To UpperCase
            </button>
            <button id="lowerCase" className="my-btn" onClick={lowerCase}>
              Convert To LowerCase
            </button>
            <button id="Capital" className="my-btn" onClick={Capital}>
              Convert To Capital
            </button>
            <div>
              <button id="copy" className="my-btn" onClick={Copy}>
                Copy Text
              </button>
              <button id="clear" className="my-btn" onClick={clear}>
                Clear
              </button>
            </div>
          </div>
        </div>

      </div>


    </>
  );
}

export default TextArea;
