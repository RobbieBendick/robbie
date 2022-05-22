import "./AboutMe.scss";
import Dog from "../../Assets/dog.jpg";

function AboutMe() {
    return (

        <section id="about" className="about-me-section">
            <h2 className="numbered-heading">About Me</h2>
            <div className="inner">
                <div className="about-left">
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <p>e the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and mor</p>
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

    )
}

export default AboutMe;