import React from "react";

export default function About({mode}) {
  let myStyle={
    color: mode==='dark'?'white':'black',
    backgroundColor: mode==='dark'?'#0d0739':'white'
  }

  return (
    <>
      <div className="container">
        <div className="accordion" id="accordionExample" style={{...myStyle, padding: 10}}>
          <h1 className="my-3">About Us</h1>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <b>About this website</b>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>Texto</strong> is a text analyzer which helps to manipulate text inputted by the user. It comes with general text analyzing features such as word count, character count and text preview. It also helps in manipulating text by using features such as converting text to upper case, lower case and other cool functions.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <b>About the developer</b>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Hey!! I am Jugal Pumbhadia, developer of <strong>Texto</strong>. I am just a curious person who loves to design and develop websites. Currently, I am learning about full stack development using MongoDB, ExpessJS, React JS and Node.js (MERN Stack). 
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
