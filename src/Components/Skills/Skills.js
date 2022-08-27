import React from "react";
import "./Skills.css";

export default function Skills() {
    return (
        <section id="skills" className="skillsSection">
            <header className="skillsHeader">
                <h2>Skills</h2>
                <p></p>
                <hr className="horizontalRuleB"></hr>
            </header>
            <ul className="skills">
                <li className="styleA">
                    <i className="devicon-html5-plain"></i>
                    <strong>HTML</strong>
                </li>
                <li className="styleB">
                    <i className="devicon-css3-plain"></i>
                    <strong>CSS</strong>
                </li>
                <li className="styleC">
                    <i className="devicon-javascript-plain"></i>
                    <strong>Javascript</strong>
                </li>
                <li className="styleD">
                    <i className="devicon-react-original"></i>
                    <strong>React</strong>
                </li>
            </ul>
            <div className="skillsContent">
                <p>
                    I started learning how to program by making a text-based
                    choose-your-own-adventure game in Python. Its a far cry from
                    Game of the Year, but but made me realize I wanted to become
                    a programmer. Following that, I more seriously started
                    delevoping my knowledge of HTML, CSS and Javascript with
                    online challenges such as JS30, FreeCodeCamp and Scrimba. I
                    also continued making more projects from scratch. I've
                    completed almost 40 projects so far!
                </p>
                <p>
                    I use GitHub to back up my projects and have experience
                    making branches for completing different tasks. I have a
                    mentor go through my code after making pull requests so I
                    can make corrections as needed before merging branches to my
                    master file.
                </p>

                <p>
                    More recently I've been building apps with React, focusing
                    on those that manipulate data from APIs. My most recent
                    project is a Pokemon Card database (linked above), which
                    utilizes a React frontend with a Django REST API and a
                    SQLite database. Learning front end as well as back end was
                    a huge goal for me, so that was a satisfying project to have
                    under my belt. I'm very eager to continue learning and
                    developing my skills to become the best programmer I can!
                </p>
            </div>

            <ul className="skills">
                <li className="styleE">
                    <i className="devicon-python-plain"></i>
                    <strong>Python</strong>
                </li>
                <li className="styleF">
                    <i className="devicon-django-plain"></i>
                    <strong>Django</strong>
                </li>
                <li className="styleG">
                    <i className="devicon-sqlite-plain"></i>

                    <strong>SQLite</strong>
                </li>
                <li className="styleH">
                    <i className="devicon-git-plain"></i>

                    <strong>Git</strong>
                </li>
            </ul>
        </section>
    );
}