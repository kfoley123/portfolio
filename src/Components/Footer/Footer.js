import React from "react";
import "./Footer.css";
import emailIcon from "../../Images/emailIcon.png";

export default function Footer() {
    return (
        <footer>
            <section id="links">
                <ul className="icons">
                    <li>
                        <a
                            href="https://github.com/kfoley123"
                            className="icon fa-github alt"
                        >
                            <i className="devicon-github-original"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/kortney-foley/"
                            className="icon"
                        >
                            <i className="devicon-linkedin-plain"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:kortney_foley@hotmail.com"
                            className="icon"
                        >
                            <img
                                className="linksIcon"
                                src={emailIcon}
                                alt="white email logo"
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
                    questions or follow-up feel free to reach out to me via any
                    of the channels linked above.
                </span>
                <p>Copyright ⓒ 2022 Kortney Foley</p>
            </section>
        </footer>
    );
}
