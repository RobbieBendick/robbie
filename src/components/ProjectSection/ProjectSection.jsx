import "./ProjectSection.scss";
import {React, useEffect} from "react";
import {motion} from "framer-motion";
function ProjectCard() {
    return (
        <motion.div whileHover={{y: "-3px"}} className="project-inner">
            <div whileHover={{y: "-3px"}} class="card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </motion.div>
    )

}



function ProjectSection() {
    
    useEffect(() => {
        
    })
    
    return (
        <section className="project-section">
            <div >
                <p className="numbered-heading-projects">Projects</p>
            </div>
            <ul className="projects-grid">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </ul>
        </section>
    );
  }
  
export default ProjectSection;