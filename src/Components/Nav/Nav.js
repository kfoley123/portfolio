import React from "react";
import "./Nav.css";
import cs from "classnames";

export default function Nav() {
    return (
        <>
            <nav className="nav">
                <ul
                    className={cs("navList", {
                        clicked: "selected",
                    })}
                >
                    <li>
                        <a href="#intro" className="">
                            Introduction
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#links" className="">
                            Links
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
