import React from 'react'

function AddItem() {
    return (
        <div>
        <div className= "labels">
        <label>
            Name:
            <input type="text" name="name"  />
        </label>
        <label>
            Image-URL:
            <input type="text" name="name"  />
        </label>
        <label>
           ID
            <input type="text" name="name" />
        </label>
        <label>
            Amount:
            <input type="text" name="name"  />
        </label>
        </div>
        <button type="submit"> POST..</button>
        </div>
    )
}

export default AddItem
