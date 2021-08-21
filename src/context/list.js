import axios from 'axios';
import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';

export const ListContext = React.createContext();
import { v4 as uuid } from 'uuid';

function list(props) {
  const [list, setList] = useState([]);
  const [values, setValues] = useState({});

  useEffect(async () => {
    const response = await axios.get(
      'https://api-js401.herokuapp.com/api/v1/todo'
    );
    setList(response.data.results);
  }, []);

  async function handleSubmit(event) {
    if (event) event.preventDefault();
    values.id = uuid();
    values.complete = false;

    setList([...list, values]);
    const token = cookie.load('auth');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.post(
      `https://api-js401.herokuapp.com/api/v1/todo`,
      values,
      config
    );
  }

  function handleChange(event) {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }
  async function deleteItem(id) {
    const items = list.filter((item) => item._id !== id);
    setList(items);
    const token = cookie.load('auth');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.delete(
      `https://api-js401.herokuapp.com/api/v1/todo/${id}`,
      config
    );
  }

  async function toggleComplete(id) {
    let obj;
    const items = list.map((item) => {
      if (item._id == id) {
        item.complete = !item.complete;
        obj = { complete: item.complete };
      }
      return item;
    });
    const token = cookie.load('auth');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.put(`https://api-js401.herokuapp.com/api/v1/todo/${id}`, obj, config);
    setList(items);
  }

  return (
    <ListContext.Provider
      value={{ list, deleteItem, handleSubmit, handleChange, toggleComplete }}
    >
      {props.children}
    </ListContext.Provider>
  );
}

export default list;
