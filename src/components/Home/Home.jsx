import './Home.scss';
import {motion} from "framer-motion";
import AboutMe from '../AboutMe/AboutMe';
import ProjectSection from '../ProjectSection/ProjectSection';
import Contact from '../Contact/Contact';
import SideSocials from '../SideSocials/SideSocials';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

function Home() {

  return (
    <>
    <Nav />
      <div className="main">
        <div>
            <section className='home'>
                <div>
                    <h1 className="hi" style={{"fontSize": 'clamp(14px,5vw,16px)'}}>Hi, my name is</h1>
                </div>
                <div>
                    <h1 className='big-heading light-slate-color'>Robert Bendick.</h1>
                </div>
                <div>
                    <h3 className='big-heading'>I build things for the web.</h3>
                </div>
                <div>
                    <p className='about-me-header'>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible products which solve real world problems.</p>
                </div>
                <div>
                    <motion.a href="#projects" whileHover={{backgroundColor: "rgb(100, 255, 218, 0.1)"}} className='button-header'>Check out my work! <i class="fa-solid fa-arrow-down" style={{"paddingLeft": "7px", "paddingTop": "50px"}}></i></motion.a>
                </div>
            </section>
        </div>
        <AboutMe />
        <ProjectSection />
        <Contact />
        <SideSocials />
    </div>
    <Footer/>
    </>
  );
}

export default Home;
