import React,{useContext,useEffect} from 'react'
import {Button } from '@blueprintjs/core';
import { SettingContext } from '../context/settings';
import { ListContext } from '../context/list';
function Setting() {

  const { choose,filter,setFilter } = useContext(SettingContext);
  const  {list}  = useContext(ListContext);


  useEffect(()=>{
    
  },[])
  function onlyIncomplete() {
    console.log(filter,list)
    if (filter.length == list.length){
      setFilter(() => filter.filter((item) => item.complete != true));
    }else setFilter(list);
  }
  return (
    <>
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
    </>
  )
}

export default Setting
