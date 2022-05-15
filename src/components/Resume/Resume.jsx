import resume from "../../Assets/Robert's-Resume.pdf";
import "./Resume.scss";

function Resume() {
    return (
            <div className="resume-container">
                <div class="resume">
                    <iframe title="resume" src={resume} frameborder="0"></iframe>
                </div>
            </div>
    )
}

export default Resume;