import React, { useState } from 'react';
/*
=================================================
Hooks
=================================================
***All hooks employ the key word 'use' example useState, useEffect, useCallback...etc
***COMPONENT NAMES MUST BE UPPERCASE FOR COMPONENTS THAT USE HOOKS
***Hooks must be declared in the function/component body
***Cannot call the hook conditionally(not the function in the hook but the hook itself)
      if(...hook=== things)----NOOOOOOO
*/
const UseStateBasics = () => {
  //console.log(useState)
  // console.log(useState("helloworld"))
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler)

  const [text,setText]=useState('Sponge Bob');
  const handleClick=()=>{
    if(text==='Sponge Bob')setText('Pickle Rick')
    else setText('Sponge Bob')
  }
  return (
  <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>Change Title</button>
  </React.Fragment>
  );
};

export default UseStateBasics;

