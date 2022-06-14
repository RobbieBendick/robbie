import "./Footer.scss"
import {motion} from "framer-motion";

function Footer() {
    return (
        <footer className="footer">
                <div className="footer-socials">
                <div>
                    <motion.a whileFocus={{y: "-2px", color: "#64ffda"}} whileHover={{y: "-2px", color: "#64ffda"}} href="https://github.com/RobbieBendick" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-xl fa-github"></i></motion.a>
                </div>
                <div>
                    <motion.a whileFocus={{y: "-2px", color: "#64ffda"}} whileHover={{y: "-2px", color: "#64ffda"}} href="mailto:robbiebendick@gmail.com"><i class="fa-solid fa-xl fa-envelope"></i></motion.a>
                </div>
                <div>
                    <motion.a whileFocus={{y: "-2px", color: "#64ffda"}} whileHover={{y: "-2px", color: "#64ffda"}} href="https://www.linkedin.com/in/robert-bendick-7ad/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-xl fa-linkedin"></i></motion.a>
                </div>
            </div>
            <p>Created by Robert Bendick</p>
            <small class="with-react">(with React)</small>
        </footer>
    )
}

export default Footer;