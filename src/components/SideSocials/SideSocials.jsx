import "./SideSocials.scss";
function SideSocials() {

    return (
        <>
        <div className="side-socials" orientation="left">
            <ul>
                <li>
                    <a href="https://github.com/RobbieBendick"><i class="fa-brands fa-github"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/robert-bendick-b71a851b2/"><i class="fa-brands fa-linkedin-in"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/robert-bendick-b71a851b2/"><i class="fa-solid fa-envelope"></i></a>
                </li>
            </ul>
        </div>
        
        <div className="side-email" orientation="right">
            <a className="rotate">robbiebendick@gmail.com</a>
        </div>
    </>
    )
}

export default SideSocials;