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
  const handelClear=()=>{
    let newText ='';
    setText(newText);
  };
  const handelSentence=()=>{

  };

  const [text, setText] = useState("Enter Text Here!");
  return (
    <>
      <div className="container">
        <h1>{props.headding}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelChnageEvent}
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
        <button className="btn btn-primary" onClick={handelClear}>Clear</button>
        <button className="btn btn-primary mx-3" onClick={handelSentence}>Sentence case</button>
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
