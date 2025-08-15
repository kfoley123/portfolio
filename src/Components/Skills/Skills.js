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
                <li className="skillsBoxStyleA">
                    <i className="devicon-html5-plain"></i>
                    <strong>HTML</strong>
                </li>
                <li className="skillsBoxStyleB">
                    <i className="devicon-css3-plain"></i>
                    <strong>CSS</strong>
                </li>
                <li className="skillsBoxStyleC">
                    <i className="devicon-javascript-plain"></i>
                    <strong>Javascript</strong>
                </li>
                <li className="skillsBoxStyleD">
                    <i className="devicon-react-original"></i>
                    <strong>React</strong>
                </li>
            </ul>
            <div className="skillsContent">
                <p>
                    I started learning how to program by making a text-based
                    choose-your-own-adventure game in Python. It's a far cry from
                    Game of the Year, but it made me realize I wanted to become
                    a programmer. Following that, I more seriously started
                    developing my knowledge of HTML, CSS and Javascript with
                    online challenges such as JS30, FreeCodeCamp and Scrimba. I
                    also continued making more projects from scratch. I've
                    completed almost 40 projects so far!
                </p>
                <p>
                    I have been using Git for version control since day one, and
                    have experience making branches for different tasks, which I
                    push to my GitHub. I have a mentor go through my code after
                    making pull requests so I can make corrections as needed to
                    each branch before merging them to my master branch.
                </p>

                <p>
                    To make my learning experience as much like a real workplace
                    as possible, I planned everything out using Agile
                    methodology. I organized tasks into two week sprints
                    monitored with a Trello board. Tasks were assigned points
                    based on complexity. At the end of each sprint I met with my
                    mentor to discuss things that went well and areas that
                    needed attention.
                </p>

                <p>
                    After starting out through self-learning, I chose to formalize my education to strengthen my foundation. I recently graduated with honours from the IT Web Programming program at NSCC and am currently completing my second work term at Resulta, gaining real-world experience in a collaborative office environment. I'm passionate about continuing to learn and growing as a developer.
                </p>
            </div>

            <ul className="skills">
                <li className="skillsBoxStyleE">
                    <i className="devicon-python-plain"></i>
                    <strong>Python</strong>
                </li>
                <li className="skillsBoxStyleF">
                    <i className="devicon-django-plain"></i>
                    <strong>Django</strong>
                </li>
                <li className="skillsBoxStyleG">
                    <i className="devicon-sqlite-plain"></i>

                    <strong>SQLite</strong>
                </li>
                <li className="skillsBoxStyleH">
                    <i className="devicon-git-plain"></i>

                    <strong>Git</strong>
                </li>
            </ul>
        </section>
    );
}
