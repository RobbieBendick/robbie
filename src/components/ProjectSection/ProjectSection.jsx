import "./ProjectSection.scss";
import {React, useEffect, useState} from "react";
import {motion} from "framer-motion";
import FadeInDiv from '../FadeInDiv/FadeInDiv';

const options = {
    root: null, // it is the viewport
    threshold: 0.6,
    rootMargin: "-55px"
  }
  const sections = document.querySelectorAll("section")
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return
      observer.unobserve(entry.target);
      entry.target.style.opacity = 1;
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  })


function ProjectCard({title, description, tech1, tech2, tech3, tech4, githubSrc, externalSrc}) {
        return (
        <a href={externalSrc || githubSrc} target="_blank" rel="noopener noreferrer">
            <li>
                <motion.div whileHover={{y: "-5px" }} className="project-inner">
                    <div class="card">
                        <header>
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
                        </header>
                        <footer>
                            <ul className="project-tech-list">
                                {tech1 && <li>{tech1}</li>}
                                {tech2 && <li>{tech2}</li>}
                                {tech3 && <li>{tech3}</li>}
                                {tech4 && <li>{tech4}</li>}
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
    
    return (
            <section id="projects" className="project-section">
                <FadeInDiv fadeInClass={2}>
                    <div className="projects">
                        <p className="numbered-heading-projects">Projects</p>
                    </div>
                </FadeInDiv>
                <ul className="projects-grid">
                    <FadeInDiv fadeInClass={3}>
                        <ProjectCard title="ArenaMarker" description="Fully customizable addon that automates tedious UI tasks. 14k+ downloads and currently rank 31 in the world in popularity, among other addons in its respective category." githubSrc="https://github.com/RobbieBendick/ArenaMarker" tech1="Lua"/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={4}>
                        <ProjectCard title="A* Pathfinding Algorithm" description="Calculates and visualizes the fastest route from the starting location to the end location while maneuvering around barricades." tech1="Python" githubSrc="https://github.com/RobbieBendick/a-star-pathfinding" />
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={5}>
                        <ProjectCard title="MobileGrub" description="Full stack web app that is used to easily locate food vendors." tech1="Python" tech2="Django" tech3="CSS" tech4="JWT" externalSrc="https://mobilegrub-backend.herokuapp.com/"/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={3}>
                        <ProjectCard title="Dark Theme" description="Provides a Dark Theme as part of a customizable UI Addon/Plugin written in Lua." tech1="Lua" githubSrc="https://github.com/RobbieBendick/DarkTheme"/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={4}>
                        <ProjectCard title="Space Shooter" description="Space-Shooter mini game with Python." tech1="Python" githubSrc="https://github.com/RobbieBendick/pygame-shooter"/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={5}>
                        <ProjectCard title="Google Keep Clone" description="A simple Google Keep clone built with React." tech1="JS" tech2="React" tech3="CSS" githubSrc="https://github.com/RobbieBendick/note-keeper" externalSrc="https://robbiebendick.github.io/note-keeper/" />
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={3}>
                        <ProjectCard title="Blog" description="Not a personal blog; Blog for proof of concept." tech1="JS" tech2="Node" tech3="Express" tech4="MongoDB" githubSrc="https://github.com/RobbieBendick/blog"/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={4}>
                        <ProjectCard title="Simon Clone" description="Web clone of the game 'Simon'." tech1="JS" tech2="JQuery" tech3="CSS" tech4="HTML" githubSrc="https://github.com/RobbieBendick/memorizing-game" externalSrc="https://robbiebendick.github.io/memorizing-game/"/>
                    </FadeInDiv>
                    <FadeInDiv fadeInClass={5}>
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