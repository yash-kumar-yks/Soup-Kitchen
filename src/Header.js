import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
function Header() {
    let toggle=false;
    
    
    return (
        <div>
            <div className="logo_div">
            <Link to={`/`}>
                <img className="logo_img" src='https://raw.githubusercontent.com/team-soup/soup-kitchen/master/client/src/img/crockpot_logo.png' alt="Logo" ></img>
                </Link>
                                <div className="logo_name">
                    <h2>Soup Kitchen</h2>
                    <h4> Admin Panel</h4>
                </div>
               
                <Link to={`/`}>
                <button className="buttons"  > View Inventory </button>
                </Link>
                <Link to={`/AddItem/`}>
                <button className="buttons" > Add Inventory </button>
                </Link>
               
            </div>
            
        </div>
    );
}

export default Header