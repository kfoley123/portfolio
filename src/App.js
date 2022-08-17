import "./App.css";
import Nav from "./Components /Nav/Nav";
import Header from "./Components /Header/Header";
import Intro from "./Components /Intro/Intro";
import Projects from "./Components /Projects";
import Skills from "./Components /Skills";
import Footer from "./Footer";

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

export default App;
