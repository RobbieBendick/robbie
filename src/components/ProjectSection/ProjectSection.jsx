import './ProjectSection.scss';
import { React, useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import FadeInDiv from '../FadeInDiv/FadeInDiv';
import $ from 'jquery';
import JS_pic from '../../Assets/JavaScript-logo.png';
import PYTHON_pic from '../../Assets/python-logo.png';
import NODE_pic from '../../Assets/node-logo.png';
import LUA_pic from '../../Assets/lua-logo.png';
import FLUTTER_pic from '../../Assets/flutter-logo.png';
import cardDetails from '../../Assets/projects';

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
              {techList.map(tech => (
                <li>{tech}</li>
              ))}
            </ul>
          </footer>
        </div>
      </motion.div>
    </a>
  );
}

let ProjectSection = () => {
  // all filters
  const [filter, setFilter] = useState({
    All: true,
    JS: false,
    Python: false,
    Node: false,
    Lua: false,
    Flutter: false,
  });

  // filter button reference
  let filterButtonRef = useRef();

  // filter dropdown reference
  let filterDropdownRef = useRef();

  // list of filter keys
  let filterKeys = Object.keys(filter);

  // close the filter-dropdown menu if the user clicks outside of it
  useEffect(() => {
    document.addEventListener(
      'mousedown',
      event =>
        !filterButtonRef.current.contains(event.target) &&
        !filterDropdownRef.current.contains(event.target) &&
        closeDropdown()
    );
  });

  // stores the project amount per language
  const [projectAmount, setProjectAmount] = useState({
    All: cardDetails.length,
    JS: 0,
    Python: 0,
    Node: 0,
    Lua: 0,
    Flutter: 0,
  });

  // shows and hides cards based on filter
  let filterHandler = language => {
    let anchors = $('.project-card');
    // adding invis to all cards to allow them to appear at the same time
    for (let i = 0; i < anchors.length; i++) {
      let anchor = anchors[i];
      if (!anchor.parentElement.classList.contains('invis'))
        anchor.parentElement.classList.add('invis');
    }

    // timeout allows all cards to appear at the same time
    setTimeout(() => {
      for (let i = 0; i < anchors.length; i++) {
        let anchor = anchors[i];

        if (anchor.classList.contains(language))
          anchor.parentElement.classList.remove('invis');
        else anchor.parentElement.classList.add('invis');

        if (language === 'All') anchor.parentElement.classList.remove('invis');
      }
    }, 20);
  };

  // toggles filter dropdown
  let showFilterDropdown = () =>
    document.getElementById('filterDropdown').classList.toggle('show-instant');

  // closes filter-dropdown
  let closeDropdown = () =>
    $('.dropdown-content').hasClass('show-instant') &&
    $('.dropdown-content').removeClass('show-instant');

  // sets the state of the current filter
  let stateHandler = language => {
    // set all filters to false
    let filter = {
      All: false,
      JS: false,
      Python: false,
      Node: false,
      Lua: false,
      Flutter: false,
    };

    // set the clicked filter to true
    filter[language] = true;

    // set the state
    setFilter(filter);

    // close the dropdown
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
  if (projectAmount.JS === 0 && cardDetails.length > 0) {
    for (let i = 0; i < cardDetails.length; i++) {
      const card = cardDetails[i];
      // traverse through filter keys and increment each project with a its associated techTag
      for (let key of filterKeys)
        if (card.techTag.split(' ').includes(key)) projectAmount[key]++;
    }
  }

  let languageImages = [JS_pic, PYTHON_pic, NODE_pic, LUA_pic, FLUTTER_pic];
  return (
    <section id='projects' className='project-section'>
      <FadeInDiv fadeInClass={2}>
        <div className='projects'>
          <p className='numbered-heading-projects'>Projects</p>
        </div>
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
              {languageImages.map(image => (
                <img
                  width='12'
                  height='12'
                  src={image}
                  alt='Programming Language Icon'
                  onClick={() => filterLinkOnClickHandler('All')}
                />
              ))}
            </div>
            {filterKeys.map(language => (
              <motion.button
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
        <p className='filtering light-slate-color'>{findFilteredLanguage()}</p>
      </div>
      <ul className='projects-grid'>
        {cardDetails.map(v => (
          <FadeInDiv fadeInClass={2}>
            <ProjectCard
              key={v.title}
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
  );
};

export default ProjectSection;
