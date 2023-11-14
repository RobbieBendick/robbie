import './AboutMe.scss';
import Dog from '../../Assets/dog.jpg';
import FadeInDiv from '../FadeInDiv/FadeInDiv';

function AboutMe() {
  return (
    <FadeInDiv>
      <section id='about' className='about-me-section'>
        <h2 className='numbered-heading'>About Me</h2>
        <div className='inner'>
          <div className='about-left'>
            <div>
              <p>
                Hello! I am Robert, and in 2014, I pursued a career as a
                professional e-sports player, an endeavor that ignited an
                enduring passion for the skillful pursuit of knowledge. My time
                as a professional player has endowed me with a distinctive
                outlook on the required motivation and unwavering commitment it
                takes to hone one's skills.
              </p>
              <p>
                In the present day, my central pursuit lies in the development
                of accessible and inclusive products, as well as the creation of
                innovative digital experiences. I have been fortunate in my
                efforts to have collaborated with adept and insightful
                colleagues who have continually encouraged me to reassess my
                approach when navigating intricate goals.
              </p>
              <p>
                Here are a few technologies I have been working with recently:
              </p>
            </div>
            <ul className='skills-list'>
              <li>TypeScript</li>
              <li>Flutter</li>
              <li>Rust</li>
              <li>Express</li>
              <li>React</li>
              <li>Lua</li>
            </ul>
          </div>
          <div className='about-right'>
            <div className='wrapper'>
              <div className='img-container'>
                <img
                  height='500'
                  width='500'
                  sizes='(min-width: 500px) 500px, 100vw'
                  src={Dog}
                  srcSet=''
                  alt='Headshot'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInDiv>
  );
}

export default AboutMe;
