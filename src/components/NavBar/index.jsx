import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">YourShop</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li >
                            <Link to="/category/electronics">Electronics</Link>
                        </li>
                        <li >
                            <Link to="/category/jewelery">Jewelery</Link>
                        </li>
                        <li>
                            <Link to="/category/Help">Help</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <CartWidget/>
    </div>
)
}
//             <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li >
//                             <Link to="/category/Sales">Sales</Link>
//                         </li>
//                         <li >
//                             <Link to="/category/Whats new">Whats New</Link>
//                         </li>
//                         <li>
//                             <Link to="/category/Help">Help</Link>
//                         </li>
//             <CartWidget/>
//         </ul>
//     )
// }

export default NavBar;