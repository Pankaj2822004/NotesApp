import React from 'react';
import './About.css'; // Import CSS styles for the About component
import { useEffect } from 'react';
const About = () => {
  useEffect(() => {
    document.body.classList.add("about-page");

    return () => {
      document.body.classList.remove("about-page");
    };
  }, []);

  return (
    <div className="about-container">
      <h2>About This App</h2>
      <div className="about-description">
        <p>
          This is a simple note-taking application built with React. It allows
          you to create, edit, and manage your notes in a user-friendly
          interface.
        </p>
      </div>
      <div className="about-features">
        <h3>Features:</h3>
        <ul>
          <li>Add new notes</li>
          <li>Edit existing notes</li>
          <li>Delete notes</li>
        </ul>
      </div>
      <div className="about-tech">
        <h3>Technologies used:</h3>
        <ul>
          <li>React (Frontend , Backend)</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
      <div className="about-author">
        <p>
          Created by: Pankaj Pandey
          <br />
          Date: April 2024
        </p>
      </div>
    </div>
  );
};

export default About;
