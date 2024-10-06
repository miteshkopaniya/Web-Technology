import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../style/Notes.css';

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await axios.get("http://localhost:3003/notes");
      setNotes(res.data);
    };
    fetchNotes();
  }, []);

  return (
    <>
      <div className='backtohome' style={{ margin: '20px' }}>
        <Link to="/" className="back-button">
          Back to Home
        </Link>
      </div>
      <div className="notes">
        <h2 className="notes-title">Your Notes</h2>
        <div className="notes-list">
          {notes.length > 0 ? (
            notes.map((note) => (
              <div className="note-card shadow" key={note.noteID}>
                <h3 className="note-card-title">Note : {note.title}</h3>
                <p className="note-card-description">Date : {note.createdAt}</p>
                <Link className="btn btn-outline-primary" to={`/note/${note.noteID}`}>Read More</Link>
              </div>
            ))
          ) : (
            <p className="no-notes-text">No notes available. Please add some notes.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Notes;