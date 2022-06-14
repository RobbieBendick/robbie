import "./ProjectSection.scss";
import {React, useEffect, useState, useRef} from "react";
import {motion} from "framer-motion";
import FadeInDiv from '../FadeInDiv/FadeInDiv';
import $ from "jquery";


function ProjectCard({title, description, techList, githubSrc, externalSrc, techTag}) {
    return (
        <motion.a  className={`${techTag} project-card`} href={externalSrc || githubSrc} target="_blank" rel="noopener noreferrer">
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
        </motion.a>
    )
}

function ProjectSection() {
    // all filters
    const [filter, setFilter] = useState({
        "All": true,
        "JS": false,
        "Python": false,
        "Node": false,
        "Lua": false,
    });

    // filter button reference
    let filterRef = useRef();

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
            "title": "Dark Theme",
            "description": "Provides a Dark Theme as part of a customizable UI Addon/Plugin written in Lua.",
            "githubSrc": "https://github.com/RobbieBendick/DarkTheme",
            "techList": ["Lua"],
            "tech1": "Lua",
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
    // stores the project amount per language
    const [projectAmount, setProjectAmount] = useState(
        {
            "All": 0,
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
    
                if (anchor.classList.contains(language)) {
                    anchor.parentElement.classList.remove("invis");
                } else {
                    anchor.parentElement.classList.add("invis");
                }
                if (language === "All") {
                    anchor.parentElement.classList.remove("invis");
                }
            }
        }, 20);
    }

    // sets the state of the current filter
    let stateHandler = language => {
        if (language === "All") setFilter({"All": true, "JS": false, "Python": false, "Node": false, "Lua": false});
        if (language === "JS") setFilter({"All": false, "JS": true, "Python": false, "Node": false, "Lua": false});
        if (language === "Python") setFilter({"All": false,"JS": false,"Python": true,"Node": false,"Lua": false});
        if (language === "Node") setFilter({"All": false, "JS": false, "Python": false, "Node": true, "Lua": false});
        if (language === "Lua") setFilter({"All": false, "JS": false, "Python": false, "Node": false, "Lua": true});
    }
    
    // returns a check mark string to place next to the clicked filter
    let checkHandler = language => {
        let str = "";
        if (language === "All") if (filter.All) str = "✓";
        if (language === "JS") if (filter.JS) str = "✓";
        if (language === "Python") if (filter.Python) str = "✓";
        if (language === "Node") if (filter.Node) str = "✓";
        if (language === "Lua") if (filter.Lua) str = "✓";
        return str;
    }

    // Close the filter-dropdown menu if the user clicks outside of it
    useEffect(() => {
        document.addEventListener('mousedown', event => {
            if (!filterRef.current.contains(event.target)) {
                let dropdown = $(".dropdown-content");
                if (dropdown.hasClass("show-instant")) dropdown.removeClass("show-instant");   
            }
        })
    });

    // toggles filter dropdown
    let showFilterDropdown = () => {
        let dropdown = document.getElementById("filterDropdown");
        dropdown.classList.toggle('show-instant');
    };

    // return a string of the current filtered language
    let findFilteredLanguage = () => {
        let str = "";
        if (filter.JS) str = "Filter: JS";
        if (filter.Python) str = "Filter: Python";
        if (filter.Node) str = "Filter: Node";
        if (filter.Lua) str = "Filter: Lua";
        return str;
    }

    // returns a string of the number of projects per language
    let projectsPerLanguage = language => {
        let str;
        if (language === "All") str = `(${projectAmount.All})`;
        if (language === "JS") str = `(${projectAmount.JS})`;
        if (language === "Python") str = `(${projectAmount.Python})`;
        if (language === "Node") str = `(${projectAmount.Node})`;
        if (language === "Lua") str = `(${projectAmount.Lua})`;
        return str;
    }

    // sets amount of projects per language
    if (projectAmount.JS === 0) {
        let c = 0;
        for (let i = 0; i < cardDetails.length; i++) {
            const card = cardDetails[i];
            if (card.techList.includes("JS")) projectAmount.JS++;
            if (card.techList.includes("Python")) projectAmount.Python++;
            if (card.techList.includes("Node")) projectAmount.Node++;
            if (card.techList.includes("Lua")) projectAmount.Lua++;
            c++;
        }
        setProjectAmount({
            ...projectAmount, "All": c
        });
    }

    let filterOptions = ["All", "JS", "Python", "Node", "Lua"];
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
                            <motion.button whileFocus={{"backgroundColor": "hsl(166, 100%, 70% / 0.1)"}} whileHover={{"backgroundColor": "hsl(166, 100%, 70% / 0.1)"}} onClick={() => showFilterDropdown()} ref={filterRef} className="dropbtn">Filter <i class="fa-solid fa-arrow-down-short-wide"></i></motion.button>
                        </FadeInDiv>
                        <div id="filterDropdown" className="dropdown-content">
                            {filterOptions.map((language) => <button name={language} onClick={() => {
                                // dont allow reclick if alrdy activated
                                if (language === "All" && filter.All) return
                                if (language === "JS" && filter.JS) return
                                if (language === "Python" && filter.Python) return
                                if (language === "Node" && filter.Node) return
                                if (language === "Lua" && filter.Lua) return
                                filterHandler(language);
                                stateHandler(language);
                            }}>
                                {language}
                                {" "}
                                {projectsPerLanguage(language)}
                                {" "}
                                {/* add a check by default */}
                                {!filter.All && !filter.JS && !filter.Lua && !filter.Node && !filter.Python ? language === "All" 
                                ? "✓"
                                : ""
                                : ""}
                                {checkHandler(language)}
                                </button>)}
                        </div>
                    </div>
                    {/* checking to see if there's a valid filter applied and display the filter's name on the screen */}
                    <p className="filtering light-slate-color">{!(!filter.All && !filter.JS && !filter.Lua && !filter.Node && !filter.Python) ? ` ${findFilteredLanguage()}`: ""}</p>
                </div>
                <ul className="projects-grid">
                    {cardDetails.map(v => { return (
                        <FadeInDiv fadeInClass={2}>
                            <ProjectCard key={v.title} title={v.title} description={v.description} githubSrc={v.githubSrc} externalSrc={v.externalSrc} techList={v.techList} techTag={v.techTag}/>
                        </FadeInDiv>
                    )})}
                </ul>
            </section>
    );
  }
  
export default ProjectSection;