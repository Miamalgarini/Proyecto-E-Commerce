import React from 'react';
import './navbar.css'


function Navbar() {

    console.log("hola ");

    return (
        <nav className="navbar">
            <a href="#">Productos</a>
            <a href="#">Nosotros</a>
            <a href="#">Contacto</a>
        </nav>
    );
}

export default Navbar;