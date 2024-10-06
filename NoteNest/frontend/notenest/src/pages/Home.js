import React from 'react';
import { Link } from "react-router-dom";
import '../style/Home.css';

function Home() {
  return (
    <div className="home d-flex flex-column justify-content-center align-items-center text-center">
      <div className="home-content">
        <h1 className="home-title">Welcome to NoteNest</h1>
        <p className="home-description">Your simple and elegant notes-taking app.</p>
        <p className="home-subtitle">Start organizing your thoughts and ideas today !!</p>
        <Link to="/notes" class="btn btn-outline-primary">Get Started</Link>
      </div>
    </div>
  );
}

export default Home;