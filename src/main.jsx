import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import ContactUs from "./ContactUs";
import LoginRegister from "./LoginRegister";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/login" element={<LoginRegister />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
