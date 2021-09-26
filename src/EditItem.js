import React from 'react'
import { useParams } from "react-router-dom";
import AddItemPage from './AddItemPage';
import useFetch from './useFetch';
function AddItem() {
    const { id } = useParams();
    console.log(id);
    const { data, error, isPending } = useFetch('http://localhost:8000/items/' + id);
    {isPending && <h1 >Loading...</h1>}
    { error && <div>{ error }</div> }
    

    return (
        <div>
            {data && (
                <>
                <AddItemPage name={data.name} src={data.src} id={id} quantity={data.quantity} />
                   
                    <button type="submit"> Update</button>
                </>

            )}

        </div>

    );
}

  
    export default AddItem
