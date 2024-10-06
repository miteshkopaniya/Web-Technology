import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Notes from './pages/Notes';
import NoteDetail from './pages/NoteDetail';
import AddNote from './pages/AddNote';
import About from './pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/note/:id" element={<NoteDetail />} />
        <Route path="/addNote" element={<AddNote />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);