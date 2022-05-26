import "./AboutMe.scss";
import Dog from "../../Assets/dog.jpg";
import FadeInDiv from '../FadeInDiv/FadeInDiv';


function AboutMe() {
    return (
        <FadeInDiv>
            <section id="about" className="about-me-section">
                <h2 className="numbered-heading">About Me</h2>
                <div className="inner">
                    <div className="about-left">
                        <div>
                            <p>Hello! My name is Robert. Back in 2015 I was a professional gamer, and ever since then I have fallen in love with learning. The following years I've been utilizing the unique tools that I'm equipped with to critically think about complex problems, and quickly absorb information.</p>
                            <p>Fast-forward to today, my main focus and passion is building accessible, inclusive products and digital experiences.</p>
                            <p>Here are a few technologies I’ve been working with recently:</p>
                        </div>
                        <ul className="skills-list">
                            <li>
                                JavaScript (ES6+)
                            </li>
                            <li>
                                React
                            </li>
                            <li>
                                Node
                            </li>
                            <li>
                                Python
                            </li>
                            <li>
                                Express
                            </li>
                            <li>
                                Django
                            </li>
                        </ul>
                    </div>
                    <div className="about-right">
                        <div className="wrapper">
                            <div className="img-container">
                                <img height="500" width="500" sizes="(min-width: 500px) 500px, 100vw" src={Dog} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </FadeInDiv>
    )
}

export default AboutMe;