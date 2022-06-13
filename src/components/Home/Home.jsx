import './Home.scss';
import AboutMe from '../AboutMe/AboutMe';
import ProjectSection from '../ProjectSection/ProjectSection';
import Contact from '../Contact/Contact';
import SideSocials from '../SideSocials/SideSocials';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';


function Home() {
  return (
    <>
    <Nav />
    <div className="main">
      <LandingPage />
      <AboutMe />
      <ProjectSection />
      <Contact />
    </div>
    <SideSocials />
    <Footer />
    </>
  );
}

export default Home;
