import React from 'react'
import Con_3 from './Con_3';


const Con_2 = ( props) => {
  return (
    <div>
      <h1>hey kya hal bhai 2 {props.name}</h1>
      <Con_3 name={props.name} />
    </div>
  );
}

export default Con_2
