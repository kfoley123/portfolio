import React from "react";
import "./Intro.css";
import profilePic from "../../Images/profilePic.jpeg";

export default function Intro() {
    return (
        <section id="intro" className="mainSection">
            <div className="spotlight">
                <div className="content">
                    <header>
                        <h2> Hi, I'm Kortney </h2>
                        <hr className="hRule" />
                    </header>
                    <p>
                        Thanks for stopping by my portfoloio site! I'm a full
                        stack developer located in Halifax, NS. Below you can
                        take a look at projects I've worked on and skills I've
                        developed while bringing those projects to life.
                    </p>
                </div>
                <span>
                    <img
                        className="image"
                        src={profilePic}
                        alt="headshot of Kortney Foley"
                    ></img>
                </span>
            </div>
        </section>
    );
}
