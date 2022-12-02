import React, { useContext } from 'react'
import CartWidget from "../CartWidget";
import './styles.css';
import { Link } from "react-router-dom";
import { Theme } from "../../contexts/Theme";


const NavBar = () => {
    const {themeColor, setThemeColor} = useContext(Theme)

    const handleChange = (event) => {
        setThemeColor(event.target.value)
    }

    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">YourShop</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul
                        className={themeColor === "light" ? "ul-container" : "ul-container-dark"}
                    >
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
                            <Link to="/category/women's clothing">Clothes</Link>
                        </li>
                        <li>
                            <Link to="/category/Help">Help</Link>
                        </li>
                    </ul>
                    <div className="select-container">
                            <select 
                                value={themeColor} 
                                onChange={handleChange} 
                                className = {themeColor === "dark" ? "theme-select-dark" : "theme-select"}
                            >
                                <option value={'light'}>Light</option>
                                <option value={'dark'}> Dark</option>
                            </select>
                        </div>
                 </div>
             </div>
             <CartWidget/>
         </nav>
     </div>
)
}

export default NavBar;