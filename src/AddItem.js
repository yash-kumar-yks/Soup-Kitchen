import React from 'react'
import { useParams } from "react-router-dom";
import AddItemPage from './AddItemPage';
import useFetch from './useFetch';
function AddItem() {
    const { id } = useParams();
    const { data: data, error, isPending } = useFetch('http://localhost:8000/items/' + id);
   

        return (
           <div>
                     { data && (
      <>
        <h2>{ data.name }</h2>
       <img src={data.src} alt =""/>
       
      </>
     
    )}
           
           </div>
           
        );

    

}

export default AddItem
