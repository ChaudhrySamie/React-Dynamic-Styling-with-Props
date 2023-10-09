import "./App.css";
import React, { useState } from "react";
import Navbar from "./Comonents/Navbar";
function App() {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("25px");
  const [selectedAlign, setSelectedAlign] = useState("center");
  let change1 = selectedColor;
  let change2 = selectedSize;
  let change3 = selectedAlign;
  const handleSelectColor = (event) => {
    const selectedOptionValue = event.target.value;
    setSelectedColor(selectedOptionValue);
  };
  const handleSelectSize = (event) => {
    const selectedOptionValue = event.target.value;
    setSelectedSize(selectedOptionValue);
  };
  const handleSelectAlign = (event) => {
    const selectedOptionValue = event.target.value;
    setSelectedAlign(selectedOptionValue);
  };
  return (
    <>
      <Navbar
        link={{ link1: "Custom/Web", link2: "Home", link3: "About" }}
        color={change1}
        size={change2}
        align={change3}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <div>
          <label htmlFor="">
            <h6>Select Color</h6>
          </label>
          <select value={selectedColor} onChange={handleSelectColor}>
            <option value="black">DEFAULT</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="grey">Grey</option>
          </select>
        </div>

        <div>
          <label htmlFor="">
            <h6>Select Size</h6>
          </label>
          <select value={selectedSize} onChange={handleSelectSize}>
            <option value="25px">DEFAULT</option>
            <option value="40px">40px</option>
            <option value="60px">60px</option>
          </select>
        </div>

        <div>
          <label htmlFor="">
            <h6>Select Alignment</h6>
          </label>
          <select value={selectedAlign} onChange={handleSelectAlign}>
            <option value="center">DEFAULT</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default App;
