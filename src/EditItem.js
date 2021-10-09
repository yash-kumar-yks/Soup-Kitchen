import React from 'react'
import { useHistory, useParams} from "react-router-dom";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useStateValue } from './StateProvider';
function EditItem() {
  const { id } = useParams();
 
  
    const [{data}, dispatch] = useStateValue();
    let items=null;
  data.map((data)=>{
    if(data.id==id)
    items=data;
  })
console.log(items);
    const [name, setName] = useState(items.name);
  const [src, setSrc] = useState(items.src);
  const [quantity, setQuantity] = useState((parseInt)(items.quantity));
  const history = useHistory();
  const increment = () => {
    setQuantity(quantity =>quantity + 1);
}
const decrement = () => {
  setQuantity(quantity => quantity - 1);
}
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "DELETE",
      id: id,
  })
  dispatch({
    type: 'PUSH',
    item: {
      id:uuidv4(),
      name: name,
      src: src,
      quantity: quantity
    }
  })


  }


  
  return (
    <div>
      
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
              type="Number"
              required
              value={quantity}

              onChange={(e) => setQuantity(e.target.value)}
            />
          
            <button>Update Item</button>
          </form>
          <button onClick={increment} > + </button>
          <button onClick={decrement} > - </button>
     

    </div>

  );

}


export default EditItem