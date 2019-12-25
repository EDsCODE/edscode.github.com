import React from "react";
import { Element } from "react-scroll";

import "./Projects.scss";

const ProjectItem = ({ title, subtitle, description, link }) => (
    <div className="project-item-container">
        <a href={link}>
            <h1>{title}</h1>
        </a>
        <p>{subtitle}</p>
        <p>{description}</p>
    </div>
);

export const Projects = () => (
    <Element className="element-section" name="projects">
        <ProjectItem
            link="https://apps.apple.com/us/app/gathr-social-events/id1476002981"
            title="gathr"
            subtitle="Flutter · Firebase · Graphql (Prisma)"
            description="gathr is currently under development. It will be a tool that makes social event planning effortless. Our current beta allows users to plan events through the app and automatically send text invites. Invitees can reply directly by texting back to confirm their attendance. We're working on applying NLP in parsing natural text-entry to discretize event information."
        ></ProjectItem>

        <ProjectItem
            title="Homecooked"
            link="https://www.newhavenindependent.org/index.php/archives/entry/new_app_booking_a_home-cooked_meal/"
            subtitle="React Native · NodeJS · Postgresql"
            description="Homecooked was a app dining platform that allowed users to search and book nearby dining events. The app fascilitated over 50 dining events/500 people in the local New Haven area. The app emphasized the social aspect of dining by highlighting the interests and bios of people who were attending an event."
        ></ProjectItem>

        <ProjectItem
            link="https://github.com/EDsCODE/Rope"
            title="Rope"
            subtitle="Swift · Firebase"
            description="Rope was an app that experimented with the idea of in-the-moment video-collage creation. Users on the app would initialize a session and add other people to their session by sharing a QR code. Participating members in the session would be able to take videos and add them to the rope. Once the rope expired or the alotted amount of videos were taken, the rope would close and become an instagram-story like video compilation of the videos."
        ></ProjectItem>
    </Element>
);
