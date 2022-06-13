import "./ProjectSection.scss";
import {React, useEffect, useState} from "react";
import {motion} from "framer-motion";
import FadeInDiv from '../FadeInDiv/FadeInDiv';
import $ from "jquery";


function ProjectCard({title, description, tech1, tech2, tech3, tech4, githubSrc, externalSrc, techTag}) {
    let tech = [tech1, tech2, tech3, tech4];
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
                                {tech.map(tech => <li>{tech}</li>)}
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

    let stateHandler = language => {
        if (language === "JS") setFilter({"All": false, "JS": true, "Python": false, "Node": false, "Lua": false});
        if (language === "Python") setFilter({"All": false,"JS": false,"Python": true,"Node": false,"Lua": false});
        if (language === "Node") setFilter({"All": false, "JS": false, "Python": false, "Node": true, "Lua": false});
        if (language === "Lua") setFilter({"All": false, "JS": false, "Python": false, "Node": false, "Lua": true});
        if (language === "All") setFilter({"All": true, "JS": false, "Python": false, "Node": false, "Lua": false});
    }


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
    let checkHandler = language => {
        let str;
        switch (language) {
            case "All":
                if (filter.All) {
                    str = "✓"
                } else {
                    str = ""
                }
                break;
            case "JS":
                if (filter.JS) {
                    str = "✓"
                } else {
                    str = ""
                }
                break;
            case "Lua":
                if (filter.Lua) {
                    str = "✓"
                } else {
                    str = ""
                }
                break;
            case "Python":
                if (filter.Python) {
                    str = "✓"
                } else {
                    str = ""
                }
                break;
            case "Node":
                if (filter.Node) {
                    str = "✓"
                } else {
                    str = ""
                }
                break;
            default:
                str = ""
                break;
        }
        return str;
    }

    useEffect(() => {
        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                let dropdowns = document.getElementsByClassName("dropdown-content");
                let i;
                for (i = 0; i < dropdowns.length; i++) {
                    let openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show-instant')) {
                        openDropdown.classList.remove('show-instant');
                    }
                }
            }

        }
    })

    function filterDropdownHandler() {
        let dropdown = document.getElementById("filterDropdown");

        dropdown.classList.toggle('show-instant');
    }

    let findTrueValue = () => {
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
                        <button onClick={() => filterDropdownHandler()} className="dropbtn">Filter <i class="fa-solid fa-arrow-down-short-wide"></i></button>
                        <div id="filterDropdown" className="dropdown-content">
                            {filtersOptions.map(language => <button name={language} onClick={() => {
                                filterHandler(language);
                                stateHandler(language);
                            }}>
                                {language}{" "}
                                {/* default check */}
                            {!filter.All && !filter.JS && !filter.Lua && !filter.Node && !filter.Python ? language === "All" ? "✓" : "" : ""}
                            {checkHandler(language)}</button>)}
                        </div>
                    </div>
                    {/* checking to see if there's a valid filter applied and display it */}
                    <p className="filtering light-slate-color">{!(!filter.All && !filter.JS && !filter.Lua && !filter.Node && !filter.Python) ? ` ${findTrueValue()}`: ""}</p>
                </div>
                <ul className="projects-grid">
                    {/* alternate fade-in-3 and 4 while on tablet */}
                    {/* alternate fade-in-3 and 4 and 5 while on desktop */}
                    {/* fade-in-2 for all mobile */}

                    
                    <FadeInDiv fadeInClass={2}>
                        <ProjectCard title="ArenaMarker" description="Fully customizable addon that automates tedious UI tasks. 14k+ downloads and currently rank 31 in the world in popularity, among other addons in its respective category." githubSrc="https://github.com/RobbieBendick/ArenaMarker" tech1="Lua" techTag={"Lua"}/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={2}>
                        <ProjectCard title="A* Pathfinding Algorithm" description="Calculates and visualizes the fastest route from the starting location to the end location while maneuvering around barricades." tech1="Python" githubSrc="https://github.com/RobbieBendick/a-star-pathfinding" techTag={"Python"}/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={2}>
                        <ProjectCard title="MobileGrub" description="Full stack web app that is used to easily locate food vendors." tech1="Python" tech2="Django" tech3="CSS" tech4="JWT" externalSrc="https://mobilegrub-backend.herokuapp.com/" techTag={"Python CSS"}/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={2}>
                        <ProjectCard title="Dark Theme" description="Provides a Dark Theme as part of a customizable UI Addon/Plugin written in Lua." tech1="Lua" githubSrc="https://github.com/RobbieBendick/DarkTheme" techTag={"Lua"}/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={2}>
                        <ProjectCard title="Space Shooter" description="Space-Shooter mini game written in Python." tech1="Python" githubSrc="https://github.com/RobbieBendick/pygame-shooter" techTag={"Python"}/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={2}>
                        <ProjectCard title="Google Keep Clone" description="A simple Google Keep clone built with React." tech1="JS" tech2="React" tech3="CSS" githubSrc="https://github.com/RobbieBendick/note-keeper" externalSrc="https://robbiebendick.github.io/note-keeper/" techTag={"JS React CSS"}/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={2}>
                        <ProjectCard title="Blog" description="Not a personal blog; Blog for proof of concept." tech1="JS" tech2="Node" tech3="Express" tech4="MongoDB" githubSrc="https://github.com/RobbieBendick/blog" techTag={"JS Node"}/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={2}>
                        <ProjectCard title="Simon Clone" description="Web clone of the game 'Simon'." tech1="JS" tech2="JQuery" tech3="CSS" tech4="HTML" githubSrc="https://github.com/RobbieBendick/memorizing-game" externalSrc="https://robbiebendick.github.io/memorizing-game/" techTag={"JS CSS"}/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={2}>
                        <ProjectCard title="Drum Kit" description="A web app where you can play the drums." tech1="JS" tech2="HTML" tech3="CSS" githubSrc="https://github.com/RobbieBendick/drum-kit" externalSrc="https://robbiebendick.github.io/drum-kit/" techTag={"JS"}/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={2}>
                    <ProjectCard title="Construction" description="Web app for a construction company to advertise their prices." tech1="JS" tech2="Node" tech3="Express" tech4="EJS" githubSrc="https://github.com/RobbieBendick/brookeban" techTag={"JS Node CSS"} />
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={2}>
                        <ProjectCard title="To Do List" description="Simple fullstack todo list that manipulates a MongoDB database to create, read, update & delete tasks." githubSrc="https://github.com/RobbieBendick/to-do-list" tech1="Node" tech2="Express" tech3="MongoDB/Mongoose" techTag={"JS Node CSS"}/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={2}>
                        <ProjectCard title="News Letter" description="Fullstack webapp that allows users to easily subscribe and unsubscribe to a newsletter to recieve emails in the future." githubSrc="https://github.com/RobbieBendick/news-letter" tech1="JS" tech2="Node" tech3="Express"  tech4="CSS" techTag={"JS Node CSS"}/>
                    </FadeInDiv>
                </ul>
            </section>
    );
  }
  
export default ProjectSection;