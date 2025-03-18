import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Game from "./components/Game";

function App() {
    const isAuthenticated = !!localStorage.getItem("user");

    // Hide spinner when the app loads
    useEffect(() => {
        const spinner = document.getElementById("loading-spinner");
        if (spinner) spinner.style.display = "none";
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={isAuthenticated ? <Navigate to="/game" /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/game" element={isAuthenticated ? <Game /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
