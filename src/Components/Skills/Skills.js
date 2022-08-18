import React from "react";
import "./Skills.css";
import HTML from "../../Images/HTML.png";

export default function Skills() {
    return (
        <section id="skills" className="skillsSection">
            <header className="skillsHeader">
                <h1>Skills</h1>
                <p></p>
                <hr className="horizontalRule"></hr>
            </header>
            <ul className="skills">
                <li className="styleA">
                    <img className="skillsIcon" src={HTML} alt="logo" />
                    <strong>HTML</strong>
                </li>
                <li className="styleB">
                    <span></span>
                    <strong>CSS</strong>
                </li>
                <li className="styleC">
                    <span></span>
                    <strong>Javascript</strong>
                </li>
                <li className="styleD">
                    <span></span>
                    <strong>React</strong>
                </li>
                <li className="styleE">
                    <span></span>
                    <strong>Python</strong>
                </li>
            </ul>
            <p className="skillsContent">
                I started learning how to program by making a text-based
                choose-your-own-adventure adventure game in python. From there I
                delevoped my knowledge of HTML, CSS and Javascript by doing some
                online challenges (JS30, FreeCodeCamp and Scrimba) along with
                some of my own projects. So far I've completed almost 40
                projects in total. More recently I've been focusing on building
                apps in React, especially those that manipulate data from APIs.
                My most recent project is the Pokemon Card database (linked
                above), which utilizes a React frontend with a Django REST API
                and a SQLite database. I'm very eager to continue developing my
                skills and becoming the best programmer I can!
            </p>
        </section>
    );
}
