import "./Nav.scss"
import React, {useState, useRef, useEffect} from 'react';
import { Link } from "react-router-dom";
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

    function closeNav() {
        setNavIsOpen(false);
        nav.style.width = "0";
    }

    let menuRef = useRef();
    let menuToggleButtonRef = useRef();

    // "click-out" of dropdown
    useEffect(() => {
        document.addEventListener('mousedown', event => {
            if (!menuRef.current.contains(event.target) && !menuToggleButtonRef.current.contains(event.target)) {
                closeNav();
            }
        })
    });

    function AnchorItem({txt, href}) {
        return (
            <li>
                <a onClick={closeNav} href={href}>{txt}</a>
            </li>
        )
    }

    return (
        <>
            <div ref={menuRef} id="mySidenav" class="sidenav">
                <a href="#" class="closebtn"></a>
                <AnchorItem txt="About" href="#about"/>
                <AnchorItem txt="Projects" href="#projects"/>
                <AnchorItem txt="Contact" href="#contact"/>
                <a href="/resume" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
         
            <nav class="navbar navbar-light">
                <a class="navbar-brand" href="#">R</a>
                <div class="" id="navbarNav">
                        {windowSize.width < 800 ?
                        <button class='nav-btn' ref={menuToggleButtonRef} onClick={toggleNav}>{buttons}</button>
                        :
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#projects">About</a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <motion.a href="/resume" style={{"display": "block"}} whileHover={{backgroundColor: "rgb(100, 255, 218, 0.1)"}} className="resume-button" target="_blank" rel="noopener noreferrer">Resume</motion.a>
                            </li>   
                        </ul>
                        }
                </div>
            </nav>
        </>
    )
}

export default Nav;