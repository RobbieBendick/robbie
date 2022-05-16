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


    /* Set the width of the side navigation to 250px or 0px */
    function toggleSidebar() {
        if (navIsOpen) {
            setNavIsOpen(false);
            nav.style.width = "0";
        } else {
            setNavIsOpen(true);
            nav.style.width = sidebarWidth;
        }
    }

    function closeSidebar() {
        setNavIsOpen(false);
        nav.style.width = "0";
    }

    let menuRef = useRef();
    let menuToggleButtonRef = useRef();

    // "click-out" of dropdown
    useEffect(() => {
        document.addEventListener('mousedown', event => {
            if (!menuRef.current.contains(event.target) && !menuToggleButtonRef.current.contains(event.target)) {
                closeSidebar();
                showNav();
            }
        })
    });

    function AnchorItem({txt, href}) {
        return (
            <li>
                <a onClick={closeSidebar} href={href}>{txt}</a>
            </li>
        )
    }
    function hideNav() {
        $("#navbar").removeClass("is-visible").addClass("is-hidden");
    }
    
    function showNav() {
        $("#navbar").removeClass("is-hidden").addClass("is-visible sticky");
    }

    useEffect(() => {
        $(document).ready(function() {

            var previousScroll = 0;
          
            $(window).scroll(function() {
          
              var currentScroll = $(this).scrollTop();
          
              // If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
              if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
                // If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
                if (currentScroll > previousScroll) {
                  window.setTimeout(hideNav, 50);

                  // Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
                } else {
                    window.setTimeout(showNav, 50);
                }
          
                // Set the previous scroll value equal to the current scroll.
                previousScroll = currentScroll;
              }
          
            });
          
    })
})

useEffect(() => {
    if (navIsOpen) {
        document.body.style.overflow = "hidden";
        $("#root > *:not(aside)").css({"filter": "blur(4px)"});
    } else {
        document.body.style.overflow = "inherit";
        $("#root > *:not(aside)").css({"filter": "none"});
    }
}, [navIsOpen])


    return (
        <>
            <aside ref={menuRef} id="mySidenav" class="sidenav">
                <a className="closebtn" onClick={() => {
                    closeSidebar();
                    showNav();
                }}>&times;</a>
                <AnchorItem txt="About" href="#about"/>
                <AnchorItem txt="Projects" href="#projects"/>
                <AnchorItem txt="Contact" href="#contact"/>
                <a href="/resume" target="_blank" rel="noopener noreferrer">Resume</a>
            </aside>
         
            <nav id="navbar" class="navbar navbar-light sticky">
                <a class="navbar-brand" href="/">R</a>
                <div class="" id="navbarNav">
                        {windowSize.width < 800 ?
                        <button class='nav-btn' ref={menuToggleButtonRef} onClick={() => {
                            toggleSidebar();
                            hideNav();
                        }}><i class="fa-solid fa-bars"></i></button>
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