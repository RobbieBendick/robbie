import "./ProjectSection.scss";
import {React, useState} from "react";
import {motion} from "framer-motion";
import FadeInDiv from '../FadeInDiv/FadeInDiv';
import useWindowSize from "../../hooks/useWindowSize";


function ProjectCard({title, description, tech1, tech2, tech3, tech4, githubSrc, externalSrc}) {
    let tech = [tech1, tech2, tech3, tech4];
    return (
        <a href={externalSrc || githubSrc} target="_blank" rel="noopener noreferrer">
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


function showMoreProjects() {
    return (
        <>
            <div className="fade-in-3">
                <ProjectCard title="Construction" description="Web app for a construction company to advertise their prices." tech1="JS" tech2="Node" tech3="Express" tech4="EJS" githubSrc="https://github.com/RobbieBendick/brookeban" />
            </div>
            <div className="fade-in-4">
                <ProjectCard title="To Do List" description="Simple fullstack todo list that manipulates a MongoDB database to create, read, update & delete tasks." githubSrc="https://github.com/RobbieBendick/to-do-list" tech1="Node" tech2="Express" tech3="MongoDB/Mongoose"/>
            </div>
            <div className="fade-in-5">
                <ProjectCard title="News Letter" description="Fullstack webapp that allows users to easily subscribe and unsubscribe to a newsletter to recieve emails in the future." githubSrc="https://github.com/RobbieBendick/news-letter" tech1="JS" tech2="Express" tech3="Node" tech4="CSS"/>
            </div>
        </>
    )
}


function ProjectSection() {
    const [showMore, setShowMore] = useState(false);
    
    const windowSize = useWindowSize();

    let mobile = windowSize.width < 1067;

    let tablet = windowSize.width > 1067 && windowSize.width < 1467;

    let checkDeviceWidth = (desktopClass, tabletClass = desktopClass) => tablet ? tabletClass : mobile ? 2 : desktopClass;

    return (
            <section id="projects" className="project-section">
                <FadeInDiv fadeInClass={2}>
                    <div className="projects">
                        <p className="numbered-heading-projects">Projects</p>
                    </div>
                </FadeInDiv>
                <ul className="projects-grid">
                    {/* alternate fade-in-3 and 4 while on tablet */}
                    {/* alternate fade-in-3 and 4 5 while on desktop */}
                    {/* fade-in-2 for all mobile */}
                    <FadeInDiv fadeInClass={checkDeviceWidth(3)}>
                        <ProjectCard title="ArenaMarker" description="Fully customizable addon that automates tedious UI tasks. 14k+ downloads and currently rank 31 in the world in popularity, among other addons in its respective category." githubSrc="https://github.com/RobbieBendick/ArenaMarker" tech1="Lua"/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={checkDeviceWidth(4)}>
                        <ProjectCard title="A* Pathfinding Algorithm" description="Calculates and visualizes the fastest route from the starting location to the end location while maneuvering around barricades." tech1="Python" githubSrc="https://github.com/RobbieBendick/a-star-pathfinding" />
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={checkDeviceWidth(5, 3)}>
                        <ProjectCard title="MobileGrub" description="Full stack web app that is used to easily locate food vendors." tech1="Python" tech2="Django" tech3="CSS" tech4="JWT" externalSrc="https://mobilegrub-backend.herokuapp.com/"/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={checkDeviceWidth(3, 4)}>
                        <ProjectCard title="Dark Theme" description="Provides a Dark Theme as part of a customizable UI Addon/Plugin written in Lua." tech1="Lua" githubSrc="https://github.com/RobbieBendick/DarkTheme"/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={checkDeviceWidth(4, 3)}>
                        <ProjectCard title="Space Shooter" description="Space-Shooter mini game written in Python." tech1="Python" githubSrc="https://github.com/RobbieBendick/pygame-shooter"/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={checkDeviceWidth(5, 4)}>
                        <ProjectCard title="Google Keep Clone" description="A simple Google Keep clone built with React." tech1="JS" tech2="React" tech3="CSS" githubSrc="https://github.com/RobbieBendick/note-keeper" externalSrc="https://robbiebendick.github.io/note-keeper/" />
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={checkDeviceWidth(3, 3)}>
                        <ProjectCard title="Blog" description="Not a personal blog; Blog for proof of concept." tech1="JS" tech2="Node" tech3="Express" tech4="MongoDB" githubSrc="https://github.com/RobbieBendick/blog"/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={checkDeviceWidth(4, 4)}>
                        <ProjectCard title="Simon Clone" description="Web clone of the game 'Simon'." tech1="JS" tech2="JQuery" tech3="CSS" tech4="HTML" githubSrc="https://github.com/RobbieBendick/memorizing-game" externalSrc="https://robbiebendick.github.io/memorizing-game/"/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={checkDeviceWidth(5, 3)}>
                        <ProjectCard title="Drum Kit" description="A web app where you can play the drums." tech1="JS" tech2="HTML" tech3="CSS" githubSrc="https://github.com/RobbieBendick/drum-kit" externalSrc="https://robbiebendick.github.io/drum-kit/" />
                    </FadeInDiv>
                    {showMore && showMoreProjects()}
                </ul>
                <motion.button whileHover={{backgroundColor: "hsl(166, 100%, 70% / 0.1)"}} className="show-more-button" onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Show Less" : "Show More"}
                </motion.button>
            </section>
    );
  }
  
export default ProjectSection;