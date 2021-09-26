import React from 'react';
import { useState } from 'react';

function AddItemPage({ name, src, id, quantity }) {
    const [val, setVal] = useState(quantity);
    const increment = () => {
        setVal(val => val + 1);
    }
    const decrement = () => {
        setVal(val => val - 1);
    }
    return (
        <div>
        <div className= "labels">
            <label>
                Name:
                <input type="text" name="name" value={name} />
            </label>
            <label>
                Image-URL:
                <input type="text" name="name" value={src} />
            </label>
            <label>
               ID
                <input type="text" name="name" value={id} />
            </label>
            <label>
                Amount:
                <input type="text" name="name" value={val} />
            </label>
            </div>
            <button onClick={increment} > + </button>
            <button onClick={decrement} > - </button>
        </div>
    )
}

export default AddItemPage
