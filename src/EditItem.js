import React from 'react'
import { useHistory } from "react-router-dom";
import useFetch from './useFetch';
import { useState } from 'react';
function EditItem() {
  const { data, error, isPending } = useFetch('http://localhost:8000/items/');
console.log(data);
  const [name, setName] = useState('');
  const [src, setSrc] = useState('');
  const [quantity, setQuantity] = useState('');
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data2 = { name, src, quantity };

    fetch('http://localhost:8000/items/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data2)
    }).then(() => {
      history.push('/');
      
    })
  }


  
  return (
    <div>{
       data && (
         <>
        {console.log('b')}
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
            <label>ID:</label>
            <input
              type="text"

              placeholder={data.id}
              readOnly
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
      </>
      )}

    </div>

  );

}


export default EditItem
