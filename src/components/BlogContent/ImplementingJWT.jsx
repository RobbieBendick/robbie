import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';

let ImplementingJWT = () => {

    return (
        <>
        <ul className="blog-post-list">
               <h4>Today we'll be using Node.js, along with the Express.js framework to implement bcrypt, JWT and other tips.</h4>
               <h5>Since bcrypt is used to hash passwords, you'll need a database connected to your node application. Most of this blog post will assume you have a database already connected.</h5>
               <li>First let's install our packages that we'll be using. <ul><li className="sub-bullet-point"><code>npm i @hapi/joi bcryptjs dotenv jsonwebtoken express</code></li></ul></li>
               <li>Create a new file named <b>validation.js</b> 
                    <SyntaxHighlighter className="cancel" language="javascript">{
`const Joi = require('@hapi/joi');

const registerValidation = data => {
    const schema = Joi.object({ 
        username: Joi.string() .min(6) .required(),
        email: Joi.string() .min(6) .required() .email(),
        password: Joi.string() .min(6) .required() 
    });
    return schema.validate(data)
}


const loginValidation = data => {
    const schema = Joi.object({ 
        email: Joi.string() .min(6) .required() .email(),
        password: Joi.string() .min(6) .required() 
    });
    return schema.validate(data)
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
`}</SyntaxHighlighter></li>
        <li>Let's use Joi to help validate our data in our schema. In my case, I want to make sure the email username, email and password are atleast 6 characters long, and to make sure the email is a valid email.</li>
        <li>Now we'll create a /register post route and I'll go through the code step by step.
            <SyntaxHighlighter language="javascript" className="cancel">
{
`const { registerValidation, loginValidation } = require("../validation");
var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res, next) => {
    try {  
        // Validate data before we make a user
        const {error} = registerValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message);

        // Check if email exists
        const emailExists = await User.findOne({email: req.body.email});
        if (emailExists) return res.status(400).send("Email already exists");

        // Check if username exists
        const usernameExists = await User.findOne({username: req.body.username});
        if (usernameExists) return res.status(400).send("Username already exists");

        // Hash PW
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create a new user
        const user = new User({
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword
        });

        // Save user to the database
        user.save();
    } catch (error) {
        res.status(400).send(error);
    }
}
`}</SyntaxHighlighter></li>
        <li>When somebody sends a POST request to our /register route, we are checking to see if there are any validation errors in our schema.
            <ul>
                <li className="sub-bullet-point">
                    <code>
                        {`const {error} = registerValidation(req.body);`}<br></br>
                        {`if (error) return res.status(400).send(error.details[0].message);`}
                    </code>
                </li> 
            </ul>
        </li>
        <li>Check if the email or username already exists in the database. 
        <ul>
            <li className="sub-bullet-point">
                <code>
                    {`const emailExists = await User.findOne({email: req.body.email});`}<br></br>
                    {'if (emailExists) return res.status(400).send("Email already exists");'}
                </code>
            </li>
            <li className="sub-bullet-point">
                <code>
                    {`const usernameExists = await User.findOne({username: req.body.username});`}<br></br>
                    {'if (usernameExists) return res.status(400).send("Username already exists");'}
                </code>
            </li>
        </ul>

        </li>
        <li>Before you save the user into your database, hash the password! So first we have to generate the salt.<ul><li className="sub-bullet-point"><code>const salt = await bcrypt.genSalt(10);</code></li> <li className="sub-bullet-point">(10 being the amount of times we want to 'salt' the password).</li></ul></li>
        <li>Now that we've generated the salt, we need to turn the user's password into a hash.<ul><li className="sub-bullet-point"><code>const hashedPassword = await bcrypt.hash(req.body.password, salt);</code></li></ul></li>
        <li>We have successfully hashed a user's password! We can now save the user with the new hashed password to our database. <ul><li className="sub-bullet-point"><code>user.save();</code></li></ul></li>
    </ul>
    <h3 style={{'padding': '15px 0'}} className="light-slate-color">Now for the /login route</h3>
    <SyntaxHighlighter >
        {
`router.post("/login", async (req, res) => {

    // Validate data
    const {error} = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    // Check if email exists
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send("Email is not found");

    // Check if PW matches
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid password");
    res.send("Success!")

    // Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});`
        }
    </SyntaxHighlighter>
    <ul className="blog-post-list">
        <li>
            Here we are doing the same data validation and email checks as before, but now we are using bcrypt to check if the password from our database matches the one that was typed in.
            <ul>
                <li className="sub-bullet-point">
                    <code>
                    const validPass = await bcrypt.compare(req.body.password, user.password);<br></br>
                    if (!validPass) return res.status(400).send("Invalid password");
                    </code>
                </li>
            </ul>
        </li>
        <li>If the passwords match, create a JWT token and assign it to the user.<ul>
                <li className="sub-bullet-point">
                    <code>  {`const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);`}<br></br>
                            {`res.header('auth-token', token).send(token);`}
                    </code>
                </li>
            </ul></li>
        <li>Congratulations! We have just implemented a fast and easy way to secure your applications!</li>
    </ul>
    </>
    )
}


export default ImplementingJWT;