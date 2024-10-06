import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../style/AddNote.css';

function AddNote() {
    const [data, setData] = useState({ noteID: "", title: "", detail: "" });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.note) {
            setData(location.state.note);
        }
    }, [location.state]);

    const handleSubmit = async () => {
        if (!data.noteID || !data.title || !data.detail) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all the fields!',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Okay'
            });
            return;
        }

        const apiUrl = location.state && location.state.note
            ? `http://localhost:3003/notes/${data.noteID}`
            : "http://localhost:3003/notes";


        try {
            const response = await axios({
                method: location.state && location.state.note ? "put" : "post",
                url: apiUrl,
                data: data,
                headers: { "Content-Type": "application/json" }
            });

            Swal.fire({
                icon: 'success',
                title: location.state && location.state.note ? 'Updated!' : 'Submitted!',
                text: location.state && location.state.note ? 'Note details updated successfully!' : 'Note details submitted successfully!',
                showConfirmButton: true,
                confirmButtonColor: '#28a745',
                confirmButtonText: 'Great!'
            }).then(() => {
                navigate('/notes');
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an error submitting your data. Please try again.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Okay'
            });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const form = e.target.form;
            const index = Array.prototype.indexOf.call(form, e.target);
            form.elements[index + 1]?.focus();
            e.preventDefault();
        }
    };

    return (
        <>
            <div className='backtohome' style={{ margin: '20px' }}>
                <Link to="/" className="back-button">
                    Back to Home
                </Link>
            </div>
            <div className="add-note-container">
                <h2 className="add-note-title">{location.state && location.state.note ? 'Edit Note Details' : 'Add a new Note'}</h2>
                <form className="add-note-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        className="form-control note-title"
                        value={data.noteID}
                        onChange={(e) => setData({ ...data, noteID: e.target.value })}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter Note ID"
                    />
                    <input
                        type="text"
                        name="title"
                        className="form-control note-title"
                        placeholder="Enter Title"
                        value={data.title}
                        onChange={(e) => setData({ ...data, title: e.target.value })}
                        onKeyDown={handleKeyDown}
                    />
                    <textarea
                        name="description"
                        className="form-control note-detail"
                        placeholder="Enter Details"
                        value={data.detail}
                        onChange={(e) => setData({ ...data, detail: e.target.value })}
                        onKeyDown={handleKeyDown}
                    ></textarea>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="btn btn-primary btn-block">
                        {location.state && location.state.note ? 'Update Note' : 'Add Note'}
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddNote;