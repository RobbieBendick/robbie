import "./ProjectSection.scss";
import {React, useEffect, useState} from "react";
import {motion} from "framer-motion";
import FadeInDiv from '../FadeInDiv/FadeInDiv';
import $ from "jquery";


function ProjectCard({title, description, techList, githubSrc, externalSrc, techTag}) {
    return (
        <a className={`${techTag} project-card`} href={externalSrc || githubSrc} target="_blank" rel="noopener noreferrer">
            <li>
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
                                        <motion.a href={githubSrc} whileHover={{y: "-2px", color: "#64ffda"}} target="_blank" rel="noopener noreferrer">
                                            <i class="fa-brands fa-github fa-sm"></i>
                                        </motion.a>
                                        }
                                        {externalSrc &&
                                        <motion.a href={externalSrc} whileHover={{y: "-2px", color: "#64ffda"}} target="_blank" rel="noopener noreferrer">
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
            </li>
        </a>
    )
}

function ProjectSection() {
    const [filter, setFilter] = useState({
        "All": false,
        "JS": false,
        "Python": false,
        "Node": false,
        "Lua": false,
    });
    const [cardDetails, setCardDetails] = useState([
        {
            "title": "ArenaMarker",
            "description": "Fully customizable addon that automates tedious UI tasks. 15k+ downloads and currently rank 31 in the world in popularity, among other addons in its respective category.",
            "githubSrc": "https://github.com/RobbieBendick/ArenaMarker",
            "externalSrc": null,
            "techList": ["Lua"],
            "techTag": "Lua",
        },
        {
            "title": "A* Pathfinding Algorithm",
            "description": "Calculates and visualizes the fastest route from the starting location to the end location while maneuvering around barricades.",
            "githubSrc": "https://github.com/RobbieBendick/a-star-pathfinding",
            "externalSrc": null,
            "techList": ["Python"],
            "techTag": "Python",
        },
        {
            "title": "MobileGrub",
            "description": "Full stack web app that is used to easily locate food vendors.",
            "githubSrc": null,
            "externalSrc": "https://mobilegrub-backend.herokuapp.com/",
            "techList": ["Python", "Django", "CSS", "JWT"],
            "techTag": "Python CSS",
        },
        {
            "title": "Dark Theme",
            "description": "Provides a Dark Theme as part of a customizable UI Addon/Plugin written in Lua.",
            "githubSrc": "https://github.com/RobbieBendick/DarkTheme",
            "externalSrc": null,
            "techList": ["Lua"],
            "tech1": "Lua",
            "techTag": "Lua",
        },
        {
            "title": "Space Shooter",
            "description": "Space-Shooter mini game written in Python.",
            "githubSrc": "https://github.com/RobbieBendick/pygame-shooter",
            "externalSrc": null,
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
            "title": "Blog",
            "description": "Not a personal blog; Blog for proof of concept.",
            "githubSrc": "https://github.com/RobbieBendick/blog",
            "externalSrc": null,
            "techList": ["JS", "Node", "Express", "MongoDB"],
            "techTag": "JS Node",
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
            "title": "Drum Kit",
            "description": "A web app where you can play the drums.",
            "githubSrc": "https://github.com/RobbieBendick/drum-kit",
            "externalSrc": "https://robbiebendick.github.io/drum-kit/",
            "techList": ["JS", "HTML", "CSS"],
            "techTag": "JS",
        },
        {
            "title": "Construction",
            "description": "Web app for a construction company to advertise their prices.",
            "githubSrc": "https://github.com/RobbieBendick/brookeban",
            "externalSrc": null,
            "techList": ["JS", "Node", "Express", "EJS"],
            "techTag": "JS Node CSS",
        },
        {
            "title": "To Do List",
            "description": "Simple fullstack todo list that manipulates a MongoDB database to create, read, update & delete tasks.",
            "githubSrc": "https://github.com/RobbieBendick/to-do-list",
            "externalSrc": null,
            "techList": ["Node", "Express", "MongoDB/Mongoose"],
            "techTag": "JS Node CSS",
        },
        {
            "title": "News Letter",
            "description": "Fullstack webapp that allows users to easily subscribe and unsubscribe to a newsletter to recieve emails in the future.",
            "githubSrc": "https://github.com/RobbieBendick/news-letter",
            "externalSrc": null,
            "techList": ["JS", "Node", "Express", "CSS"],
            "techTag": "JS Node CSS",
        },
    ]);

    let filterHandler = language => {
        let anchors = $(".project-card");
        
        // adding invis to all cards to allow them to appear at the same time
        for (let i = 0; i < anchors.length; i++) {
            let anchor = anchors[i];
            anchor.parentElement.classList.remove("invis");
            anchor.parentElement.classList.add("invis");
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
    let stateHandler = language => {
        if (language === "JS") setFilter({"All": false, "JS": true, "Python": false, "Node": false, "Lua": false});
        if (language === "Python") setFilter({"All": false,"JS": false,"Python": true,"Node": false,"Lua": false});
        if (language === "Node") setFilter({"All": false, "JS": false, "Python": false, "Node": true, "Lua": false});
        if (language === "Lua") setFilter({"All": false, "JS": false, "Python": false, "Node": false, "Lua": true});
        if (language === "All") setFilter({"All": true, "JS": false, "Python": false, "Node": false, "Lua": false});
    }
    let checkHandler = language => {
        let str = "";
        if (language === "JS") if (filter.JS) str = "✓";
        if (language === "Python") if (filter.Python) str = "✓";
        if (language === "Node") if (filter.Node) str = "✓";
        if (language === "Lua") if (filter.Lua) str = "✓";
        return str;
    }

    useEffect(() => {
        // Close the dropdown menu if the user clicks outside of it
        window.onclick = event => {
            if (!event.target.matches('.dropbtn')) {
                let dropdowns = document.getElementsByClassName("dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    let openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show-instant')) {
                        openDropdown.classList.remove('show-instant');
                    }
                }
            }
        }
    });

    let filterDropdownHandler = () => {
        let dropdown = document.getElementById("filterDropdown");

        dropdown.classList.toggle('show-instant');
    };

    let findFilteredLanguage = () => {
        let str = "";
        if (filter.JS) str = "Filter: JS";
        if (filter.Python) str = "Filter: Python";
        if (filter.Node) str = "Filter: Node";
        if (filter.Lua) str = "Filter: Lua";
        return str;
    }
    let filtersOptions = ["All", "JS", "Python", "Node", "Lua"];
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
                            <button onClick={() => filterDropdownHandler()} className="dropbtn">Filter <i class="fa-solid fa-arrow-down-short-wide"></i></button>
                        </FadeInDiv>
                        <div id="filterDropdown" className="dropdown-content">
                            {filtersOptions.map(language => <button name={language} onClick={() => {
                                filterHandler(language);
                                stateHandler(language);
                            }}>
                                {language}{" "}
                                {/* add a check by default */}
                            {!filter.All && !filter.JS && !filter.Lua && !filter.Node && !filter.Python ? language === "All" ? "✓" : "" : ""}
                            {checkHandler(language)}</button>)}
                        </div>
                    </div>
                    {/* checking to see if there's a valid filter applied and display it */}
                    <p className="filtering light-slate-color">{!(!filter.All && !filter.JS && !filter.Lua && !filter.Node && !filter.Python) ? ` ${findFilteredLanguage()}`: ""}</p>
                </div>
                <ul className="projects-grid">
                            {cardDetails.map(v => { return (
                                <FadeInDiv fadeInClass={2}>
                                    <ProjectCard key={v.title} title={v.title} description={v.description} githubSrc={v.githubSrc} techList={v.techList} techTag={v.techTag}/>
                                </FadeInDiv>
                            )})}
                </ul>
            </section>
    );
  }
  
export default ProjectSection;