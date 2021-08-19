import React, { useEffect, useState, useContext } from 'react';
import Header from './Headers';
import Form from './Form';
import List from './List';
import { ListContext } from '../context/list';
import { AuthContext } from '../context/auth';
import Auth from '../components/Auth';

const ToDo = () => {
  const listObject = useContext(ListContext);
  const {isLoggenIn,username} = useContext(AuthContext);
  const [incomplete, setIncomplete] = useState([]);

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = listObject.list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [listObject.list]);
 
  return (<>
      {isLoggenIn && <div style={{width:'%100'}}>
        <Header incomplete={incomplete} />
        <Auth capability='create'>
          <Form />
        </Auth>
        <List />
      </div>}
  </>);
};

export default ToDo;