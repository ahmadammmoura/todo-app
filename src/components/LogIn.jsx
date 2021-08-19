import React, { useState, useContext } from 'react';
import './logIn.css';
import { AuthContext } from '../context/auth';

function LogIn() {
  const [switcher, setswitcher] = useState(false);
  const { login, signUp, isLoggenIn } = useContext(AuthContext);

  const [values, setValues] = useState({});

  function handeleSubmit(e) {
    e.preventDefault();
    if (!values.role) {
      console.log(values);
      const res = login(values.username, values.password);
    } else {
      console.log(values);
      const res = signUp(values.username, values.password, values.role);
      console.log(res);
    }
  }

  function handeleChange(e) {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  }

  function switchBtn(e) {
    setValues({});
    const switcher = e ? true : false;
    setswitcher(switcher);
  }

  return (
    <>
      {!isLoggenIn && (
        <div className="login-page">
          <div className="form">
            {switcher && (
              <form onSubmit={handeleSubmit} className="login-form">
                <input
                  type="text"
                  onChange={handeleChange}
                  name="username"
                  placeholder="username"
                />
                <input
                  type="password"
                  onChange={handeleChange}
                  name="password"
                  placeholder="password"
                />
                <label for="role">Choose a role:</label>
                <select onClick={handeleChange} style={{width:'10rem',marginBottom:'15px'}} name="role" id="role">
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
                <button>create</button>
                <p className="message">
                  Already registered?{' '}
                  <a onClick={() => switchBtn(false)} href="#">
                    Sign In
                  </a>
                </p>
              </form>
            )}
            {!switcher && (
              <form className="login-form" onSubmit={handeleSubmit}>
                <input
                  type="text"
                  onChange={handeleChange}
                  name="username"
                  placeholder="username"
                />
                <input
                  type="password"
                  onChange={handeleChange}
                  name="password"
                  placeholder="password"
                />
                <button>login</button>
                <p className="message">
                  Not registered?{' '}
                  <a onClick={() => switchBtn(true)} href="#">
                    Create an account
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default LogIn;
