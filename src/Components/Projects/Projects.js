import React from "react";
import "./Projects.css";
import PokeBattle from "../../Images/pokemonBattle.png";
import AnimeApp from "../../Images/AnimeApp.png";
import WizardHat from "../../Images/wizardHat.jpg";
import Calculator from "../../Images/Calculator.png";
import podcast from "../../Images/HUGELogo.png";
import PKMNCard from "../../Images/pokemoncard.png";

export default function Projects() {
    return (
        <section id="projects" className="projectsSection">
            <h2 className="projectsTitle">Projects</h2>
            <hr className="horizontalRule"></hr>
            <ul className="projectsContainer">
                <li className="project">
                    <div className="iconContainer">
                        <a href="https://github.com/kfoley123/FirstRunWiz/blob/main/README.md/">
                            <img
                                src={WizardHat}
                                alt="wizardHatLogo"
                                className="icon"
                            />
                        </a>
                    </div>

                    <a href="https://github.com/kfoley123/FirstRunWiz/blob/main/README.md/">
                        <h3>First Run Wizard Demo </h3>
                    </a>
                    <p>
                        A mobile app showcasing some UI features that I built in
                        React Native. The user creates a new profile using a
                        First Run Wizard on the initial load of the app and
                        keeps the data in local storage. Existing users can log
                        back in to update their settings.
                        <br></br>
                        Made with React Native and TypeScript.
                    </p>
                </li>
                <li className="project">
                    <div className="iconContainer">
                        <a href="https://www.hoppedupeast.com/">
                            <img
                                src={podcast}
                                alt="HUGElogo"
                                className="icon"
                            />
                        </a>
                    </div>

                    <a href="https://www.hoppedupeast.com/">
                        <h3>Hopped Up Gaming: East Website</h3>
                    </a>
                    <p>
                        Website for the Hopped Up Gaming East Podcast. First
                        client project as freelancer for a local beer and video
                        game podcast group.
                        <br></br>
                        Made with React.
                    </p>
                </li>
                <li className="project">
                    <div className="iconContainer">
                        <a href="https://liveversion--gleeful-sprite-fe99aa.netlify.app/">
                            <img
                                src={PKMNCard}
                                alt="line art of two pokemon cards "
                                className="icon"
                            />
                        </a>
                    </div>

                    <a href="https://liveversion--gleeful-sprite-fe99aa.netlify.app/">
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
                    <div className="iconContainer">
                        <a href="https://anime-finder.kortney.site">
                            <img
                                src={AnimeApp}
                                alt="line art of heart"
                                className="icon"
                            />
                        </a>
                    </div>

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
                    <div className="iconContainer">
                        <a href="https://pokemon-battle.kortney.site">
                            <img
                                src={PokeBattle}
                                alt="line art of pokeball"
                                className="icon"
                            />
                        </a>
                    </div>

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
                    <div className="iconContainer">
                        <a href="https://tip-calc.kortney.site">
                            <img
                                src={Calculator}
                                alt="line art of calculator"
                                className="icon"
                            />
                        </a>
                    </div>

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
            </ul>
            <div className="buttonContainer">
                <form action="https://github.com/kfoley123" method="get">
                    <button>See More</button>
                </form>
            </div>
        </section>
    );
}
