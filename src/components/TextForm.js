import React, { useState } from "react";

export default function TextForm({ heading, mode, showAlert }) {
  const [wordCount, setWordCount] = useState(0);
  const [text, setText] = useState("");
  const handleUpClick = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    showAlert(" Text has been converted to Upper Case.","success")
  };
  const handleLowClick = () => {
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    showAlert(" Text has been converted to Lower Case.","success")

  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleCopy = async () => {
    const textBoxContent = document.getElementById("textBox").innerHTML;
    try {
      await navigator.clipboard.writeText(textBoxContent);
    showAlert(" Text has been copied to clipboard.","success")
      
    } catch (error) {
      console.log(error);
    }
  };
  const removeSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert(" Extra spaces have been removed.","success")

  };
  const countCharacters=(str)=>{
    return str.length;
  }
  const countWords = (str) => {
    if (str.length === 0) {
      return wordCount;
    } else {
      return str.split(/\s+/).filter((element)=>{return element.length!==0}).length;
    }
  };
  const initalLetterCapital = () => {
    const newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    const updatedText = newText.join(" ");
    setText(updatedText);
    showAlert(" Initial letters have been capitalised.","success")

  };

  const resetButtonAction = () => {
    setText("");
    setWordCount(0);
    showAlert(" Textbox has been reset to empty.","success")
  };
  return (
    <>
      <div className={`container text-${mode === "light" ? "dark" : "light"}`}>
        <div className="mb-3">
          <h1 className="my-3">{heading}</h1>
          <textarea
            className="form-control"
            value={text}
            id="textBox"
            rows="8"
            onChange={handleOnChange}
            placeholder="Enter some text here..."
            spellCheck="false"
            style={{
              backgroundColor: mode === "light" ? "white" : "#1e2f54",
              color: mode === "light" ? "#0d0739" : "white",
            }}
          >
          </textarea>
          <div>
            <button className="btn btn-primary mt-4 " onClick={handleUpClick} disabled={text.length===0}>
              Convert to Uppercase
            </button>
            <button
              className="btn btn-primary mt-4 mx-2"
              onClick={handleLowClick}
              disabled={text.length===0}
            >
              Convert to Lowercase
            </button>
            <button className="btn btn-primary mt-4 mx-2" onClick={handleCopy} disabled={text.length===0}>
              Copy to Clipboard
            </button>
            <button className="btn btn-primary mt-4 mx-2" onClick={removeSpace} disabled={text.length===0}>
              Remove Extra Spaces
            </button>
            <button
              className="btn btn-primary mt-4 mx-2"
              onClick={initalLetterCapital}
              disabled={text.length===0}
            >
              Make Initial Letter Capital
            </button>
            <button
              className="btn btn-primary mt-4 mx-2"
              onClick={resetButtonAction}
              disabled={text.length===0}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div
        className={`container my-3 text-${mode === "light" ? "dark" : "light"}`}
      >
        <h2 className="my-3">Text Summary</h2>
        <p>
          There are total <b>{countWords(text)} words </b> in the text
          consisting of <b>{countCharacters(text)} characters</b>.
        </p>
        <p>{(countWords(text) / 160).toFixed(2)} minute(s) read.</p>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
