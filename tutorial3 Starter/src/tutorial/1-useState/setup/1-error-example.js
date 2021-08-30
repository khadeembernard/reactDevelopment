import React from 'react';

const ErrorExample = () => {
  let title = 'Sponge Bob'
  const handleClick=()=>{
    console.log(title)
    title = 'Pickle Rick'
  }
  //will the update to the new tile be shown in the webpage,console, both, neither?
  //*1
  return(
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>Change Title</button>
    </React.Fragment>
    )
};

export default ErrorExample;
