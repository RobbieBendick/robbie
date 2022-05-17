import './Home.scss';
import {motion} from "framer-motion";
import AboutMe from '../AboutMe/AboutMe';
import ProjectSection from '../ProjectSection/ProjectSection';
import Contact from '../Contact/Contact';
import SideSocials from '../SideSocials/SideSocials';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

function Home() {

    // use framer motion to animate the homepage
    // then use intersection viewer later


  return (
    <>
    <Nav />
      <div className="main">
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
                    <p className='about-me-header fade-in-9'>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible products which solve real world problems.</p>
                </div>
                <div>
                    <motion.a href="#projects" whileHover={{backgroundColor: "rgb(100, 255, 218, 0.1)"}} className='button-header fade-in-10'>Check out my work! <i class="fa-solid fa-arrow-down" style={{"paddingLeft": "7px", "paddingTop": "50px"}}></i></motion.a>
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
