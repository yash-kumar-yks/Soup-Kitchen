import React from 'react'
import { useParams } from "react-router-dom";
import AddItemPage from './AddItemPage';
import useFetch from './useFetch';
function AddItem() {
    const { id } = useParams();
    console.log(id);
    const { data, error, isPending } = useFetch('http://localhost:8000/items/' + id);

if(id>0){
    return (
        <div>
            {data && (
                <>
                <AddItemPage name={data.name} src={data.src} id={id} quantity={data.quantity} />
                   
                    <button type="submit"> Update</button>
                </>

            )}

        </div>

    );}

    else{
        return (
            <div>
                {data && (
                    <>
                    <AddItemPage name="" src="" id="" quantity="" />
                        <button type="submit"> Update</button>
                    </>
    
                )}
    
            </div>
    
        );
    }



}

export default AddItem
