import "./Nav.scss"
import React, {useState} from 'react';
import useWindowSize from "../../hooks/useWindowSize";

function Nav() {
    const windowSize = useWindowSize();
    const [navIsOpen, setNavIsOpen] = useState(false);
    let buttons = [];
    if (navIsOpen) {
        buttons.push(<i className="fas fa-minus"></i>);
      } else {
        buttons.push(<i className="fas fa-plus"></i>);
      }

    /* Set the width of the side navigation to 250px or 0px */
    function toggleNav() {
        let nav = document.getElementById("mySidenav");
        if (navIsOpen) {
            setNavIsOpen(false);
            nav.style.width = "0";
        } else {
            setNavIsOpen(true);
            nav.style.width = "250px";
        }
    }
    

    return (
        <>
        <div id="mySidenav" class="sidenav">
            <a href="#" class="closebtn"></a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Resume</a>
            <a href="#">Contact</a>
        </div>
        {windowSize.width < 800 ? <span class='nav-btn' onClick={toggleNav}>{buttons}</span> : null}
        
        <div id="main"></div>
        </>
    )
}

export default Nav;