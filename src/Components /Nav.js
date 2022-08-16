import React from "react";

export default function Nav() {
    return (
        <>
            <nav>
                <ul>
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
