import './Home.scss';
import AboutMe from '../AboutMe/AboutMe';
import ProjectSection from '../ProjectSection/ProjectSection';
import Contact from '../Contact/Contact';
import SideSocials from '../SideSocials/SideSocials';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import FadeInDiv from '../FadeInDiv/FadeInDiv';
import LandingPage from '../LandingPage/LandingPage';


function Home() {
  return (
    <>
    <Nav />
    <div className="main">
        <LandingPage />
        <div className="about">
          <FadeInDiv>
              <AboutMe />
          </FadeInDiv>
        </div>
        <ProjectSection />
        <FadeInDiv>
            <Contact />
        </FadeInDiv>
        <SideSocials />
    </div>
    <Footer />
    </>
  );
}

export default Home;
