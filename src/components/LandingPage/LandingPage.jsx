import './LandingPage.scss';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const alternateDeveloperTypes = [
  { text: 'the web', id: 'curb-companion' },
  { text: 'mobile', id: 'curb-companion' },
  { text: 'games', id: 'arenamarker' },
];

function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(170);

  useEffect(() => {
    const currentType = alternateDeveloperTypes[currentIndex];
    const fullText = `${currentType.text}.`;

    if (!isDeleting && displayedText === fullText) {
      // Wait before starting to delete
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50); // Faster when deleting
      }, 2000); // Show full word for 2 seconds

      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && displayedText === '') {
      // Move to next word
      setIsDeleting(false);
      setCurrentIndex(prev => (prev + 1) % alternateDeveloperTypes.length);
      setTypingSpeed(100); // Normal speed when typing
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(prev => prev.slice(0, -1));
      } else {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, typingSpeed]);

  const currentDeveloperType = alternateDeveloperTypes[currentIndex];

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
            <span className='typewriter-container'>
              <motion.a
                onClick={() => {
                  animateToId(currentDeveloperType.id);
                }}
                style={{
                  display: 'inline-block',
                  color: 'hsl(166, 100%, 70%)',
                  minWidth: '120px',
                }}
                className='big-heading alternating'
              >
                {` ${displayedText}`}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  |
                </motion.span>
              </motion.a>
            </span>
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
