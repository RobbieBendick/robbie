import './LandingPage.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import $ from 'jquery';

function LandingPage() {
  useEffect(() => {
    document.title = 'Robert Bendick';
  }, []);

  const [intervalDelay, setIntervalDuration] = useState(5);
  const initialDeveloperType = { text: 'the web', id: 'curb-companion' };
  const [developerType, setDeveloperType] = useState(initialDeveloperType);

  // alternate landing page text
  useEffect(() => {
    const alternateDeveloperTypes = [
      { text: 'the web', id: 'curb-companion' },
      { text: 'mobile', id: 'curb-companion' },
      { text: 'games', id: 'arenamarker' },
    ];
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % alternateDeveloperTypes.length;
      if (alternateDeveloperTypes[currentIndex])
        setDeveloperType(alternateDeveloperTypes[currentIndex]);
    }, intervalDelay * 1000);

    // clear the interval when the component is unmounted or the effect is cleaned up
    return () => clearInterval(intervalId);
  }, [intervalDelay]);

  const animateToId = id => {
    if (!id) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      console.error(`Element with id '${id}' not found.`);
    }
  };

  return (
    <div>
      <section className='home'>
        <div>
          <h1 className='hi fade-in-6'>Hi, my name is</h1>
        </div>
        <div>
          <h1 className='big-heading light-slate-color fade-in-7'>
            Robert Bendick.
          </h1>
        </div>
        <div>
          <h3 style={{ display: 'inline' }} className='fade-in-8 big-heading'>
            I build things for{' '}
            <AnimatePresence exitBeforeEnter>
              <motion.a
                onClick={() => {
                  animateToId(developerType.id);
                }}
                key={developerType.text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75 }}
                style={{ display: 'inline', color: 'hsl(166, 100%, 70%)' }}
                className='big-heading alternating'
              >
                {` ${developerType.text}.`}
              </motion.a>
            </AnimatePresence>
          </h3>
        </div>
        <div>
          <p className='about-me-header fade-in-9'>
            I am a software engineer specialized in building and designing
            exceptional digital experiences. I am currently focused on building
            accessible products in order to solve real world problems.
          </p>
        </div>
        <div>
          <motion.button
            onClick={() =>
              document
                .querySelector('#featured-projects')
                .scrollIntoView({ behavior: 'smooth' })
            }
            whileFocus={{ backgroundColor: 'rgb(100, 255, 218, 0.1)' }}
            whileHover={{ backgroundColor: 'rgb(100, 255, 218, 0.1)' }}
            className='button-header fade-in-10'
          >
            Check out my work! <i class='fa-solid fa-arrow-down'></i>
          </motion.button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
