import React, { useEffect, useState, useRef } from "react";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";

function App() {
    const [selected, setSelected] = useState("");

    const introRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        let observer;
        console.log(observer);
        if (
            introRef.current &&
            projectsRef.current &&
            skillsRef.current &&
            contactRef.current
        ) {
            const options = { threshold: 0.5 };
            observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (selected !== entry.target.id) {
                            setSelected(entry.target.id);
                        }
                    }
                });
            }, options);
            observer.observe(introRef.current);
            observer.observe(projectsRef.current);
            observer.observe(skillsRef.current);
            observer.observe(contactRef.current);
        }
        if (!observer) return () => observer.disconnect();
    }, [introRef, projectsRef, skillsRef, contactRef, selected]);

    return (
        <>
            <Header />
            <div className="contentWrapper">
                <Nav selected={selected} setSelected={setSelected} />
                <Intro introRef={introRef} />
                <Projects projectsRef={projectsRef} />
                <Skills skillsRef={skillsRef} />
            </div>

            <Footer contactRef={contactRef} />
        </>
    );
}

export default App;
