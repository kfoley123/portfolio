import "./App.css";
import Nav from "./Components /Nav/Nav";
import Header from "./Components /Header/Header";
import About from "./Components /About";
import Projects from "./Components /Projects";
import Skills from "./Components /Skills";
import Footer from "./Footer";

function App() {
    return (
        <>
            <Header />
            <div className="contentWrapper">
                <Nav />
                <About />
                <Projects />
                <Skills />
            </div>

            <Footer />
        </>
    );
}

export default App;
