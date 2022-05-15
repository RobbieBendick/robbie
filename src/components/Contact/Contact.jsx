import "./Contact.scss";
import {motion} from "framer-motion";

function Contact() {

    return (
        <section id="contact">
            <h2 className="whats-next">What's Next?</h2>
            <h2 className="get-in-touch">Get In Touch</h2>
            <p className="contact-description">I'm currently looking for more opportunities and my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <motion.a href="mailto:robbiebendick@gmail.com" whileHover={{backgroundColor: "rgb(100, 255, 218, 0.1)", color: "#64ffda"}} className="contact-button">Say Hello</motion.a>
        </section>
    )
}

export default Contact;