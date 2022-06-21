import "./BlogPostList.scss";
let body1 = () => {
    
    return (
        <div>
            <ol>
                <li>
                    Download the latest <b>MSI file</b> version of MongoDB from their official site <a href="https://www.mongodb.com/try/download/community">here</a>
                </li>
                <li>
                    Inside your C: directory, create a new folder named <code>data</code>, and inside <code>data</code> make another folder named <code>db</code>
                </li>
                <li>
                    Open your terminal, change directory into your home folder <code>cd ~</code>
                </li>
                <li>
                    Create a file named <b>.bash_profile</b> <code>touch .bash_profile</code>
                </li>
                <li>
                    You can confirm you've made this file: <code>ls -a</code>, .bash_profile should be in that list.
                </li>
                <li>
                    Now that we've made our .bash_profile file, we're going to allow our terminal to easily communicate with MongoDB by editing this file, but first we need to know exactly what version we're working with.
                </li>
                <li>
                    In your C: directory, there should be a <b>Program Files > MongoDB > Server > VersionNumber</b>. In my case It's 5.0, but double check to make sure.
                </li>
                <li>
                   Okay, now we're finally ready to edit this file. In my case I'll be using vim. While still in the home directory, type <code>vim .bash_profile</code>
                </li>
                <li>
                    When this file is open in vim, hit <code>i</code> for <i>insert mode</i> so we're able to type in our file then either type or copy paste these two lines: <br /><code>alias mongod='/c/Program\ Files/MongoDB/Server/5.0/bin/mongod.exe'</code><br /><code>alias  mongo='/c/Program\ Files/MongoDB/Server/5.0/bin/mongo.exe'</code><br />

                    <br /> Remember the version-number folder we just looked up in our file system? Make sure to edit this code to whatever version you had.
                </li>
                <li>
                    Now we are done editing the file! To save and exit in vim, you have to hit <b>Esc</b> to exit <b>Insert</b> mode and type: <code>:wq!</code>.
                </li>
                <li>We are done! Load a new terminal up and type <code>mongo --version</code> to check if it's working properly. If you see a version number, Congrats! You're now able to work with MongoDB through the terminal. If not, try to retrace your steps and re-read this post. </li>
            </ol>
        </div>
    )
}


let body2 = () => {
    return (
        <div>
            this is the secnond body in a func
        </div>
    )
}

let truncate = (txt,href) => {
    let tempTxt;
    let isShortened = false;
    if (txt.length > 30) {
        tempTxt = txt.substring(0,15) + " ...";
        isShortened = true;
    }
    return isShortened ? <>{tempTxt} <a className="light-green-color" href={href}>Read More</a></> : txt;
}
console.log(body1());
let BlogPostList = [
    {
        id: 1,
        title: "Installing MongoDB",
        titleDescription: truncate("oaidhnfapoidnopabtpoubrtpibertpbrpeoaibtpiaerbtpie", `${process.env.PUBLIC_URL}/#/post/1`),
        body: body1(),
        href: `${process.env.PUBLIC_URL}/#/post/1`
    },
    {
        id: 2,
        title: "title2",
        titleDescription: truncate("afhaefhhhhhhhhhhhhhhhasdadsasdafhafgaef", `${process.env.PUBLIC_URL}/#/post/2`),
        body: body2(),
        href: `${process.env.PUBLIC_URL}/#/post/2`
    },
    {
        id: 3,
        title: `title3`,
        titleDescription: truncate("afhaefhhhhhhhhhhhhhhhasdadsasdafhafgaef", `${process.env.PUBLIC_URL}/#/post/3`),
        body: `body3`,
        href: `${process.env.PUBLIC_URL}/#/post/3`
    },
]


export default BlogPostList;