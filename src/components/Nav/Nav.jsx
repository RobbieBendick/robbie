import "./Nav.scss"
import React, {useState, useRef, useEffect} from 'react';
import useWindowSize from "../../hooks/useWindowSize";
import $ from "jquery";
import {motion} from "framer-motion";


function Nav() {


    const windowSize = useWindowSize();
    const [navIsOpen, setNavIsOpen] = useState(false);
    const sidebarWidth = "250px";
    let nav = document.getElementById("mySidenav");

    let buttons = [];
    if (navIsOpen) {
        buttons.push(<i className="fas fa-minus"></i>);
      } else {
        buttons.push(<i className="fas fa-plus"></i>);
      }

    /* Set the width of the side navigation to 250px or 0px */
    function toggleNav() {
        if (navIsOpen) {
            setNavIsOpen(false);
            nav.style.width = "0";
        } else {
            setNavIsOpen(true);
            nav.style.width = sidebarWidth;
        }
    }

    let menuRef = useRef();
    let menuToggleButtonRef = useRef();

    // "click-out" of dropdown
    useEffect(() => {
        document.addEventListener('mousedown', event => {
            if (!menuRef.current.contains(event.target) && !menuToggleButtonRef.current.contains(event.target)) {
                setNavIsOpen(false);
                nav.style.width = "0";
                $(".nav-btn")
            }
        })
    });
    return (
        <>
        <div ref={menuRef} id="mySidenav" class="sidenav">
            <a href="#" class="closebtn"></a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
            <a href="#">Resume</a>
        </div>
         
        <>
            <nav class="navbar navbar-light">
                <a class="navbar-brand" href="#">R</a>
                <div class="" id="navbarNav">
                        {windowSize.width < 800 ?
                        <button class='nav-btn' style={{"zIndex": 33}} ref={menuToggleButtonRef} onClick={toggleNav}>{buttons}</button>
                        :
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                <motion.button whileHover={{backgroundColor: "rgb(100, 255, 218, 0.1)"}} className="resume-button">Resume</motion.button>
                            </li>   
                        </ul>
                        }
                </div>
            </nav>
        </>
        
        <div id="main"></div>
        </>
    )
}

export default Nav;