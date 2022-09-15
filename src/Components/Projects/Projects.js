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
            <h2 className="projectsTitle">Projects</h2>
            <hr className="horizontalRule"></hr>
            <ul className="projectsContainer">
                <li className="project">
                    <a href="https://github.com/kfoley123/pokemoncard_frontend">
                        <img
                            src={PKMNCard}
                            alt="line art of two pokemon cards "
                            className="icon"
                        />
                    </a>
                    <a href="https://github.com/kfoley123/pokemoncard_frontend">
                        <h3>Pokemon Card Database</h3>
                    </a>

                    <p>
                        Uses a SQLite database to store pokemon cards and a
                        Django REST API to access/modify them. Users can log in
                        to view all cards, filter for specific types and save
                        their own collections.
                        <br></br>
                        Made with React, SQlite and Django.
                    </p>
                </li>
                <li className="project">
                    <a href="https://anime-finder.kortney.site">
                        <img
                            src={AnimeApp}
                            alt="line art of heart"
                            className="icon"
                        />
                    </a>

                    <a href="https://anime-finder.kortney.site">
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
                    <a href="https://pokemon-battle.kortney.site">
                        <img
                            src={PokeBattle}
                            alt="line art of pokeball"
                            className="icon"
                        />
                    </a>
                    <a href="https://pokemon-battle.kortney.site">
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
                    <a href="https://tip-calc.kortney.site">
                        <img
                            src={Calculator}
                            alt="line art of calculator"
                            className="icon"
                        />
                    </a>

                    <a href="https://tip-calc.kortney.site">
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
                    <a href="https://what-to-eat.kortney.site">
                        <img
                            src={WhatToEat}
                            alt="line art of fork and knife"
                            className="icon"
                        />
                    </a>
                    <a href="https://what-to-eat.kortney.site">
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
                    <a href="https://travel-journal.kortney.site">
                        <img
                            src={Plane}
                            alt="airplane silhouette"
                            className="icon"
                        />
                    </a>

                    <a href="https://travel-journal.kortney.site">
                        <h3>Travel Blog</h3>
                    </a>
                    <p>
                        Shows travel blog entries for some of my favourite
                        vacation destinations. Allows the user to upload a new
                        blog post into local storage.
                        <br></br>
                        Made with React.
                    </p>
                </li>
            </ul>
            <div className="buttonContainer">
                <a href="https://github.com/kfoley123">
                    <button>See More</button>
                </a>
            </div>
        </section>
    );
}
