import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import '../style/NoteDetail.css';
import axios from 'axios';

function NoteDetail() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const apiUrl = `http://localhost:3003/notes/${id}`;

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await axios.get(apiUrl);
                setData(response.data);
            }
            catch (error) {
                console.error("Error fetching note data:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to load note details!',
                });
            }
        };
        fetchNote();
    }, [id]);

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(apiUrl);
                    Swal.fire(
                        'Deleted!',
                        'The note has been deleted.',
                        'success'
                    ).then(() => {
                        navigate('/notes');
                    });
                }
                catch (error) {
                    console.error("Error deleting note:", error);
                    Swal.fire(
                        'Error!',
                        'There was a problem deleting the note.',
                        'error'
                    );
                }
            }
        });
    };

    const handleEdit = () => {
        navigate('/addNote', {
            state: {
                note: data
            }
        });
    };

    return (
        <div className="detail-note-page">
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <Link to="/notes" className="btn btn-info custom-btn">Back to List</Link>
                    <button className="btn btn-warning custom-btn m-3" onClick={handleEdit}>
                        Edit
                    </button>
                    <button className="btn btn-danger custom-btn" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <h6 className="text-muted mb-1">NoteID : {data.noteID}</h6>
                        <h1 className="text mb-3" style={{ color: '#0e4475' }}>Note : {data.title}</h1>
                        <p className="text-justify">{data.detail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoteDetail;