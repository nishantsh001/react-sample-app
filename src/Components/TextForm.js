import React, { useState } from "react"

export const TextForm = (props) => {

  const handleUpCLick = () => {
    //console.log("upper case was clicked "+ text)
    let newText = up.toUpperCase();
    setup(newText);
  }

  const handlelowChange = () =>{
    let newText = low.toLowerCase();
    setLow(newText);
  }

  const handleOnChange = (e) => {
   // console.log("onchange")
    setLow(e.target.value)
  }
  
  const handleChange = (e) => {
    // console.log("onchange")
     setup(e.target.value)
   }

  const[up, setup] = useState("ssssssd ");
  const[low, setLow] = useState(" WD")
  return (
    <div>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value = {low} onChange={handleOnChange} rows="8" ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handlelowChange} >convert to lower case</button>
      
      <div className="mb-4">
      <textarea className="form-control" id="myBox" value = {up} onChange={handleChange} rows="8" ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpCLick} >convert to upper case</button> 

    </div>
  )
}
