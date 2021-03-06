import "./ProjectSection.scss";
import {React, useEffect, useState, useRef} from "react";
import {motion} from "framer-motion";
import FadeInDiv from '../FadeInDiv/FadeInDiv';
import $ from "jquery";
import JS_pic from "../../Assets/JavaScript-logo.png";
import PYTHON_pic from "../../Assets/python-logo.png";
import NODE_pic from "../../Assets/node-logo.png"
import LUA_pic from "../../Assets/lua-logo.png";



function ProjectCard({title, description, techList, githubSrc, externalSrc, techTag}) {
    return (
            <a className={`${techTag} project-card`} href={externalSrc || githubSrc} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{y: "-5px" }} className="project-inner">
                    <div className="card">
                        <header>
                            <div className="card-body">
                                <div className="project-top">
                                    <div className="project-folder">
                                        <span> <i class="fa-regular fa-folder fa-xl"></i> </span>
                                    </div>
                                    <div className="project-links">
                                        {githubSrc &&
                                        <motion.a href={githubSrc} whileFocus={{y: "-2px", color: "#64ffda"}} whileHover={{y: "-2px", color: "#64ffda"}} target="_blank" rel="noopener noreferrer">
                                            <i class="fa-brands fa-github fa-sm"></i>
                                        </motion.a>
                                        }
                                        {externalSrc &&
                                        <motion.a href={externalSrc} whileFocus={{y: "-2px", color: "#64ffda"}} whileHover={{y: "-2px", color: "#64ffda"}} target="_blank" rel="noopener noreferrer">
                                            <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
                                        </motion.a>
                                        }
                                    </div>
                                </div>
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                            </div>
                        </header>
                        <footer>
                            <ul className="project-tech-list">
                                {techList.map(tech => <li>{tech}</li>)}
                            </ul>
                        </footer>
                    </div>
                </motion.div>
            </a>
    )
}

let ProjectSection = () => {
    // all filters
    const [filter, setFilter] = useState({
        "All": true,
        "JS": false,
        "Python": false,
        "Node": false,
        "Lua": false,
    });

    // filter button reference
    let filterButtonRef = useRef();

    // filter dropdown reference
    let filterDropdownRef = useRef();

    // list of filter keys
    let filterKeys = Object.keys(filter);

    // all project cards
    const cardDetails = [
        {
            "title": "ArenaMarker",
            "description": "Fully customizable addon that automates tedious UI tasks. 15k+ downloads and currently rank 31 in the world in popularity, among other addons in its respective category.",
            "githubSrc": "https://github.com/RobbieBendick/ArenaMarker",
            "techList": ["Lua"],
            "techTag": "Lua",
        },
        {
            "title": "A* Pathfinding Algorithm",
            "description": "Calculates and visualizes the fastest route from the starting location to the end location while maneuvering around barricades.",
            "githubSrc": "https://github.com/RobbieBendick/a-star-pathfinding",
            "techList": ["Python"],
            "techTag": "Python",
        },
        {
            "title": "Dark Theme",
            "description": "Provides a Dark Theme as part of a customizable UI Addon/Plugin written in Lua.",
            "githubSrc": "https://github.com/RobbieBendick/DarkTheme",
            "techList": ["Lua"],
            "techTag": "Lua",
        },
        {
            "title": "Anon",
            "description": "Plugin/AddOn that color-coordinates unit nameplates, and disguises player and player companion's names.",
            "githubSrc": "https://github.com/RobbieBendick/Anon",
            "techList": ["Lua"],
            "techTag": "Lua",
        },
        {
            "title": "Space Shooter",
            "description": "A minigame where you control a spaceship and can fire bullets to shoot your spaceship opponent.",
            "githubSrc": "https://github.com/RobbieBendick/pygame-shooter",
            "techList": ["Python"],
            "techTag": "Python",
        },
        {
            "title": "Google Keep Clone",
            "description": "A simple Google Keep clone built with React.",
            "githubSrc": "https://github.com/RobbieBendick/note-keeper",
            "externalSrc": "https://robbiebendick.github.io/note-keeper/",
            "techList": ["JS", "React", "CSS"],
            "techTag": "JS React CSS",
        },
        {
            "title": "Simon Clone",
            "description": "Web clone of the game 'Simon'.",
            "githubSrc": "https://github.com/RobbieBendick/memorizing-game",
            "externalSrc": "https://robbiebendick.github.io/memorizing-game/",
            "techList": ["JS", "JQuery", "CSS", "HTML"],
            "techTag": "JS CSS",
        },
        {
            "title": "Tic-Tac-Toe",
            "description": "Simple tic-tac-toe game made with JavaScript.",
            "githubSrc": "https://github.com/RobbieBendick/tic-tac-toe",
            "externalSrc": "https://robbiebendick.github.io/tic-tac-toe/",
            "techList": ["JS", "HTML", "CSS"],
            "techTag": "JS",
        },
        {
            "title": "Blog",
            "description": "Not a personal blog; Blog for proof of concept.",
            "githubSrc": "https://github.com/RobbieBendick/blog",
            "techList": ["JS", "Node", "Express", "MongoDB"],
            "techTag": "JS Node",
        },
        {
            "title": "BigHealthBar",
            "description": "Plugin/AddOn that changes the size, color, texture, and location of the player's and their target frame.",
            "githubSrc": "https://github.com/RobbieBendick/BigHealthbar",
            "techList": ["Lua"],
            "techTag": "Lua",
        },
        {
            "title": "Crown",
            "description": "Fullstack community web app with user accounts, user authentication, forums and 3rd-party API integration.",
            "githubSrc": "https://github.com/matthewdawkins/crownguild",
            "techList": ["JS", "Node", "Express", "MongoDB"],
            "techTag": "JS Node",
        },
        {
            "title": "PartyFrames",
            "description": "Plugin/AddOn to change sizes and colors of default game party frames.",
            "githubSrc": "https://github.com/RobbieBendick/PartyFrames",
            "techList": ["Lua"],
            "techTag": "Lua",
        },
        {
            "title": "Construction",
            "description": "Web app for a construction company to advertise their prices.",
            "githubSrc": "https://github.com/RobbieBendick/brookeban",
            "techList": ["JS", "Node", "Express", "EJS"],
            "techTag": "JS Node CSS",
        },
        {
            "title": "MobileGrub",
            "description": "Full stack web app that is used to easily locate food vendors.",
            "externalSrc": "https://mobilegrub-backend.herokuapp.com",
            "techList": ["Python", "Django", "CSS", "JWT"],
            "techTag": "Python CSS",
        },
        {
            "title": "To Do List",
            "description": "Simple fullstack todo list that manipulates a MongoDB database to create, read, update & delete tasks.",
            "githubSrc": "https://github.com/RobbieBendick/to-do-list",
            "techList": ["Node", "Express", "MongoDB/Mongoose"],
            "techTag": "JS Node CSS",
        },
        {
            "title": "Drum Kit",
            "description": "A web app where you can play the drums.",
            "githubSrc": "https://github.com/RobbieBendick/drum-kit",
            "externalSrc": "https://robbiebendick.github.io/drum-kit/",
            "techList": ["JS", "HTML", "CSS"],
            "techTag": "JS",
        },
        {
            "title": "News Letter",
            "description": "Fullstack webapp that allows users to easily subscribe and unsubscribe to a newsletter to receive emails in the future.",
            "githubSrc": "https://github.com/RobbieBendick/news-letter",
            "techList": ["JS", "Node", "Express", "CSS"],
            "techTag": "JS Node CSS",
        },
    ];

    // close the filter-dropdown menu if the user clicks outside of it
    useEffect(() => {
        document.addEventListener('mousedown', event =>
            !filterButtonRef.current.contains(event.target) && !filterDropdownRef.current.contains(event.target) && closeDropdown()
        );
    });

    // stores the project amount per language
    const [projectAmount, setProjectAmount] = useState(
        {
            "All": cardDetails.length,
            "JS": 0,
            "Python": 0,
            "Node": 0,
            "Lua": 0,
        }
    );

    // shows and hides cards based on filter
    let filterHandler = language => {
        let anchors = $(".project-card");        
        // adding invis to all cards to allow them to appear at the same time
        for (let i = 0; i < anchors.length; i++) {
            let anchor = anchors[i];
            if (!anchor.parentElement.classList.contains("invis")) anchor.parentElement.classList.add("invis");
        }

        // timeout allows all cards to appear at the same time
        setTimeout(() => {
            for (let i = 0; i < anchors.length; i++) {
                let anchor = anchors[i];
    
                if (anchor.classList.contains(language)) anchor.parentElement.classList.remove("invis");
                else anchor.parentElement.classList.add("invis");

                if (language === "All") anchor.parentElement.classList.remove("invis");
            }
        }, 20);
    }

    // toggles filter dropdown
    let showFilterDropdown = () => document.getElementById("filterDropdown").classList.toggle('show-instant');

    // closes filter-dropdown
    let closeDropdown = () => $(".dropdown-content").hasClass("show-instant") && $(".dropdown-content").removeClass("show-instant");

    // sets the state of the current filter
    let stateHandler = language => {
        if (language === "All") setFilter({"All": true, "JS": false, "Python": false, "Node": false, "Lua": false});
        if (language === "JS") setFilter({"All": false, "JS": true, "Python": false, "Node": false, "Lua": false});
        if (language === "Python") setFilter({"All": false,"JS": false,"Python": true,"Node": false,"Lua": false});
        if (language === "Node") setFilter({"All": false, "JS": false, "Python": false, "Node": true, "Lua": false});
        if (language === "Lua") setFilter({"All": false, "JS": false, "Python": false, "Node": false, "Lua": true});
        closeDropdown();
    }
        
    // returns a check mark string to place next to the clicked filter
    let checkHandler = language => {
        let str = "";
        for (let key of filterKeys) if (language === key) if (filter[key]) str = "???";
        return str;
    }

    // return a string of the current filtered language
    let findFilteredLanguage = () => {
        let str = "";
        for (let key of filterKeys) if (key !== "All") if (filter[key]) str = `Filter: ${key}`;
        return str;
    }

    // returns a string of the number of projects per language
    let projectsPerLanguage = language => {
        for(let key of filterKeys) if (key === language) return `(${projectAmount[key]})`;
    }

    let filterLinkOnClickHandler = language => {
        // dont allow reclick if alrdy activated
        for(let key of filterKeys) if (language === key && filter[key]) return closeDropdown();
        
        filterHandler(language);
        stateHandler(language);
    }

    // sets amount of projects per language
    if (projectAmount.JS === 0 && cardDetails.length > 0) {
        for (let i = 0; i < cardDetails.length; i++) {
            const card = cardDetails[i];
            // traverse through filter keys and increment each project with a its associated techTag 
            for (let key of filterKeys) if (card.techTag.split(" ").includes(key)) projectAmount[key]++;
        }
    }

    let atleastOneFilterIsActive = () => {
        for (let key of filterKeys) if (key !== "All") if (filter[key]) return true;
        return false;
    }
    
    let languageImages = [JS_pic, PYTHON_pic, NODE_pic, LUA_pic];
     return (
            <section id="projects" className="project-section">
                <FadeInDiv fadeInClass={2}>
                    <div className="projects">
                        <p className="numbered-heading-projects">Projects</p>
                    </div>
                </FadeInDiv>
                <div className="container">
                    <div className="dropdown filter-button">
                        <FadeInDiv fadeInClass={2}>
                            <motion.button whileFocus={{"backgroundColor": "hsl(166, 100%, 70% / 0.1)"}} whileHover={{"backgroundColor": "hsl(166, 100%, 70% / 0.1)"}} onClick={() => showFilterDropdown()} ref={filterButtonRef} className="dropbtn">Filter <i class="fa-solid fa-arrow-down-short-wide"></i></motion.button>
                        </FadeInDiv>
                        <div id="filterDropdown" ref={filterDropdownRef} className="dropdown-content">
                            <div className="language-img-container">
                                {languageImages.map(v => <img width="15" height="15" src={v} alt="Programming Language Icon" />)}
                            </div>
                            {filterKeys.map(language => <motion.button whileFocus={{"color": "hsl(166, 100%, 70%)"}} whileHover={{"color": "hsl(166, 100%, 70%)"}} name={language} onClick={() => filterLinkOnClickHandler(language)}>
                                {language}
                                {" "}
                                {projectsPerLanguage(language)}
                                {" "}
                                {checkHandler(language)}
                                </motion.button>)}
                        </div>
                    </div>
                    {/* display filter name */}
                    <p className="filtering light-slate-color">{findFilteredLanguage()}</p>
                </div>
                <ul className="projects-grid">
                    {cardDetails.map(v => (
                        <FadeInDiv fadeInClass={2}>
                            <ProjectCard key={v.title} title={v.title} description={v.description} githubSrc={v.githubSrc} externalSrc={v.externalSrc} techList={v.techList} techTag={v.techTag}/>
                        </FadeInDiv>
                    ))}
                </ul>
            </section>
    );
  }
  
export default ProjectSection;