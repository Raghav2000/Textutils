import React, { useState } from 'react'
export default function Textform(props) {

  const [text, setText] = useState("Enter text here");

  const handleUpClick = ()=>{
    // console.log("handleUpclick was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = ()=>{
    // console.log("handleLowclick was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClear = ()=>{
    // console.log("handleLowclick was clicked");
    let newText = "";
    setText(newText);
  }

  const handleCopy = ()=>{
    // console.log("Text is copied");
    let text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = ()=>{
    // console.log("Text is copied");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event)=>{
    // console.log("On click");
    setText(event.target.value);
  }

  return (
  <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value = {text} onChange = {handleOnChange} id="box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lower case</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        
    </div>
      <div className="container my-3">
        <h2> Your text summery</h2>
        <p>Words {text.split(" ").length} Letters {text.length}</p>
        <h2>Text Preview</h2>
        <p>{text}</p>
      </div>
  </>
      
    
  )
}
