import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
  <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
  {/* Brand */}
  <a className="navbar-brand" href="#">Navbar</a>
  {/* Toggler/collapsibe Button */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon" />
  </button>
  {/* Navbar links */}
  <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to='/'>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='#'>Link</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='#'>Link</NavLink>
      </li>
    </ul>
  </div>
  <div className='ml-auto' id="collapsibleNavbar" >
  <button className='btn btn-outline-info my-2 my-sm-0 mr-2' type='sumit'>Register</button>
  <button  className='btn btn-outline-success my-2 my-sm-0' >Login</button>
  </div>
  {/* // onClick={() => navigate("/login")} */}
</nav>
  )
}
