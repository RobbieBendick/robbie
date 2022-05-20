import "./Nav.scss"
import React, {useState, useRef, useEffect} from 'react';
import { Link } from "react-router-dom";
import $ from "jquery";
import {motion} from "framer-motion";
import mobile from "../../hooks/useCheckMobileScreen";
import SignatureTwo from "../../Assets/SignatureTwo";

function Nav() {
    const isMobile = mobile();
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const sidebarWidth = "min(75vw, 400px)";
    let nav = document.getElementById("mySidenav");

    let env = process.env.NODE_ENV === 'development';

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

    function closeSidebar() {
        setSidebarIsOpen(false);
        nav.style.width = "0";
    }

    function toggleSidebar() {
        if (sidebarIsOpen) {
            setSidebarIsOpen(false);
            nav.style.width = "0";
        } else {
            setSidebarIsOpen(true);
            nav.style.width = sidebarWidth;
        }
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


// blurs everything besides sidebar when sidebar is open
useEffect(() => {
    if (sidebarIsOpen) {
        if (!document.body.style.overflow !== "hidden") return
        document.body.style.overflow = "hidden";
        $("#root > *:not(aside)").css({"filter": "blur(4px)"});
    } else {
        document.body.style.overflow = "inherit";
        $("#root > *:not(aside)").css({"filter": "none"});
    }
}, [sidebarIsOpen])

// closes sidebar if screen was mobile size then switched to desktop
useEffect(() => {
    if (isMobile) {
        // collapse sidebar if previously opened
        if (document.body.style.overflow === "hidden") {
            document.body.style.overflow = "inherit";
        }
        $("#root > *:not(aside)").css({"filter": "none"});
        $(".sidenav").width(0);        
    }
}, [isMobile])

useEffect(() => {
    if ($(window).scrollTop() === 0) showNav();
})

function SidebarAnchorItem({txt, href}) {
    function smoothScroll() {
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        });
    }
    return (
        <li>
            <button onClick={() => {
                smoothScroll()
                closeSidebar();
            }
                }>{txt}</button>
        </li>
    )
}

function NavAnchorItem({txt, delay}) {
    let href = `#${txt.toLowerCase()}`;

    function smoothScroll() {
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        });
    }
    return (
        <motion.li initial={{ x: "10px", y:"-25px", opacity: 0 }} animate={{ y:0, x:0, opacity:1, }} transition={{delay: delay, duration: 0.4}}  className="nav-item">
            <button class="nav-link" onClick={smoothScroll}>{txt}</button>
        </motion.li>
        )
}
    return (
        <>
            <aside ref={menuRef} id="mySidenav" class="sidenav">
                <button className="closebtn" onClick={() => {
                    closeSidebar();
                    showNav();
                }}>
                    &times;
                </button>
                <ol>
                    <SidebarAnchorItem txt="About" href="#about"/>
                    <SidebarAnchorItem txt="Projects" href="#projects"/>
                    <SidebarAnchorItem txt="Contact" href="#contact"/>
                </ol>
                <motion.a href={`${process.env.PUBLIC_URL}/#/resume`} target="_blank" whileHover={{backgroundColor: "hsl(166, 100%, 70% / 0.1)"}} className="sidebar-resume-button" rel="noopener noreferrer">Resume</motion.a>
            </aside>
         
            <nav id="navbar" class="navbar navbar-light sticky">
                <button class="navbar-brand" onClick={() => window.scrollTo(0,0)}>
                    <SignatureTwo />
                </button>
                <div class="" id="navbarNav">
                        {isMobile ?
                        <button class='nav-btn' ref={menuToggleButtonRef} onClick={() => {
                            toggleSidebar();
                            hideNav();
                        }}><i class="fa-solid fa-bars"></i></button>
                        :
                        <ol class="navbar-nav ml-auto">
                            <NavAnchorItem txt="About" delay={0.1} />
                            <NavAnchorItem txt="Projects" delay={0.2} />
                            <NavAnchorItem txt="Contact" delay={0.3} />
                            <motion.a href={`${process.env.PUBLIC_URL}/#/resume`} whileHover={{backgroundColor: "hsl(166, 100%, 70% / 0.1)"}} initial={{ x: "10px", y:"-25px", opacity: 0 }} animate={{ y: 0, x: 0, opacity: 1, }} transition={{ delay: 0.4, duration:0.4 }} className="resume-button" target="_blank" rel="noopener noreferrer">Resume</motion.a>
                        </ol>
                        }
                </div>
            </nav>
        </>
    )
}

export default Nav;