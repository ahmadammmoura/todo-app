import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import base64 from 'base-64';
import axios from 'axios';
const API = 'https://auth-server-401.herokuapp.com';
export const AuthContext = React.createContext();
export default function Auth(props) {
  const [isLoggenIn, setisLoggenIn] = useState(false);
  const [username, setusername] = useState({});
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = cookie.load('auth');
    validateToken(token);
  }, []);

  const validateToken = (token) => {
    if (token !== 'undefined' && token !== 'null') {
      const user = jwt.decode(token);
      setLoginState(true, token, user);
    } else {
      setLoginState(false, null, {});
    }
  };
  const setLoginState = async (loggedIn, token, user) => {
    cookie.save('auth', token);

    await setToken(token);
    await setisLoggenIn(loggedIn);
    await setusername(user);
  };
  const login = async (username, password) => {
    // headers{authorization: "Basic sdfsdfsdf="}
    try {
      const response = await superagent
        .post(`${API}/signin`)
        .set(
          'authorization',
          `Basic ${base64.encode(`${username}:${password}`)}`
        );
      console.log(response.body);
      validateToken(response.body.token);
    } catch (error) {
      console.error('LOGIN ERROR', error.message);
    }
  };

  const logout = () => {
    setLoginState(false, null, {});
  };

  const signUp = async (username, password, role) => {
    const response = await axios
      .post(`${API}/signup`,{username:username, password :password, role:role})

      console.log(response.data)
      validateToken(response.data.token);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggenIn, username, token, login, logout,signUp }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
