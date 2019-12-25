import React from "react";
import { Link } from "react-scroll";

import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

import "./Navbar.scss";

const NavItem = ({ name, to }) => (
    <Link
        className="inactive-navitem"
        activeClass="active-navitem"
        to={to}
        hashSpy={true}
        spy={true}
        smooth={true}
        duration={500}
    >
        {name}
    </Link>
);

const MediaIcons = () => (
    <div className="mediaIcons">
        <a href="https://github.com/EDsCODE">
            <FaGithub size={22}></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/eric-duong-074420154/">
            <FaLinkedinIn size={22}></FaLinkedinIn>
        </a>
        <a href="mailto:eric.duong@yale.edu">
            <FaEnvelope size={22}></FaEnvelope>
        </a>
    </div>
);

export const Navbar = () => (
    <div className="navbar">
        <NavItem to="about" name="ABOUT"></NavItem>
        <NavItem to="projects" name="PROJECTS"></NavItem>
        <MediaIcons></MediaIcons>
    </div>
);
