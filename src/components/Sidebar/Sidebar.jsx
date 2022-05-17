import "./Sidebar.scss";
import {React, useEffect} from "react";

function closeSidebar() {
    setSidebarIsOpen(false);
    nav.style.width = "0";
}

function AnchorItem({txt, href}) {
    return (
        <li>
            <a onClick={closeSidebar} href={href}>{txt}</a>
        </li>
    )
}

// "click-out" of dropdown
useEffect(() => {
    document.addEventListener('mousedown', event => {
        if (!menuRef.current.contains(event.target) && !menuToggleButtonRef.current.contains(event.target)) {
            closeSidebar();
            showNav();
        }
    })
});

function Sidebar() {
    return (
        <aside ref={menuRef} id="mySidenav" class="sidenav">
        <a className="closebtn" onClick={() => {
            closeSidebar();
            showNav();
        }}>
            &times;
        </a>
        <AnchorItem txt="About" href="#about"/>
        <AnchorItem txt="Projects" href="#projects"/>
        <AnchorItem txt="Contact" href="#contact"/>
        <a href="/resume" target="_blank" rel="noopener noreferrer">Resume</a>
    </aside>
    )
}

export default Sidebar;