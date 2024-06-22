import React, { useState } from "react"

export const TextForm = (props) => {

  // const handleUpCLick = () => {
  //   //console.log("upper case was clicked "+ text)
  //   let newText = up.toUpperCase();
  //   setup(newText);
  // }
  const handleUpCLick = () => {
    //console.log("upper case was clicked "+ text)
    let newText = low.toUpperCase();
    setLow(newText);
  }

  const handlelowClick = () => {
    let newText = low.toLowerCase();
    setLow(newText);
  }

  const handleOnChange = (e) => {
    // console.log("onchange")
    setLow(e.target.value)
  }

  const clear = () => {
    let newText = "";
    setLow(newText);
  }

  const alternateCase = () => {
    let newText = low.split("").map((char, index)=>{
      return index%2===0?char.toUpperCase():char.toLowerCase();
    }).join("");
    setLow(newText);
  };
    

  // const handleChange = (e) => {
  //   // console.log("onchange")
  //   setup(e.target.value)
  // }

  // const [up, setup] = useState("");
  const [low, setLow] = useState("")
  return (
    <div>
      <h1>{props.heading}</h1>
      <>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" value={low} onChange={handleOnChange} rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handlelowClick} >convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleUpCLick} >convert to upper case</button>
        <button className="btn btn-primary mx-2"  onClick={clear}>clear</button>
        <button className="btn btn-primary mx-2" onClick={alternateCase} >AlLtErNaTeUpPeRcAsE</button>

        <div className="container my-2">
          <h2>Your Text summary</h2>
          <p>{low.split(" ").length} words and {low.length} Characters</p>
          <p>{0.008 * low.split(" ").length }Minutes to read</p>
          <h3>Preview</h3>
          <p>{low}</p>
        </div>

      </>

      {/* count words and characters
      <>
        <div className="mb-4">
          <textarea className="form-control" id="myBox" value={up} onChange={handleChange} rows="8" ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpCLick} >convert to upper case</button>
        <div className="container my-2">
          <h1>Your Text summary</h1>
          <p>{up.split(" ").length} Words and {up.length} Characters</p>
          <p>{0.08 * up.split(" ").length} Minutes to read</p>
          <h3>Preview</h3>
          <p>{up}</p>
        </div>
      </> */}

    </div>
  )
}
