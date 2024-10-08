import React, { useState } from "react";

const MultipleStates = () => {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(25);
  const [city, setCity] = useState("New York");

  const handleNameChange = (e) => setName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

  return (
    <div>
      <h3>Multiple State Variables</h3>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <label>City: </label>
        <input type="text" value={city} onChange={handleCityChange} />
      </div>
      <div>
        <p>
          My name is {name}, I am {age} City:{city}.
        </p>
      </div>
    </div>
  );
};

export default MultipleStates;
