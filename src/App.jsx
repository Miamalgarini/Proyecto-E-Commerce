import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import DetalleProducto from "./pages/DetalleProducto";

import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className="title">PRODUCTOS</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
      </Routes>
    </BrowserRouter>
  );
};