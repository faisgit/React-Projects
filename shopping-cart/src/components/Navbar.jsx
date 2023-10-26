import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 right-0 z-30 mb-3">
      <nav className="flex justify-between items-center bg-black text-white px-3 py-4 ">
        <h1 className=" text-2xl ">Fais Cart</h1>
        <ul className="flex items-center">
          <li>
            <Link to={"/"}>Shop</Link>
          </li>
          <li className="ml-4">
            <Link to={"/cart"}>
              <i class="bi bi-cart"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
