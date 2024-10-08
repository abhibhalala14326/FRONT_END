import React from 'react'

const List = () => {
    const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  return (
    <div>
      <div>
        <h3>Item List</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li> 
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List
