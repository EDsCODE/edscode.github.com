import React from "react";
import { Element } from "react-scroll";

import profileImage from "../../assets/images/splatterprofile.png";

import "./About.scss";

export const About = () => (
    <Element className="element-section about-container" name="about">
        <img src={profileImage}></img>
        <h1>Eric Duong</h1>
        <p>I tinker with products and ideas!</p>
        <p>
            I'm a senior at Yale studying Math and Philosophy with significant
            computational coursework. Apart from theoretical and philosophical
            musings, I'm an avid developer. I stumbled into iOS (Swift)
            development upon entering college and have since run the gauntlet of
            mobile developent, moving from Swift to React Native to Flutter.
        </p>
        <p>
            In 2018, I cofounded Homecooked, a social dining startup. I was the
            sole developer and maintainer of the platform for over a year before
            shutting down. We were backed by Yale's Tsai Center of Innovative
            Thinking and Design, Collab New Haven, and won various local
            Connecticut startup competitions.
        </p>
        <p>
            My long-term goal is to use technology to provide solutions for
            causes. On my way there, I'm expanding my product skills in every
            way possible.
        </p>
    </Element>
);
