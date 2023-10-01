import React from "react";
import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul className="md:flex gap-x-4 hidden tracking-widest">
      <Link to="/" className="links">Home</Link>
      <Link to="/About" className="links">About</Link>
      <li className="links">Shop</li>
      <li className="links">news</li>
      <li className="links">contact</li>
    </ul>
  );
}
