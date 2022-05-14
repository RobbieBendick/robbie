import "./SideSocials.scss";
import { motion } from 'framer-motion';
import useWindowSize from "../../hooks/useWindowSize";

function SideSocials() {
    const windowSize = useWindowSize();

    return (
        <>
        {windowSize.width > 800 ? 
        <>
        <div className="side-socials" orientation="left">
            <ul>
                <li>
                    <motion.button whileHover={{y: "-2px", color: "#64ffda"}} href="https://github.com/RobbieBendick"><i class="fa-brands fa-github"></i></motion.button>
                </li>
                <li>
                    <motion.button whileHover={{y: "-2px", color: "#64ffda"}} href="https://www.linkedin.com/in/robert-bendick-b71a851b2/"><motion.i onHoverEnd={{backgroundColor: "red"}} class="fa-brands fa-linkedin-in"></motion.i></motion.button>
                </li>
                <li>
                    <motion.button whileHover={{y: "-2px", color: "#64ffda"}} href="https://www.linkedin.com/in/robert-bendick-b71a851b2/"><i class="fa-solid fa-envelope"></i></motion.button>
                </li>
            </ul>
        </div>
    
        <div className="side-email" orientation="right">
            <a className="rotate">robbiebendick@gmail.com</a>
        </div>
        </>
        : null
        }
        </>
    )
}
export default SideSocials;