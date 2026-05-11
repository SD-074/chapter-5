import React from 'react'
import { Link, Route, Routes, useLocation, useNavigate } from "react-router";
export default function Navbar() {
    const { pathname } = useLocation();
  return (
    <header>
        {pathname == "/" ? (
          <Link to={"/about"}>
            <button className="btn btn-xl btn-primary">About</button>
          </Link>
        ) : (
          <Link to={"/"}>
            <button className="btn btn-xl btn-primary">Home</button>
          </Link>
        )}
      </header>
  )
}
