import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">HoopsKicks</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Whats New</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default NavBar;