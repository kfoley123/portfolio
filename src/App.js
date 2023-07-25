import React from "react";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <div className="contentWrapper">
                <Nav />
                <Intro />
                <Projects />
                <Skills />
            </div>

            <Footer />
        </>
    );
}
//TODO: note for test

export default App;
