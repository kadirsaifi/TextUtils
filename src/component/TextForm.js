import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handelChnageEvent = (e) => {
    setText(e.target.value);
  };
  const HandelUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const HandelLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handelClear = () => {
    let newText = "";
    setText(newText);
  };
  const handelCopy = () => {
    var textcopy = document.getElementById("myBox");
    textcopy.select();
    navigator.clipboard.writeText(textcopy.value);
  };
  const handelExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const bootstrapColors = {
    primary: "#0d6efd",
    secondary: "#6c757d",
    success: "#198754",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#0dcaf0",
    light: "#f8f9fa",
    dark: "#212529",
  };
  //   const handelSentence=()=>{
  //     let newText = text
  //   };

  const [text, setText] = useState("Enter Text Here!");

  return (
    <>
      <div className="container my-3">
        <h1>{props.headding}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelChnageEvent}
            style={{
              backgroundColor: bootstrapColors[props.mode] 
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={HandelUpperCase}>
          Click Upper Case
        </button>
        <button className="btn btn-primary mx-3" onClick={HandelLowerCase}>
          Click Lower Case
        </button>
        <button className="btn btn-primary" onClick={handelClear}>
          Clear
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handelCopy}>
          Copy
        </button>
        <button className="btn btn-primary" onClick={handelExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
