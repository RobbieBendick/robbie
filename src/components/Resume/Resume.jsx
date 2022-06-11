import { useEffect } from "react";
import resume from "../../Assets/Robert's-Resume.pdf";
import "./Resume.scss";

function Resume() {
    useEffect(() => {
        document.title = "Robert's Resume";
    }, []);

    return (
            <div className="resume-container">
                <div class="resume">
                    <iframe title="resume" type="application/pdf" src={resume} frameborder="0"></iframe>
                </div>
            </div>
    )
}

export default Resume;