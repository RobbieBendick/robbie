import "./Footer.scss"
import {motion} from "framer-motion";
import FadeInDiv from "../FadeInDiv/FadeInDiv";

function Footer() {
    let animate = {y: "-2px", color: "#64ffda"};
    return (
        <footer className="footer">
            <FadeInDiv>
                <div className="footer-socials">
                    <div>
                        <motion.a whileFocus={animate} whileHover={animate} href="https://github.com/RobbieBendick" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-xl fa-github"></i></motion.a>
                    </div>
                    <div>
                        <motion.a whileFocus={animate} whileHover={animate} href="mailto:robbiebendick@gmail.com"><i class="fa-solid fa-xl fa-envelope"></i></motion.a>
                    </div>
                    <div>
                        <motion.a whileFocus={animate} whileHover={animate} href="https://www.linkedin.com/in/robert-bendick-7ad/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-xl fa-linkedin"></i></motion.a>
                    </div>
                </div>
            <p>Created by Robert Bendick</p>
            <small class="with-react">(with React)</small>
            </FadeInDiv>
        </footer>
    )
}

export default Footer;