import React, { useContext } from 'react'
import CartWidget from "../CartWidget";
import './styles.css';
import { Link } from "react-router-dom";
import { Theme } from "../../contexts/Theme";


const NavBar = () => {

    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">YourShop</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar navbar-expand">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li >
                            <Link to="/category/electronics">Electronics</Link>
                        </li>
                        <li >
                            <Link to="/category/jewelery">Jewelery</Link>
                        </li>
                        <li >
                            <Link to="/category/men's clothing">Clothes</Link>
                        </li>
                        <li>
                            <Link to="/category/Help">Help</Link>
                        </li>
                    </ul>
                 </div>
             </div>
             <CartWidget/>
         </nav>
     </div>
)
}

export default NavBar;