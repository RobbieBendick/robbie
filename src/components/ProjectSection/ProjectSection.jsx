import './ProjectSection.scss';
import { React, useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import FadeInDiv from '../FadeInDiv/FadeInDiv';
import $ from 'jquery';
import JS_pic from '../../Assets/JavaScript-logo.png';
import PYTHON_pic from '../../Assets/python-logo.png';
import FLUTTER_pic from '../../Assets/flutter-logo.png';
import LUA_pic from '../../Assets/lua-logo.png';
import Dog from '../../Assets/dog.jpg';
import {
  featuredProjectDetails,
  nonFeaturedProjectDetails,
} from '../../Assets/projects';

function ProjectCard({
  title,
  description,
  techList,
  githubSrc,
  externalSrc,
  techTag,
}) {
  return (
    <a
      className={`${techTag} project-card`}
      href={externalSrc || githubSrc}
      target='_blank'
      rel='noopener noreferrer'
    >
      <motion.div whileHover={{ y: '-5px' }} className='project-inner'>
        <div className='card'>
          <header>
            <div className='card-body'>
              <div className='project-top'>
                <div className='project-folder'>
                  <span>
                    {' '}
                    <i class='fa-regular fa-folder fa-xl'></i>{' '}
                  </span>
                </div>
                <div className='project-links'>
                  {githubSrc && (
                    <motion.a
                      href={githubSrc}
                      whileFocus={{ y: '-2px', color: '#64ffda' }}
                      whileHover={{ y: '-2px', color: '#64ffda' }}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i class='fa-brands fa-github fa-sm'></i>
                    </motion.a>
                  )}
                  {externalSrc && (
                    <motion.a
                      href={externalSrc}
                      whileFocus={{ y: '-2px', color: '#64ffda' }}
                      whileHover={{ y: '-2px', color: '#64ffda' }}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i class='fa-solid fa-arrow-up-right-from-square fa-sm'></i>
                    </motion.a>
                  )}
                </div>
              </div>
              <h5 className='card-title'>{title}</h5>
              <p className='card-text'>{description}</p>
            </div>
          </header>
          <footer>
            <ul className='project-tech-list'>
              {techList.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </footer>
        </div>
      </motion.div>
    </a>
  );
}

let FeaturedProjectCard = ({ project }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  const options = {
    root: null,
    threshold: 0.35,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In this case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:
        if (domRef.current) {
          observer.unobserve(domRef.current);
        }
      }
    }, options);

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);
  return (
    <motion.li
      className={`featured-project-card ${isVisible ? 'fade-in-2' : 'hide'}`}
      id={project.id && project.id}
      ref={domRef}
    >
      <div className='featured-project-content'>
        <div>
          <p className='featured-project-text'>Featured Project</p>
          <a
            target='_blank'
            rel='noreferrer'
            href={project.externalSrc || project.githubSrc}
          >
            <h3 className='featured-project-title'>{project.title}</h3>
          </a>
          <div className='featured-project-description'>
            <p>{project.description}</p>
          </div>
          <ul className='featured-project-tech-list'>
            {project.techList.length > 0 &&
              project.techList.map((techName, index) => {
                return <li key={index}>{techName}</li>;
              })}
          </ul>
          <div className='featured-project-links'>
            {project.githubSrc && (
              <motion.a
                href={project.githubSrc}
                whileFocus={{ y: '-2px', color: '#64ffda' }}
                whileHover={{ y: '-2px', color: '#64ffda' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i class='fa-brands fa-github fa-md'></i>
              </motion.a>
            )}
            {project.externalSrc && (
              <motion.a
                href={project.externalSrc}
                whileFocus={{ y: '-2px', color: '#64ffda' }}
                whileHover={{ y: '-2px', color: '#64ffda' }}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i class='fa-solid fa-arrow-up-right-from-square fa-md'></i>
              </motion.a>
            )}
          </div>
        </div>
      </div>
      <div className='featured-project-image'>
        <div className='featured-project-image-wrapper'>
          <a
            href={project.externalSrc || project.githubSrc}
            rel='noreferrer'
            target='_blank'
            style={{
              backgroundColor: 'hsl(166, 100%, 70%)',
              width: '100%',
              height: '100%',
              display: 'block',
              position: 'relative',
            }}
          >
            <img
              width={'100%'}
              height={'100%'}
              src={project.image || Dog}
              alt='Featured Project'
            />
          </a>
        </div>
      </div>
    </motion.li>
  );
};

let FeaturedProjectSection = () => {
  return (
    <section id='featured-projects'>
      <FadeInDiv>
        <h3
          style={{ marginBottom: '50px' }}
          className='numbered-heading-projects'
        >
          Some Things I’ve Built
        </h3>
      </FadeInDiv>
      <ul>
        {featuredProjectDetails.length > 0 &&
          featuredProjectDetails.map((project, index) => (
            <FeaturedProjectCard key={project.id || index} project={project} />
          ))}
      </ul>
    </section>
  );
};

let ProjectSection = () => {
  const [filter, setFilter] = useState({
    All: true,
    JS: false,
    Python: false,
    Flutter: false,
    Lua: false,
  });

  let filterButtonRef = useRef();
  let filterDropdownRef = useRef();

  let filterKeys = Object.keys(filter);

  // close the filter-dropdown menu if the user clicks outside of it
  useEffect(() => {
    document.addEventListener('mousedown', event => {
      if (
        filterButtonRef.current &&
        filterDropdownRef.current &&
        !filterButtonRef.current.contains(event.target) &&
        !filterDropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    });
  });

  // stores the project amount per language
  const [projectAmount, setProjectAmount] = useState({
    All: nonFeaturedProjectDetails.length,
    JS: 0,
    Python: 0,
    Flutter: 0,
    Lua: 0,
  });

  // shows and hides cards based on filter
  let filterHandler = language => {
    let cards = $('.project-card');
    // adding invis to all cards to allow them to appear at the same time
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      if (!card.parentElement.classList.contains('invis'))
        card.parentElement.classList.add('invis');
    }

    // timeout allows all cards to appear at the same time
    setTimeout(() => {
      for (let i = 0; i < cards.length; i++) {
        let card = cards[i];

        if (card.classList.contains(language))
          card.parentElement.classList.remove('invis');
        else card.parentElement.classList.add('invis');

        if (language === 'All') card.parentElement.classList.remove('invis');
      }
    }, 20);
  };

  // toggles filter dropdown
  let showFilterDropdown = () =>
    document.getElementById('filterDropdown').classList.toggle('show-instant');

  // closes filter dropdown
  let closeDropdown = () =>
    $('.dropdown-content').hasClass('show-instant') &&
    $('.dropdown-content').removeClass('show-instant');

  // sets the state of the current filter
  let stateHandler = language => {
    // reset all filters to false
    let filter = {
      All: false,
      JS: false,
      Python: false,
      Flutter: false,
      Lua: false,
    };

    filter[language] = true;
    setFilter(filter);
    closeDropdown();
  };

  // returns a check mark string to place next to the clicked filter
  let checkHandler = language => {
    let str = '';
    for (let key of filterKeys)
      if (language === key) if (filter[key]) str = '✓';
    return str;
  };

  // return a string of the current filtered language
  let findFilteredLanguage = () => {
    let str = '';
    for (let key of filterKeys)
      if (key !== 'All') if (filter[key]) str = `Filter: ${key}`;
    return str;
  };

  // returns a string of the number of projects per language
  let projectsPerLanguage = language => {
    for (let key of filterKeys)
      if (key === language) return `(${projectAmount[key]})`;
  };

  let filterLinkOnClickHandler = language => {
    // dont allow reclick if alrdy activated
    for (let key of filterKeys)
      if (language === key && filter[key]) return closeDropdown();

    filterHandler(language);
    stateHandler(language);
  };

  // sets amount of projects per language
  if (projectAmount.JS === 0 && nonFeaturedProjectDetails.length > 0) {
    for (let i = 0; i < nonFeaturedProjectDetails.length; i++) {
      const card = nonFeaturedProjectDetails[i];
      // traverse through filter keys and increment each project with a its associated techTag
      for (let key of filterKeys)
        if (card.techTag.split(' ').includes(key)) projectAmount[key]++;
    }
  }

  let languageImages = [JS_pic, PYTHON_pic, FLUTTER_pic, LUA_pic];
  return (
    <>
      <FeaturedProjectSection />
      <section id='projects' className='project-section'>
        <FadeInDiv fadeInClass={2}>
          <h3 className='other-noteworthy'>Other Noteworthy Projects</h3>
        </FadeInDiv>
        <div className='container'>
          <div className='dropdown filter-button'>
            <FadeInDiv fadeInClass={2}>
              <motion.button
                whileFocus={{ backgroundColor: 'hsl(166, 100%, 70% / 0.1)' }}
                whileHover={{ backgroundColor: 'hsl(166, 100%, 70% / 0.1)' }}
                onClick={() => showFilterDropdown()}
                ref={filterButtonRef}
                className='dropbtn'
              >
                Filter <i class='fa-solid fa-arrow-down-short-wide'></i>
              </motion.button>
            </FadeInDiv>
            <div
              id='filterDropdown'
              ref={filterDropdownRef}
              className='dropdown-content'
            >
              <div className='language-img-container'>
                {languageImages.map((image, index) => (
                  <img
                    key={index}
                    width='12'
                    height='12'
                    src={image}
                    alt='Programming Language Icon'
                    onClick={() => filterLinkOnClickHandler('All')}
                  />
                ))}
              </div>
              {filterKeys.map((language, index) => (
                <motion.button
                  key={index}
                  whileFocus={{ color: 'hsl(166, 100%, 70%)' }}
                  whileHover={{ color: 'hsl(166, 100%, 70%)' }}
                  name={language}
                  onClick={() => filterLinkOnClickHandler(language)}
                >
                  {language} {projectsPerLanguage(language)}{' '}
                  {checkHandler(language)}
                </motion.button>
              ))}
            </div>
          </div>
          {/* display filter name */}
          <p className='filtering light-slate-color'>
            {findFilteredLanguage()}
          </p>
        </div>
        <ul className='projects-grid'>
          {nonFeaturedProjectDetails.map((v, index) => (
            <FadeInDiv key={v.title || index} fadeInClass={2}>
              <ProjectCard
                title={v.title}
                description={v.description}
                githubSrc={v.githubSrc}
                externalSrc={v.externalSrc}
                techList={v.techList}
                techTag={v.techTag}
              />
            </FadeInDiv>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ProjectSection;
