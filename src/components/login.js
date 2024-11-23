import React, { useState } from 'react';
import './login.css'
import Register from './register';
const Login=() =>{
  	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
	  console.log('Password:', password);
	  if (username == 'idrees' && password == 'kema') {
		  setLoggedIn(true);
		  setUsername(''); // Clear username field
		  setPassword('')
	  } else {
		  alert('invalid username and password');
		  setUsername(''); // Clear username field
		  setPassword('')
	  }
	 
  };
  if (loggedIn) {
    return <Register />;
  }
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="User name / Email"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-login">
            <h3>log in via</h3>
            <div className="social-icons">
              {/* Add social login icons here */}
            </div>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
