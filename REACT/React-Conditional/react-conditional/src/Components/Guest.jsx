import React, { useState } from "react";
import "./Guest.css";

const Guest = () => {
  return <></>;
};

export default Guest;

function Recipe({ drinkers }) {
  const [value, setValue] = useState("");

  const update = () => {
    let values = document.querySelector("input").value;

    setValue(values);
  };

   const [value1, setValue1] = useState("");

   const update1 = () => {
     let values = document.querySelector("input").value;

     setValue1(values);
   };

  

  return (
    <div>
      <section className="main">
        <input type="number" className="Guest" placeholder="Enter The Guste" />
        <button className="Chai-button " onClick={update}>
          Chai
        </button>
        <button className="Coffee-button" onClick={update1}>
          Coffee
        </button>
      </section>

      <section className="chai flex justify-around">
        <section className="Chai-show">
          <h1 className="text-4xl bg-black text-white text-center">Chai</h1>
          <ol>
            <li>Boil {value} cups of water.</li>
            <li>
              Add {value} spoons of tea and {0.5 * value} spoons of spice.
            </li>
            <li>Add {value} cups of milk to boil and sugar to taste.</li>
          </ol>
        </section>
        <section className="Chai-show">
          <h1 className="text-4xl bg-black text-white text-center">Coffee</h1>
          <ol>
            <li>Boil {value1} cups of water.</li>
            <li>
              Add {0.9 * value1} spoons of tea and {1.5 * value1} spoons of spice.
            </li>
            <li>Add {value1} cups of milk to boil and sugar to taste.</li>
          </ol>
        </section>
      </section>
    </div>
  );
}





export function Coffee() {
  return (
    <section>
      <Recipe />
    </section>
  );
}
