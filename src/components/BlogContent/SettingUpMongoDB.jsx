import React from "react";
let SettingUpMongoDB = () => {
    return (
        <div className="blog-post-list">
            <ol>
                <li>
                    Download the latest <b>MSI file</b> version of MongoDB from their official site <a href="https://www.mongodb.com/try/download/community">here</a>
                </li>
                <li>
                    Open your terminal, change directory into your home folder <code>cd ~</code>
                </li>
                <li>
                    Create a file named <b>.bash_profile</b> <code>touch .bash_profile</code>
                </li>
                <li>
                    You can confirm you've made this file: <code>ls -a</code> .bash_profile should be in that list.
                </li>
                <li>
                    Now that we've made our .bash_profile file, we're going to allow our terminal to easily communicate with MongoDB by editing this file, but first we need to know exactly what version we're working with.
                </li>
                <li>
                    In your C: directory, there should be a <b>Program Files {'>'} MongoDB {'>'} Server {'>'} VersionNumber</b>. In my case It's 5.0, but double check to make sure.
                </li>
                <li>
                   Okay, now we're finally ready to edit this file. In my case I'll be using vim. While still in the home directory, type <code>vim .bash_profile</code>
                </li>
                <li>
                    When this file is open in vim, hit <code>i</code> for <i>insert mode</i> so we're able to type in our file then either type or copy paste these two lines: <br /><code>alias mongod='/c/Program\ Files/MongoDB/Server/5.0/bin/mongod.exe'</code><br /><code>alias  mongo='/c/Program\ Files/MongoDB/Server/5.0/bin/mongo.exe'</code>
                    <ul>
                        <li className="sub-bullet-point">Remember the version-number folder we just looked up in our file system? Make sure to edit this code to whatever version you had.</li>
                    </ul>
                </li>
                <li>
                    Now we are done editing the file! To save and exit the file in vim, you have to hit <b>Esc</b> to exit <b>Insert</b> mode and type: <code>:wq!</code>.
                </li>
                <li>We are done! Load a new terminal up and type <code>mongo --version</code> to check if it's working properly. If you see a version number, congrats! You're now able to work with MongoDB through the terminal. If not, try to retrace your steps and reread this post. </li>
            </ol>
        </div>
    )
}

export default SettingUpMongoDB;