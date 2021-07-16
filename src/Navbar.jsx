import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-sm navbar-light fixed-top">
                    <div className="container">
                        <NavLink to="/" className="navbar-brand">AV</NavLink>
                        <button className="navbar-toggler"
                            type="button" data-bs-toggle="collapse"
                            data-bs-target="#toggleMobileMenu"
                            aria-controls="toggleMobileMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse design" id="toggleMobileMenu">
                            <ul className="nav navbar-nav ms-auto">
                                <li>
                                    <NavLink activeClassName="menu-active" className="nav-link" exact={true} to="/">home</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="menu-active" className="nav-link" exact={true} to="/about">about</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="menu-active" className="nav-link" exact={true} to="/infographic">Education</NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="menu-active" className="nav-link" exact={true} to="/contact">Contact Me</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;