import "./Footer.scss"
import {motion} from "framer-motion";

function Footer() {
    return (
        <footer className="footer">
            <p>Made by Robert Bendick</p>
            <div className="footer-socials">
                <div>
                    <motion.a whileHover={{color: "#64ffda"}} style={{color: "#a8b2d1"}} href="https://github.com/RobbieBendick" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></motion.a>
                </div>
                <div>
                    <motion.a whileHover={{color: "#64ffda"}} style={{color: "#a8b2d1"}} href="https://www.linkedin.com/in/robert-bendick-b71a851b2/" target="_blank" rel="noopener noreferrer"    ><i class="fa-brands fa-linkedin"></i></motion.a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;