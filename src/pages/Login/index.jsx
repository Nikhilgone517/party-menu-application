import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Login = () => {
    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
    const onSubmitForm = (e) => {
        e.preventDefault();
        
        
    }

  return (
    <div className="login-container"> 
    <div>
        <div>
            <span>dish icon</span>
            <h1>Party Menu</h1>
            <p>Sign in to explore our delicious menu</p>
            {errMsg && <p>{errMsg}</p>}
        </div>
        <form className="form" onSubmit={onSubmitForm}>
          <label>Email</label>
          <input
            type="text"
            placeholder="admin@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">Sign In</button>
          
        </form>
    </div>
        </div>
  )
}

export default Login