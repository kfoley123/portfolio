import React from "react";
import "./Nav.css";
import cs from "classnames";

export default function Nav(props) {
    const { selected, setSelected } = props;

    return (
        <>
            <nav className="nav">
                <ul className="navList">
                    <li
                        className={cs({
                            clicked: selected === "intro",
                        })}
                    >
                        <a onClick={() => setSelected("intro")} href="#intro">
                            Introduction
                        </a>
                    </li>
                    <li
                        className={cs({
                            clicked: selected === "projects",
                        })}
                    >
                        <a
                            onClick={() => setSelected("projects")}
                            href="#projects"
                        >
                            Projects
                        </a>
                    </li>
                    <li
                        className={cs({
                            clicked: selected === "skills",
                        })}
                    >
                        <a onClick={() => setSelected("skills")} href="#skills">
                            Skills
                        </a>
                    </li>
                    <li
                        className={cs({
                            clicked: selected === "contact",
                        })}
                    >
                        <a
                            onClick={() => setSelected("contact")}
                            href="#contact"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
