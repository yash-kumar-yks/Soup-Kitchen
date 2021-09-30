import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
function Header() {
    let toggle=false;
    function onclick(event){
        if(toggle){
        event.target.style.backgroundColor = '#4b829c';
        event.target.style.color='#F1F1F1';
        event.target.style.boxShadow= "0 0 0 0 rgba(0,0,0,.25)";
        toggle=false;}
        else{
        event.target.style.backgroundColor = '#ffffff';
        event.target.style.color='#43D9B8';
        event.target.style.boxShadow= "0 10px 10px -2px rgba(0,0,0,.25)";
        toggle=true;}
    }
    return (
        <div>
            <div className="logo_div">
                <img className="logo_img" src='https://raw.githubusercontent.com/team-soup/soup-kitchen/master/client/src/img/crockpot_logo.png' alt="Logo" ></img>
                <div className="logo_name">
                    <h2>Soup Kitchen</h2>
                    <h4> Admin Panel</h4>
                </div>
               
                <Link to={`/`}>
                <button className="buttons" onClick={onclick} > View Inventory </button>
                </Link>
                <Link to={`/AddItem/`}>
                <button className="buttons" onClick={onclick} > Add Inventory </button>
                </Link>
               
            </div>
            
        </div>
    );
}

export default Header
