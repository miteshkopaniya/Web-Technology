const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const noteSchema = require('./model/noteSchema');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected !!'))
    .catch(err => console.error(err));

// GetAll
app.get('/notes', async (req, res) => {
    const notes = await noteSchema.find();
    res.send(notes);
});

//GetByID
app.get('/notes/:id', async (req, res) => {
    const note = await noteSchema.findOne({noteID:req.params.id});
    res.send(note);
});

// Add_Note
app.post('/notes', async (req, res) => {
    const note = new noteSchema({ ...req.body });
    const newNote = await note.save();
    res.send(newNote);
});

// Delete_Note
app.delete('/notes/:noteID', async (req, res) => {
    const note = await noteSchema.deleteOne({noteID:req.params.noteID});
    res.send({message:'Note deleted successfully'});
});

// Update_Note
app.put('/notes/:bookID', async (req, res) => {
    const updatedNote = await noteSchema.findOneAndUpdate({noteID: req.params.noteID},req.body,{new:true});
    res.send(updatedNote);
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});