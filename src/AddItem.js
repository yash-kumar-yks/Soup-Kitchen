import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { v4 as uuidv4 } from 'uuid';
  
function AddItem() {

  const [data, dispatch] = useStateValue();
  const [name, setName] = useState('');
  const [src, setSrc] = useState('');
  const [quantity, setQuantity] = useState(0);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
   
   
    dispatch({
      type: 'PUSH',
      item: {
        id:uuidv4(),
        name: name,
        src: src,
        quantity: quantity
      }
    })
    console.log(data);
  }
  console.log(data);
  return (
    <div className="create">
      <h2>Add a New Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Item Name:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Image URL:</label>
        <input 
          type="text" 
          required 
          value={src}
          onChange={(e) => setSrc(e.target.value)}
        />
        <label>Amount:</label>
        <input 
          type="text" 
          required 
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
       
        <button>Add Item</button>
      </form>
    </div>
  );
}
 


export default AddItem