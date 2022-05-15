import "./AboutMe.scss";
function AboutMe() {
    return (

        <section id="about" className="about-me-section">
            <div className="rob">
                <h2 className="numbered-heading">About Me</h2>
            </div>
            <div>
                <p>Hello! My name is Rob and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
                <p>Here are a few technologies I’ve been working with recently:</p>
            </div>
            <ul className="skills-list">
                <li>
                    JavaScript (ES6+)
                </li>
                <li>
                    Python
                </li>
                <li>
                    React
                </li>
                <li>
                    Lua
                </li>
                <li>
                    Node
                </li>
                <li>
                    Express
                </li>
            </ul>
        </section>

    )
}

export default AboutMe;