import React from "react";

export default function Footer() {
    return (
        <footer>
            <section>
                <h2>dfsdga</h2>
                <p>egbfriegthei fgiwg </p>
            </section>
            <section>
                <h2>Links</h2>
                <dl className="alt">
                    <dt>Location</dt>
                    <dd>Halifax, NS</dd>
                    <dt>Phone</dt>
                    <dd>902-219-4792</dd>
                    <dt>Email</dt>
                    <dd>kortney_foley@hotmail.com</dd>
                </dl>
                <ul className="icons">
                    <li>
                        {" "}
                        <a href="#" class="icon brands fa-github alt">
                            <span class="label">GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="icon brands alt">
                            <span class="label">LinkedIn </span>
                        </a>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </footer>
    );
}
