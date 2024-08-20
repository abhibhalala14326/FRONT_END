import { useState } from 'react'

import './App.css'

const baseUrl =
  "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg";
const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
 
  },
};


// const baseUrl =
//   "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg";
// const person = {
//   name: "Gregorio Y. Zara",
//   imageId: "7vQD0fP",
//   imageSize: "s",
//   theme: {
//     backgroundColor: "black",
//     color: "pink",
//   },
// };

function App() {
  


  return (
    <>
      {/* ? ex - 1 */}
      {/* <div class="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p class="summary">
      You can find my thoughts here.
      <br/><br/>
      <b>And <i>pictures</i></b> of scientists!
    </p> */}

      {/* ex - 2 */}

      {/* <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={baseUrl}
          alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div> */}

      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={baseUrl}
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </>
  );
}

export default App
