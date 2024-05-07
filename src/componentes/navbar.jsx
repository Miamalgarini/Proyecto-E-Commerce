import React from 'react';
import './navbar.css';



function Navbar() {
    return (
        <nav className="navbar">
            <a href="#">Productos</a>
            <a href="#">Nosotros</a>
            <a href="#">Contacto</a>
            <div className="container">
                <a className="navbar-brand text-uppercase" href="/">Nuestros productos
                </a>
            </div>
        </nav>




    );
}

export default Navbar; 