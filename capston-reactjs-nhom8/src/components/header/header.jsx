import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { USER_INFO_KEY } from '../../constants/common';
import { setUserInfoAction } from '../../store/action/action';

export default function Header() {
  const dispatch = useDispatch();
  const userState = useSelector((state)=> state.userReducer);
  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem(USER_INFO_KEY);
    dispatch(setUserInfoAction(null));
    navigate('/');
  };

  return (
  <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
  {/* Brand */}
  <a className="navbar-brand" href="#">Movie</a>
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
    <div className='ml-auto' id="collapsibleNavbar" >
    {!userState.userInfo?(
    <>
      <button className='btn btn-outline-info my-2 my-sm-0 mr-2' type='sumit'>Register</button>
      <button  className='btn btn-outline-success my-2 my-sm-0' onClick={()=> navigate('/login')}>Login</button>
    </>
  ):(
    <>
    <span>Hello {userState.userInfo.hoTen}</span>
    <button className='btn btn-outline-info my-2 my-sm-0 mr-2' onClick={handleLogout}>Logout</button>
    </>
  )}
  </div>
  </div>
</nav>
  )
}
