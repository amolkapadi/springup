import React, { useState } from 'react'
import { NavLink } from "react-router-dom"


function Header() {

    const [navbar,setNavbar]=useState(false);

    const changeBackground=()=>{
        if(window.scrollY >= 60){
            setNavbar(true)
        }else{
            setNavbar(false);
        }
    };
    window.addEventListener('scroll',changeBackground)

    
    return (
        <>  
            <header>
              
            <div className='main-text'>
               <h1>Digital Engineering through</h1>
                <h1>Value Driven. <br />Customer Focused.<br /> Learn Thinking!</h1>
               </div>
            </header>
          
            <nav className={navbar ? "navbar navbar-expand-lg navbar-light bg-light fixed-top bg-transparent active " : "navbar navbar-expand-lg navbar-light bg-light fixed-top bg-transparent "}>
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img alt='logo' src="assets/img/SpringupLabs_Logo.png" style={{ height: "30px" }} className='img-fluid' />
                    </NavLink >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="bi bi-bar-chart-steps"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link"  >Model</a >
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id='#services' >Services</a >
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Team</a >
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Locations</a >
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Customer</a >
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" >Contact</NavLink >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;