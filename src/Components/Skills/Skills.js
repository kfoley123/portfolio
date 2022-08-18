import React from "react";
import "./Skills.css";

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
                    <span></span>
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
            <p className="content">
                I started by making a few basic projects in python. From there I
                delevoped my knowledge of HTML, CSS and Javascript. More
                recently I've been focusing on building apps in React, focusing
                on those that manipulate data from APIs.
            </p>
        </section>
    );
}
