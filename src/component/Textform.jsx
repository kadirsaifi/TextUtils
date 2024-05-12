import React, { useState } from "react";

export default function Textform (props) {
  const onclickevent = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const changeevent = (event) => {
    setText(event.target.value);
  };
  const handelclear=()=>{
    setText("");
  }
  const lowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handelCopy=()=>{
    var text = document.getElementById("Boxclass");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handelremoveextraspace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const [text, setText] = useState("");
  return (
    <>
    <div className="conatiner" style={{color: props.mode==='light'?'black':'white'}}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="Boxclass" onChange={changeevent} style={{backgroundColor: props.mode==='light'?'White':'#0a3d62',color:props.mode==='light'?'black':'white'}} value={text} rows="8" 
         placeholder="Enter Text.."></textarea>
        <button
          type="button" className="btn btn-warning my-2" onClick={onclickevent}>{props.button}</button>
        <button
          type="button" className="btn btn-warning my-3 mx-1" onClick={lowercase}>{props.lowercase}
        </button>
        <button
          type="button" className="btn btn-warning my-3 mx-1" onClick={handelclear}>{props.clear}
        </button>
        <button
          type="button" className="btn btn-warning my-3 mx-1" onClick={handelCopy}>{props.copy}
        </button>
        <button
          type="button" className="btn btn-warning my-3 mx-1"  onClick={handelremoveextraspace}>Remove Extra Space
        </button>
      </div>
    </div>
    <div className="container"style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Summary of Text</h2>
        <p>{text.split(" ").filter(()=>{return element.length!=0}).length}Words And Charcater{text.length}</p>
        <p>{0.008 * text.split("").length}Minutes Read</p>
        <h3>Privew</h3>
        <h1>Hello everyone</h1>
        <p>{text.length>0?text:"Enter somthingin the textbox above to preview it here !"}</p>
    </div>
    </>
  );
}
