import "./BlogPostList.scss";
import SettingUpMongoDB from "../BlogContent/SettingUpMongoDB"

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
        tempTxt = txt.substring(0,80) + " ...";
        isShortened = true;
    }
    return isShortened ? <div> {tempTxt} <a className="light-green-color" href={href}>Read More</a></div> : txt;
}
let BlogPostList = [
    {
        id: 1,
        title: "Setting Up MongoDB",
        titleDescription: truncate("Download the latest MSI file version of MongoDB from their official site, Inside your C: directory, create a new folder named ", `${process.env.PUBLIC_URL}/#/post/1`),
        body: <SettingUpMongoDB />,
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