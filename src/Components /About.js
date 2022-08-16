import React from "react";
import cat from "../Images/Cat.jpeg";

export default function About() {
    return (
        <section id="intro" className="main">
            <div className="spotlight">
                <div className="content">
                    <header>
                        <h2> Kortney Foley Portfolio </h2>
                    </header>
                    <p>I'm a front-end developer located in Halifax, NS. </p>
                </div>
                <span className="image">
                    <img
                        className="image"
                        src={cat}
                        alt="headshot of Kortney Foley"
                    ></img>
                </span>
            </div>
        </section>
    );
}
