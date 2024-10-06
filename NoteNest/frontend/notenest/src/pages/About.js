import React from 'react';
import { Link } from 'react-router-dom';
import '../style/About.css';

function About() {
  return (
    <>
      <div className="backtohome" style={{ margin: '20px'}}>
        <Link to="/" className="back-button">
          Back to Home
        </Link>
      </div>

      <div className="about">
        <h2>About NoteNest</h2>
        <p>
          NoteNest is designed to help you organize and manage your notes efficiently.
          Whether you're jotting down ideas or planning out tasks, NoteNest is the perfect tool for capturing your thoughts.
        </p>
      </div>
    </>
  );
}

export default About;