import React, {useState} from "react";
import './navbar.css'
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { Link } from "react-router-dom";
// import login from './components/login'

const Navbar = () => {
    const [active ,setActive] = useState("navBar")
    //function to toggle navbar
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }

    //function to  remove toggle navbar
    const removeNavbar = ()=>{
        setActive('navBar ')
    }
    return (
        <section className="navBarSection">
            <header className="header flex">

                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><SiYourtraveldottv className="icon"/>  Travel.</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>

                        <li className="navItem">
                            <Link to="/login" className="navLink">login/registration</Link>
                        </li>

                        <button className="btn">
                            <a href="#">Book Now</a>
                        </button>
                    </ul>
                    <div onClick={removeNavbar} className="closeNevbar">
                            <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                 <div onClick={showNav} className="toggleNavbar">
                            <PiDotsNineBold className="icon"/>
                 </div>
                
            </header>
        </section>
        
    )
}

export default Navbar





