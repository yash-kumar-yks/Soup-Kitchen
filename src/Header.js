import React from 'react';
import './Header.css'
import BrandLogo from './images/mushroom.png';
import Home from './Home';
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
                <img className="logo_img" src={BrandLogo} alt="Logo" ></img>
                <div className="logo_name">
                    <h2>Soup Kitchen</h2>
                    <h4> Admin Panel</h4>
                </div>
                <button onClick={onclick} type="submit"> View Inventory </button>
                <button onClick={onclick} type="submit"> Add Inventory </button>
            </div>
            <Home />
        </div>
    );
}

export default Header
