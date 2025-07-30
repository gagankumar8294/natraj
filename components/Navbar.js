"use client";

import { useState } from "react";
import Link from "next/link";
import '../components/Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO on the left */}
        <div className="logo">
          
        </div>

        {/* Hamburger on the right (for small devices) */}
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#cars" onClick={() => setMenuOpen(false)}>Cars</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#booking" onClick={() => setMenuOpen(false)}>Booking</a>
        </div>
      </div>
    </nav>
  );
}
