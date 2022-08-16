import React from "react";

export default function Skills() {
    return (
        <section>
            <header className="major">
                <h2>Skills</h2>
                <p></p>
            </header>
            <ul className="statistics">
                <li>
                    <span></span>
                    <strong>HTML</strong>
                </li>
                <li>
                    <span></span>
                    <strong>CSS</strong>
                </li>
                <li>
                    <span></span>
                    <strong>Javascript</strong>
                </li>
                <li>
                    <span></span>
                    <strong>React</strong>
                </li>
                <li>
                    <span>Python</span>
                    <strong></strong>
                </li>
            </ul>
            <p className="content">
                {" "}
                I started by making a few basic projects in python. From there I
                delevoped my knowledge of HTML, CSS and Javascript. More
                recently I've been focusing on building apps in React, focusing
                on those that manipulate data from APIs.{" "}
            </p>
        </section>
    );
}
