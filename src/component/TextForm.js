import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const handelChnageEvent=(e)=>{
        setText(e.target.value)
    }
    const HandelUpperCase=()=>{
        let upperCase = text.toUpperCase();
        setText(upperCase);
    }
    const HandelLowerCase=()=>{
         let loweCase = text.toLowerCase();
         setText(loweCase);
    }

    const [text, setText]= useState("Enter Text Here!")
  return (
    <div>
        <h1>{props.headding}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelChnageEvent} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={HandelUpperCase}>Click Upper Case</button>
        <button className='btn btn-primary mx-3' onClick={HandelLowerCase}>Click Lower Case</button>
    </div>
  )
}
