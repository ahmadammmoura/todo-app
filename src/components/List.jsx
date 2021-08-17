import React, { useContext, useState, useEffect } from 'react';
import { ListContext } from '../context/list';
import { SettingContext } from '../context/settings';
import { Callout, Button, Icon } from '@blueprintjs/core';

function List() {
  const { list, toggleComplete } = useContext(ListContext);
  const { choose, back, next, start, end, number } = useContext(SettingContext);
  const [filter, setFilter] = useState([]);

  function onlyIncomplete() {
    if (filter == list)
      setFilter(() => filter.filter((item) => item.complete != true));
    else setFilter(list);
  }

  useEffect(() => {
    setFilter(list);
  }, [list]);

  const listOfTodos = filter.slice(start, end).map((item) => {
    const deff = item.difficulty > 3 ? 'hard' : 'easy';
    const itemComplete = item.complete === true ? 'success' : 'danger';
    const color = deff === 'hard' ? 'red' : 'green';

    return (
      <Callout key={item.id} style={{ marginBottom: '0.5rem', width: '80%',marginLeft:'5rem' }}>
        <h5>todo: {item.text}</h5>
        <p>Assigned to: {item.assignee}</p>
        <p style={{ color: color }}>difficulty : {deff}</p>

        <Button
          icon="confirm"
          intent={itemComplete}
          onClick={() => toggleComplete(item.id)}
          text={item.complete.toString()}
        />
      </Callout>
    );
  });

  return (
    <>
      {' '}
      <div style={{ width: '50%', marginLeft: '5rem', marginTop: '5rem' }}>
        <Button
          icon="confirm"
          intent={filter !== list ? 'success' : 'danger'}
          onClick={onlyIncomplete}
          text={filter == list ? 'only incomplete off' : 'only incomplete on'}
        />
        <select
          style={{ marginLeft: '2rem', width: '4rem' }}
          name="select"
          onClick={choose}
        >
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
        </select>
      </div>
      <ul style={{ marginTop: '4rem' }}>{listOfTodos}</ul>

      <div style={{marginLeft:'25rem',padding:'3rem'}} >
        <Button
          style={{margin:'1rem'}}
          icon="arrow-left"
          onClick={() => back(number * -1)}
          text={'back'}
        />
        <Button
          icon="arrow-right"
          onClick={() => next(number, filter.length)}
          text={'next'}
        />
      </div>
    </>
  );
}

export default List;
