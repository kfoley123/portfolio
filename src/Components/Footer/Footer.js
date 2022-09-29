import React from "react";
import "./Footer.css";
import emailIcon from "../../Images/emailIcon.png";

export default function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer>
            <section id="contact">
                <ul className="icons">
                    <li>
                        <a
                            aria-label="GitHub"
                            href="https://github.com/kfoley123"
                            className="socialIcon fa-github alt"
                        >
                            <i className="devicon-github-original"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            aria-label="LinkedIn"
                            href="https://www.linkedin.com/in/kortney-foley/"
                            className="socialIcon"
                        >
                            <i className="devicon-linkedin-plain"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:kortney_foley@hotmail.com"
                            className="socialIcon"
                        >
                            <img
                                className="linksIcon"
                                src={emailIcon}
                                alt="white email icon"
                            />
                        </a>
                    </li>
                </ul>
            </section>

            <section className="linksText">
                <h2>Thank you for your time!</h2>
                <span>
                    Wow! You made it to the bottom! Thanks so much for taking
                    the time to peruse my portfolio site. If you have any
                    questions or follow-up feel free to reach out.
                </span>
                <p>Copyright ⓒ {year} Kortney Foley</p>
            </section>
        </footer>
    );
}
