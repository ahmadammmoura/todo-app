import React, { useState ,useEffect} from 'react';
export const SettingContext = React.createContext();

function Setting(props) {

  const [number, setnumber] = useState(3)
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const [filter, setFilter] = useState([]);


  useEffect(() => {
    let number = localStorage.getItem('number')
    let start = localStorage.getItem('start')
    let end = localStorage.getItem('end')
    if(number){
      setnumber(Number(number))
    setEnd(Number(end))
    setStart(start)
    }
  }, [])

  function next(num,length) {
    
    if (start + Math.abs(num)> length) return;
    
    setStart(start + num);
    setEnd(end + num);
  }

  function back(num) {

    if (start -Math.abs(num)< 0) return;
    setStart(start + num);
    setEnd(end + num);
  }
  
  // function handleFormSubmit(){
    
  //   const obj = {

  //   }

  //   localStorage.setItem('rememberMe', rememberMe);
  //   localStorage.setItem('user', rememberMe ? user : '');
  // };
  
  function choose(e){

    setnumber(Number(e.target.value))
    setEnd(Number(e.target.value))
    setStart(0)

    localStorage.setItem('number', Number(e.target.value));
    localStorage.setItem('end', Number(e.target.value));
    localStorage.setItem('start',0);

  }

  return <SettingContext.Provider value={{ choose ,back,next,start,end,number,filter,setFilter}}>{props.children}</SettingContext.Provider>;
}

export default Setting;