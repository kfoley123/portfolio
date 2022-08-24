import React from "react";
import "./Skills.css";

export default function Skills() {
    return (
        <section id="skills" className="skillsSection">
            <header className="skillsHeader">
                <h1>Skills</h1>
                <p></p>
                <hr className="horizontalRuleB"></hr>
            </header>
            <ul className="skills">
                <li className="styleA">
                    <i class="devicon-html5-plain"></i>
                    <strong>HTML</strong>
                </li>
                <li className="styleB">
                    <i class="devicon-css3-plain"></i>
                    <strong>CSS</strong>
                </li>
                <li className="styleC">
                    <i class="devicon-javascript-plain"></i>
                    <strong>Javascript</strong>
                </li>
                <li className="styleD">
                    <i class="devicon-react-original"></i>
                    <strong>React</strong>
                </li>
                <li className="styleE">
                    <i class="devicon-python-plain"></i>
                    <strong>Python</strong>
                </li>
                <li className="styleF">
                    <i class="devicon-django-plain"></i>
                    <strong>Django</strong>
                </li>
            </ul>
            <p className="skillsContent">
                I started learning how to program by making a text-based
                choose-your-own-adventure game in Python. Its a far cry from
                Game of the Year, but but made me realize I wanted to become a
                programmer. Realizing that, I more seriously started delevoping
                my knowledge of HTML, CSS and Javascript with online challenges
                such as JS30, FreeCodeCamp and Scrimba. I also continued making
                more projects from scratch. I've completed almost 40 projects so
                far!
                <br></br>
                More recently I've been building apps with React, focusing on
                those that manipulate data from APIs. My most recent project is
                a Pokemon Card database (linked above), which utilizes a React
                frontend with a Django REST API and a SQLite database. Learning
                front end as well as back end was a huge goal for me, so that
                was a satisfying project to have under my belt. I'm very eager
                to continue learning and developing my skills to become the best
                programmer I can!
            </p>
        </section>
    );
}
