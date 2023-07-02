import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const location = useLocation();
    return (
        <header className="font-inter flex justify-between items-center px-8 lg:px-20 py-6 text-white bg-gradient-to-t from-black2 to-black">
            <span className="font-extrabold text-2xl lg:text-4xl">
                RecruitEase
            </span>
            <nav className="uppercase hidden lg:block">
                <ul className="flex gap-8 items-center">
                    <Link to="/">
                        <li
                            className={`${
                                location.pathname === "/"
                                    ? "selected relative"
                                    : ""
                            }`}
                        >
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li
                            className={`${
                                location.pathname === "/about"
                                    ? "selected relative"
                                    : ""
                            }`}
                        >
                            About
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li
                            className={`${
                                location.pathname === "/contact"
                                    ? "selected relative"
                                    : ""
                            }`}
                        >
                            Contact Us
                        </li>
                    </Link>
                    <Link to="/login">
                        <li
                            className={`${
                                location.pathname === "/login"
                                    ? "selected relative"
                                    : ""
                            }`}
                        >
                            Login / Register
                        </li>
                    </Link>
                    <Link to="/search">
                        <li
                            className={`${
                                location.pathname === "/search"
                                    ? "selected relative"
                                    : ""
                            }`}
                        >
                            Search
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}
