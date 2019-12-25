import React from "react";
import { Element } from "react-scroll";
import "./App.scss";

import { Navbar, Projects, About } from "./components";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <div className="scroll-container">
                <About></About>
                <Projects></Projects>
            </div>
        </div>
    );
}

export default App;
