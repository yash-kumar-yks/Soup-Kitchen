import React from 'react';
import {Link} from 'react-router-dom';
import ShowItem from './ShowItem';

function List({ data, val }) {
    return (
        <div>
            
            {data && data.map((datas) => {
                
                if(datas.name==val){
                   return(
                    <div>
                   
                    <img src ={datas.src} key={datas.id} alt=""/>
                    <p> {datas.quantity}</p>
                   
                    </div>)
            }}
                
        )
        }
       
           
        </div>
    );
}

export default List
