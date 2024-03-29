import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export const Navbar = () => {
    const handleLogout = () => {
        if (localStorage.getItem("userToken")) {
            localStorage.removeItem("userToken");
            localStorage.removeItem("userName");
            localStorage.removeItem("userEmail");
            window.location = "./Login";
        }
        else {
            window.location.reload(false);
        }
    }
    // const [msg, setMsg] = useState(false);
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src=".\iitLogo.jpg" alt="iit" width="40" height="34" className="d-inline-block align-text-top" />
                        GHM Portal
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Logins
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/Login">User Login</Link></li>
                                    {/* <li><a className="dropdown-item" href="/GuestForm">GuestForm without Routing</a></li> */}
                                    {/* <li><Link className="dropdown-item" to="/">Guest Login</Link></li> */}
                                    <li><Link className="dropdown-item" to="/AdminLogin">Admin Login</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Other Options</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="./Book">Accommodation</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dining
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/">Guest House Kitchen</Link></li>
                                    <li><Link className="dropdown-item" to="/">Main Cafeteria</Link></li>
                                    <li><Link className="dropdown-item" to="/">Outside IIT</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Other Options</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="https://www.iitrpr.ac.in/guest-house">Rules</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">People</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="./Contact">Contact</Link>
                            </li>
                        </ul>
                        {

                            localStorage.getItem("userToken") ?

                                <span span class="navbar-text">
                                    Hello &nbsp; {localStorage.getItem("userName").slice(1, -1)} &nbsp;
                                </span>
                                :
                                <span class="navbar-text">

                                </span>
                        }
                        <form className="form-inline my-2 my-lg-0">
                            <Link to='/Login'>
                                <button type="button" className="btn btn-info  btn-lg" onClick={handleLogout}>{localStorage.getItem('userToken') ? 'Log Out' : 'Log In'}</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav >
        </div >
    )
}
