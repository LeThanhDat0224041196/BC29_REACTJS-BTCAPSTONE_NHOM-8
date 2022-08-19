import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { USER_INFO_KEY } from '../../constants/common';
import { loginAPI } from '../../service/user';
import { setUserInfoAction } from '../../store/action/action';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  })

  const handleChange = (event)=>{
      const {name, value}= event.target;

      setState({
        ...state,
        [name]: value
      })
  }

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const result = await loginAPI(state);
    console.log(result);
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(result.data.content));
    dispatch(setUserInfoAction(result.data.content));
    navigate('/')
  }

  return (
    <form className='w-25 mx-auto my-5'onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>Username</label>
            <input
            name='taiKhoan'
            type='text'
            onChange={handleChange}
            className='form-control' />
        </div>
        <div className='form-group'>
            <label>Password</label>
            <input
            name='matKhau'
            type= 'text'
            className='form-control'
            onChange={handleChange}/>
        </div>
        <button className='btn btn-success w-50'>LOGIN</button>
        <button className='btn btn-success w-50'>LOGOUT</button>
    </form>
  )
}
