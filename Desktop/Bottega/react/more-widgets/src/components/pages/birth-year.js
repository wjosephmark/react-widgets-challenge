import React, { useState } from "react";


export default function BirthYear() {

  const [year, setYear] = useState(2020);

  const [age, setAge] = useState("");

  const handleEquate = () => {
    setYear(year - age);
  };

  const handleReset = () => {
    setYear(2020);
  };
  
  return (
    <div className="app">
      <hr />
      <h1>{year}</h1>
      <div>
        <input
          onChange={(e) => setAge(e.target.value)}
          type="text"
          placeholder="Enter an age"
        />
      </div>
      <button onClick={() => handleEquate()}>Calculate Year of Birth</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}