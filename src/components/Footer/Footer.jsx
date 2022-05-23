import "./Footer.scss"
import {motion} from "framer-motion";

function Footer() {
    return (
        <footer className="footer">
                <div className="footer-socials">
                <div>
                    <motion.a whileHover={{color: "#64ffda"}} style={{color: "#a8b2d1"}} href="https://github.com/RobbieBendick" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-xl fa-github"></i></motion.a>
                </div>
                <div>
                    <motion.a whileHover={{y: "-2px", color: "#64ffda"}} href="mailto:robbiebendick@gmail.com"><i class="fa-solid fa-xl fa-envelope"></i></motion.a>
                </div>
                <div>
                    <motion.a whileHover={{color: "#64ffda"}} style={{color: "#a8b2d1"}} href="https://www.linkedin.com/in/robert-bendick-b71a851b2/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-xl fa-linkedin"></i></motion.a>
                </div>
            </div>
            <p>Made by Robert Bendick</p>
        </footer>
    )
}

export default Footer;