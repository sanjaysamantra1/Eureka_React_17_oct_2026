import { NavLink } from "react-router"
import "./Navbar.css";

export default function Navbar() {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/aboutus">AboutUs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/careers">Careers</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users">Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
}