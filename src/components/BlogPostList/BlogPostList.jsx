import "./BlogPostList.scss";
import SettingUpMongoDB from "../BlogContent/SettingUpMongoDB";
import ImplementingJWT from "../BlogContent/ImplementingJWT";

let dev = process.env.NODE_ENV === 'development';

let hrefFinder = () => {
    let ans;
    if (dev) ans = "";
    else ans = process.env.PUBLIC_URL;
    return ans;
}

let truncate = (txt,href) => {
    let tempTxt;
    let isShortened = false;
    if (txt.length > 30) {
        tempTxt = txt.substring(0,80) + " ...";
        isShortened = true;
    }
    return isShortened ? <div> {tempTxt} <a className="light-green-color" href={href}>Read More</a></div> : txt;
}
let BlogPostList = [
    {
        id: 1,
        title: "Setting Up MongoDB",
        titleDescription: truncate("Download the latest MSI file version of MongoDB from their official site, Inside your C: directory, create a new folder named ", `${hrefFinder()}/post/1`),
        body: <SettingUpMongoDB />,
        href: `${hrefFinder()}/post/1`
    },
    {
        id: 2,
        title: "Implementing Bcrypt & JWT in Node.js",
        titleDescription: truncate("Today we'll be using Node.js, along the Express.js framework to implement bcrypt and JWT", `${hrefFinder()}/post/2`),
        body: <ImplementingJWT />,
        href: `${hrefFinder()}/post/2`
    },
    {
        id: 3,
        title: `title3`,
        titleDescription: truncate("afhaefhhhhhhhhhhhhhhhasdadsasdafhafgaef", `${hrefFinder()}/post/3`),
        body: `body3`,
        href: `${hrefFinder()}/post/3`
    },
]


export default BlogPostList;