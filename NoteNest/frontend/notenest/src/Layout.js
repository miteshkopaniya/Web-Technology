import { Link, Outlet } from "react-router-dom";
import './style/Layout.css';

function Layout() {
    return (
        <div className='layout-container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <h1 className="navbar-title">NoteNest</h1>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/notes" className="nav-link">Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addNote" className="nav-link">Add Note</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;