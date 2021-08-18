import React, { useContext } from 'react';
import { ListContext } from '../context/list';

import { Classes, InputGroup } from '@blueprintjs/core';
function Form() {
  const { handleSubmit, handleChange } = useContext(ListContext);

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
      <InputGroup
        style={{width:'25%',float:'left',marginRight:"2rem",marginLeft:"2rem"}}
        asyncControl={true}
        disabled={false}
        large={false}
        leftIcon="add"
        name="text"
        onChange={handleChange}
        placeholder="To Do Item"
        fill={false}
      />
      <InputGroup
        style={{width:'25%',float:'left',marginRight:"2rem"}}
        asyncControl={true}
        disabled={false}
        name="assignee"
        large={false}
        leftIcon="filter"
        onChange={handleChange}
        placeholder="Assigned To"
        fill={false}
      />
      <InputGroup
        style={{width:'25%',float:'left',marginRight:"10rem"}}
        asyncControl={true}
        type="range"
        name="difficulty"
        large={false}
        leftIcon="filter"
        onChange={handleChange}
        placeholder="difficulty"
        fill={false}
      />
      <button style={{display:'none'}} ></button>
      </form>
    </div>
    
  );
}

export default Form;
