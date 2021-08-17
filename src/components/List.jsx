import React, { useContext, useState, useEffect } from 'react';
import { ListContext } from '../context/list';
import { SettingContext } from '../context/settings';
import './main.scss'
function List() {
  const { list, toggleComplete } = useContext(ListContext);
  const { choose ,back,next,start,end ,number} = useContext(SettingContext);
  const [filter, setFilter] = useState([]);



  function onlyIncomplete() {
    if (filter == list)
      setFilter(() => filter.filter((item) => item.complete != true));
    else setFilter(list);
  }

  useEffect(() => {
    setFilter(list);
  }, [list]);





  const listOfTodos = filter.slice(start, end).map((item) =>{

    const deff = item.difficulty > 3 ? 'hard' : 'easy'
  return(
    <li key={item.id} ng-repeat="notebook in notebooks">
      <p>todo: {item.text}</p>
      <p>Assigned to: {item.assignee}</p>
      <p>difficulty : {deff}</p>

      <div class="right top" onClick={() => toggleComplete(item.id)}>{item.complete.toString()}</div>
    </li>
  )});



  return (
    <div className="listContainer">
      <button  onClick={onlyIncomplete}>
        only incomplete {filter == list ? 'off' : 'on'}
      </button>
      <select name="select" onClick={choose}>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
      </select>
      <ul >
      {listOfTodos}
      </ul>
      <button  onClick={() => back(number * -1)}>back</button>
      <button  onClick={() => next(number,filter.length)}>next</button>
    </div>
  );
}

export default List;




// <div key={item.id}>
//     //   <p>{item.text}</p>
//     //   <p>
//     //     <small>Assigned to: {item.assignee}</small>
//     //   </p>
//     //   <p>
//     //     <small>Difficulty: {item.difficulty}</small>
//     //   </p>
//     //   <div onClick={() => toggleComplete(item.id)}>
//     //     Complete: {item.complete.toString()}
//     //   </div>
//     //   <hr />
//     // </div>