import { useState } from "react";
import "./styles/App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Submit from "./components/Submit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <div className="content"></div>
                <Routes>
                    <Route path="/" element={<Home />} exact></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/submit" element={<Submit />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
