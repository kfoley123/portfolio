import React from "react";
import "./Nav.css";
import Scrollspy from "react-scrollspy";

export default function Nav() {
    return (
        <nav className="nav">
            <Scrollspy
                className="navList"
                items={["intro", "projects", "skills", "contact"]}
                currentClassName="clicked"
            >
                <li>
                    <a href="#intro">Introduction</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </Scrollspy>
        </nav>
    );
}
