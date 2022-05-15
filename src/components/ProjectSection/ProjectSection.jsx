import "./ProjectSection.scss";
import {React, useEffect} from "react";
import {motion} from "framer-motion";

function ProjectCard({title, description, tech1, tech2, tech3, tech4, githubSrc, externalSrc}) {
        return (
        <a href={externalSrc || githubSrc} target="_blank" rel="noopener noreferrer">
            <li>
                <motion.div whileHover={{y: "-5px" }} className="project-inner">
                    <div class="card">
                        <div class="card-body">
                            <div className="project-top">
                                <div className="project-folder">
                                    <a> <i class="fa-regular fa-folder fa-xl"></i> </a>
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
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{description}</p>
                        </div>
                        <footer>
                            <ul className="project-tech-list">
                                {tech1 && <li>{tech1}</li> }
                                {tech2 && <li>{tech2}</li> }
                                {tech3 && <li>{tech3}</li> }
                                {tech4 && <li>{tech4}</li> }
                            </ul>
                        </footer>
                    </div>
                </motion.div>
            </li>
        </a>
    )

}



function ProjectSection() {
    
    useEffect(() => {
        
    })
    
    return (
            <section id="projects" className="project-section">
                <div className="projects">
                    <p className="numbered-heading-projects">Projects</p>
                </div>
                <ul className="projects-grid">
                    <ProjectCard title="ArenaMarker" description="Fully customizable video game addon that automates tedious tasks during specific game events. (14k+ downloads)" githubSrc="https://github.com/RobbieBendick/ArenaMarker" tech1="Lua"/>
                    <ProjectCard title="Google Keep Clone" description="A simple Google Keep clone built with React." tech1="JS" tech2="React" tech3="CSS" githubSrc="https://github.com/RobbieBendick/note-keeper" externalSrc="https://robbiebendick.github.io/note-keeper/" />
                    <ProjectCard title="MobileGrub" description="Full stack web app that is used to easily locate food vendors." tech1="Python" tech2="Django" tech3="CSS" tech4="JWT" externalSrc="https://mobilegrub-backend.herokuapp.com/"/>
                    <ProjectCard title="Memorizing Game" description="Web clone of the game 'Simon'." tech1="JS" tech2="JQuery" tech3="CSS" tech4="HTML" githubSrc="https://github.com/RobbieBendick/memorizing-game" externalSrc="https://robbiebendick.github.io/memorizing-game/"/>
                    <ProjectCard title="Space Shooter" description="Space-Shooter mini game with Python." tech1="Python" tech2="Pygame" githubSrc="https://github.com/RobbieBendick/pygame-shooter"/>
                    <ProjectCard title="Blog" description="Not a personal blog; Blog for proof of concept." tech1="JS" tech2="Node" tech3="Express"  tech4="CSS" githubSrc="https://github.com/RobbieBendick/blog"/>
                    <ProjectCard title="Dark Theme" description="Provides a Dark Theme UI mode in a video game." tech1="Lua" githubSrc="https://github.com/RobbieBendick/DarkTheme"/>
                    <ProjectCard title="Construction" description="Web app for a construction company to advertise their prices." tech1="JS" tech2="Node" tech3="Express" tech4="EJS" githubSrc="https://github.com/RobbieBendick/brookeban" />
                    <ProjectCard title="Drum Kit" description="A web app where you can play the drums." tech1="JS" tech2="HTML" tech3="CSS" githubSrc="https://github.com/RobbieBendick/drum-kit" externalSrc="https://robbiebendick.github.io/drum-kit/" />
                </ul>
            </section>
    );
  }
  
export default ProjectSection;