import { React,useState,createContext } from 'react';

export const inCompletContext = createContext();

import React from 'react'

function Incomplete(props) {
  
  
  const [incomplete, setIncomplete] = useState([]);


  return (
    <inCompletContext.Provider>
      {props.children}
    </inCompletContext.Provider>
  )
}

export default Incomplete
