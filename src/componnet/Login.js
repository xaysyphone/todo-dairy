import React from 'react';
import './Login.css';


const Login = () =>{
    return (
      <div className='wrapper'>
        <form>
          <h1>Login</h1>
          <div className='input-box'>
            <input type="text" placeholder='Username' required />
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Password' required />
          </div>  

          <div className="remmember-forgot">
          <label><input type='checkbox'/>Remember me</label>
          <a href='#'>Forgot Password?</a>
          </div>
          <button type="submit">Login</button>

          <div className='register-link'>
            <p>Don't have an account? <a href='#'>Sign up</a></p>
          </div>
        
      </form>
    </div>
  );
};

export default Login
