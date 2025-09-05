import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo-CN.png";
import logoWhite from "../../assets/images/logo-CN-W.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="Logo Colombia Noviolenta" className="nav-logo-img" />
        </div>

        <div className="nav-actions">
            <ul className="nav-links">
            <li>Products</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contacts</li>
            </ul>
            <button className="btn-signup">SIGN UP</button>
        </div>

        {/* Botón hamburguesa */}
        <div className="menu-icon" onClick={toggleMenu}>
            {open ? <FaTimes /> : <FaBars />}
        </div>

        {/* Sidebar */}
        <div className={`sidebar ${open ? "open" : ""}`}>
            <div className="sidebar-header">
                <img src={logoWhite} alt="Logo Colombia Noviolenta" className="sidebar-logo" />
            </div>

            <ul>
                <li>About</li>
                <li>Products</li>
                <li>Contacts</li>
                <li>Blog</li>
            </ul>

            {/* SIGN UP abajo */}
            <div className="sidebar-signup">
                <button className="btn-signup">SIGN UP</button>
            </div>

        </div>
    </nav>
  );
}
