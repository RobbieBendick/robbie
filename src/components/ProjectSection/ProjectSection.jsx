import "./ProjectSection.scss";
import {React, useEffect} from "react";
import {motion} from "framer-motion";

function ProjectCard({title, description, tech1, tech2, tech3, tech4, githubSrc, externalSrc}) {
        return (
        <a href={externalSrc || githubSrc}>
            <li>
                <motion.div whileHover={{y: "-3px" }} className="project-inner">
                    <div class="card">
                        <div class="card-body">
                            <div className="project-top">
                                <div className="project-folder">
                                    <a> <i class="fa-regular fa-folder fa-xl"></i> </a>
                                </div>
                                <div className="project-links">
                                    {githubSrc &&
                                    <motion.a href={githubSrc} whileHover={{y: "-2px", color: "#64ffda"}}>
                                        <i class="fa-brands fa-github fa-sm"></i>
                                    </motion.a>
                                    }
                                    {externalSrc &&
                                    <motion.a href={externalSrc} whileHover={{y: "-2px", color: "#64ffda"}}>
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
                    <ProjectCard title="Memorizing Game" description="Web-clone of the game 'Simon'." tech1="Javascript" tech2="JQuery" tech3="CSS" githubSrc="https://github.com/RobbieBendick/memorizing-game" externalSrc="https://robbiebendick.github.io/memorizing-game/"/>
                    <ProjectCard title="Google Keep Clone" description="A simple Google Keep clone built with React." tech1="React" tech2="CSS" githubSrc="https://github.com/RobbieBendick/note-keeper" externalSrc="https://robbiebendick.github.io/note-keeper/" />
                    <ProjectCard title="ArenaMarker" description="Fully customizable video game addon that automates tedious tasks during specific game events. (14k+ downloads)" githubSrc="https://github.com/RobbieBendick/ArenaMarker" tech1="Lua"/>
                    <ProjectCard title="Blog" description="Not a personal blog; Blog for proof of concept."tech1="Node" tech2="Express" tech3="EJS" tech4="CSS" githubSrc="https://github.com/RobbieBendick/blog"/>
                    <ProjectCard title="MobileGrub" description="Full stack web app that is used to easily locate food vendors." tech1="Python" tech2="Django" tech3="JWT" externalSrc="https://mobilegrub-backend.herokuapp.com/"/>
                    <ProjectCard title="Space Shooter" description="Space-Shooter mini game with Python." tech1="Python" tech2="Pygame" githubSrc="https://github.com/RobbieBendick/pygame-shooter"/>
                </ul>
            </section>
    );
  }
  
export default ProjectSection;