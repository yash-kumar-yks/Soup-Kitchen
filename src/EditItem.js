import React from 'react'
import { useHistory, useParams} from "react-router-dom";
import useFetch from './useFetch';
import { useState } from 'react';
function EditItem({data}) {
  const { id } = useParams();
 let item=null;
 data.map((data)=>{
  if(data.id==id)
  item=data;
})
data=item;
console.log(data);
  const [name, setName] = useState(data.name);
  const [src, setSrc] = useState(data.src);
  const [quantity, setQuantity] = useState(data.quantity);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data2 = { name, src, quantity };
    fetch('http://localhost:8000/items/' + id, {
      method: 'DELETE'
    })
    fetch('http://localhost:8000/items/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data2)
    }).then(() => {
      history.push('/');
      //dispatch method='POST'
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

            <button>Edit Item</button>
          </form>
      </>
      )}

    </div>

  );

}


export default EditItem
