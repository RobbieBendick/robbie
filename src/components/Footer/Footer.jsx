import "./Footer.scss"
import {motion} from "framer-motion";

function Footer() {
    return (
        <footer className="footer">
            Made by Robert Bendick
            <div className="footer-socials">
                <div>
                    <motion.button whileHover={{color: "#64ffda"}} style={{color: "#a8b2d1"}} href="https://github.com/RobbieBendick"><i class="fa-brands fa-github"></i></motion.button>
                </div>
                <div>
                    <motion.button whileHover={{color: "#64ffda"}} style={{color: "#a8b2d1"}} href="https://www.linkedin.com/in/robert-bendick-b71a851b2/"><i class="fa-brands fa-linkedin"></i></motion.button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;