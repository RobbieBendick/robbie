import "./SideSocials.scss";
import { motion } from 'framer-motion';
import useWindowSize from "../../hooks/useWindowSize";

function SideSocials() {
    const windowSize = useWindowSize();

    return (
        <>
        {windowSize.width > 1200 ? 
        <>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.6}} className="side-socials"  orientation="left">
            <ul>
                <li>
                    <motion.a whileHover={{y: "-2px",color: "#64ffda"}} href="https://github.com/RobbieBendick" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></motion.a>
                </li>
                <li>
                    <motion.a whileHover={{y: "-2px", color: "#64ffda"}} href="https://www.linkedin.com/in/robert-bendick-b71a851b2/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></motion.a>
                </li>
                <li>
                    <motion.a whileHover={{y: "-2px", color: "#64ffda"}} href="mailto:robbiebendick@gmail.com"><i class="fa-solid fa-envelope"></i></motion.a>
                </li>
            </ul>
        </motion.div>
    
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.6}} className="side-email" orientation="right">
            <a href="mailto:robbiebendick@gmail.com" className="rotate">robbiebendick@gmail.com</a>
        </motion.div>
        </>
        : null
        }
        </>
    )
}
export default SideSocials;