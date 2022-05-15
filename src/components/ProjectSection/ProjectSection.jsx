import "./ProjectSection.scss";
import {React, useEffect} from "react";
import {motion} from "framer-motion";

function ProjectCard({title, description, tech1, tech2, tech3}) {
        return (
        <li>
            <motion.div whileHover={{y: "-3px" }} className="project-inner">
                <div class="card">
                    <div class="card-body">
                        <div className="project-top">
                            <div className="project-folder">
                                <a> <i class="fa-regular fa-folder fa-xl"></i> </a>
                            </div>
                            <div className="project-links">
                                <motion.button whileHover={{y: "-2px", color: "#64ffda"}}>
                                    <i class="fa-brands fa-github fa-sm"></i>
                                </motion.button>
                                <motion.button whileHover={{y: "-2px", color: "#64ffda"}}>
                                <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
                                </motion.button>
                            </div>
                        </div>
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                    </div>
                    <footer>
                        <ul className="project-tech-list">
                            <li>{tech1}</li>
                            <li>{tech2}</li>
                            <li>{tech3}</li>
                        </ul>
                    </footer>
                </div>
            </motion.div>
        </li>
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
                <ProjectCard title="projectName" description="this is a small sample description that needs to be decently long so i can see how it fits" tech1="React" tech2="Node" tech3="Express"/>
                <ProjectCard title="projectName" description="this is a small sample description that needs to be decently long so i can see how it fits" tech1="React" tech2="Node" tech3="Express"/>
                <ProjectCard title="projectName" description="this is a small sample description that needs to be decently long so i can see how it fits" tech1="React" tech2="Node" tech3="Express"/>
                <ProjectCard title="projectName" description="this is a small sample description that needs to be decently long so i can see how it fits" tech1="React" tech2="Node" tech3="Express"/>
                <ProjectCard title="projectName" description="this is a small sample description that needs to be decently long so i can see how it fits" tech1="React" tech2="Node" tech3="Express"/>
                <ProjectCard title="projectName" description="this is a small sample description that needs to be decently long so i can see how it fits" tech1="React" tech2="Node" tech3="Express"/>
            </ul>
        </section>
    );
  }
  
export default ProjectSection;