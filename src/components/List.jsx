import React, { useContext, useState, useEffect } from 'react';
import { ListContext } from '../context/list';
import { SettingContext } from '../context/settings';
import { Callout, Button } from '@blueprintjs/core';

function List() {
  const { list, toggleComplete, deleteItem } = useContext(ListContext);
  const { back, next, start, end, number, filter, setFilter } =
    useContext(SettingContext);

  useEffect(() => {
    setFilter(list);
  }, [list]);

  const listOfTodos = filter.slice(start, end).map((item) => {
    const deff = item.difficulty > 3 ? 'hard' : 'easy';
    const itemComplete = item.complete === true ? 'success' : 'danger';
    const color = deff === 'hard' ? 'red' : 'green';
    console.log(item._id);
    return (
      <Callout
        key={item._id}
        style={{ marginBottom: '0.5rem', width: '80%', marginLeft: '5rem' }}
      >
        <h5>todo: {item.text}</h5>
        <p>Assigned to: {item.assignee}</p>
        <p style={{ color: color }}>difficulty : {deff}</p>

        <Button
          icon="confirm"
          intent={itemComplete}
          onClick={() => toggleComplete(item._id)}
          text={item.complete.toString()}
        />

        <Button
          style={{marginLeft:'1rem'}}
          icon="delete"
          intent="danger"
          onClick={() => deleteItem(item._id)}
          text="delete"
        />
      </Callout>
    );
  });

  return (
    <>
      {' '}
      <ul style={{ marginTop: '4rem' }}>{listOfTodos}</ul>
      <div style={{ marginLeft: '25rem', padding: '3rem' }}>
        <Button
          style={{ margin: '1rem' }}
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
