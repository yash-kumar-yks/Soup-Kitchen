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
                    <Link  className='text-link' to={`/ShowItem/${datas.id}`}>
                    <img src ={datas.src} key={datas.id} alt=""/>
                   <div className="text-info">
                    <p> <span> {datas.quantity}</span> kg {datas.name} </p>
                    </div>
                   </Link>
                    </div>)
            }}
                
        )
        }
       
           
        </div>
    );
}

export default List
