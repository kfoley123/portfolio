import React from "react";
import "./Projects.css";
import PokeBattle from "../../Images/pokemonBattle.png";
import AnimeApp from "../../Images/AnimeApp.png";
import WhatToEat from "../../Images/WhatToEat.png";
import Calculator from "../../Images/Calculator.png";
import Plane from "../../Images/plane.webp";
import PKMNCard from "../../Images/pokemoncard.png";

export default function Projects() {
    return (
        <section id="projects" className="projectsSection">
            <h1 className="projectsTitle">Projects</h1>
            <hr className="horizontalRule"></hr>
            <ul className="projectsContainer">
                <li className="project">
                    <a
                        href="https://chipper-otter-f36709.netlify.app/"
                        className=""
                    >
                        <img src={PKMNCard} alt="" className="icon" />
                    </a>
                    <a href="https://chipper-otter-f36709.netlify.app/">
                        <h3>Pokemon Card Database</h3>
                    </a>

                    <p>
                        Uses a Django REST API to store pokemon cards. Users can
                        log in to view all cards, filter for specific types and
                        save their own collections.
                        <br></br>
                        Made with React and Django.
                    </p>
                </li>
                <li className="project">
                    <a
                        href="https://chipper-otter-f36709.netlify.app/"
                        className=""
                    >
                        <img src={AnimeApp} alt="" className="icon" />
                    </a>

                    <a
                        href="https://chipper-otter-f36709.netlify.app/"
                        className=""
                    >
                        <h3>Anime Finder App</h3>
                    </a>

                    <p>
                        Hits an anime API that allows you to search for anime
                        titles by keyword, rating, production type and/or airing
                        status. Hover view lets you read synopsis and watch the
                        trailer.
                        <br></br>
                        Made with React.
                    </p>
                </li>
                <li className="project">
                    <a
                        href="https://dashing-lokum-972c9b.netlify.app/"
                        className=""
                    >
                        <img src={PokeBattle} alt="" className="icon" />
                    </a>
                    <a
                        href="https://dashing-lokum-972c9b.netlify.app/"
                        className=""
                    >
                        <h3>Pokemon Battle</h3>
                    </a>

                    <p>
                        Simulates a pokemon battle from a gameboy-style game.
                        Selects a random pokemon for each player and opponents
                        attacks are chosen randomly too! Battle until one player
                        is KO-ed!
                        <br></br>
                        Made with React.
                    </p>
                </li>
                <li className="project">
                    <img src={Calculator} alt="" className="icon" />
                    <a href="https://chimerical-bunny-9a118c.netlify.app/">
                        <h3>Tip Calulator</h3>
                    </a>
                    <p>
                        Calculator that lets you know how much each person owes
                        after selecting a tip percentage and the number of
                        people splitting the bill
                        <br></br>
                        Made with React.
                    </p>
                </li>
                <li className="project">
                    <a
                        href="https://effortless-peony-f87dfb.netlify.app/"
                        className=""
                    >
                        <img src={WhatToEat} alt="" className="icon" />
                    </a>
                    <a
                        href="https://effortless-peony-f87dfb.netlify.app/"
                        className=""
                    >
                        <h3>What to Eat Tonight</h3>
                    </a>

                    <p>
                        Hits an API to generate a random recipe that answers the
                        question, what to eat tonight? Displays type of food,
                        full recipe and instructions.
                        <br></br>
                        Made with React.
                    </p>
                </li>
                <li className="project">
                    <img src={Plane} alt="" className="icon" />
                    <h3>Travel Blog</h3>
                    <p>
                        Shows travel blog entries for some of my favourite
                        vacation destinations. Allows the user to upload a new
                        blog post into local storage.
                        <br></br>
                        Made with React.
                    </p>
                </li>
            </ul>
        </section>
    );
}
