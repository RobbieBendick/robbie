import "./LandingPage.scss";
import {motion} from "framer-motion";
import { useEffect } from "react";

function LandingPage() {
    useEffect(() => {
        document.title = "Robert Bendick";
    }, []);

    return (
        <div>
            <section className='home'>
                <div>
                    <h1 className="hi fade-in-6" style={{"fontSize": 'clamp(14px,5vw,16px)'}}>Hi, my name is</h1>
                </div>
                <div>
                    <h1 className='big-heading light-slate-color fade-in-7'>Robert Bendick.</h1>
                </div>
                <div>
                    <h3 className='big-heading fade-in-8'>I build things for the web.</h3>
                </div>
                <div>
                    <p className='about-me-header fade-in-9'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible products which solve real world problems.</p>
                </div>
                <div>
                    <motion.button onClick={() => document.querySelector("#projects").scrollIntoView({ behavior: "smooth" })} whileFocus={{backgroundColor: "rgb(100, 255, 218, 0.1)"}} whileHover={{backgroundColor: "rgb(100, 255, 218, 0.1)"}} className='button-header fade-in-10'>Check out my work! <i class="fa-solid fa-arrow-down"></i></motion.button>
                </div>
            </section>
        </div>
    )
}

export default LandingPage;