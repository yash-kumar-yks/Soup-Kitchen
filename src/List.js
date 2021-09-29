import React from 'react';
import {Link} from 'react-router-dom';
import ShowItem from './ShowItem';
import './List.css';
function List({ data, val }) {
    return (
        <div>
            
            {data && data.map((datas) => {
                
                if(datas.name==val){
                   return(
                   
                    <div  className="list" key={datas.id}>
                    <Link to={`/ShowItem/${datas.id}`}>
                    <img src ={datas.src} key={datas.id} alt=""/>
                    <p> {datas.quantity}</p>
                   </Link>
                    </div>)
            }}
                
        )
        }
       
           
        </div>
    );
}

export default List
