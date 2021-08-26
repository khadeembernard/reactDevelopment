import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
  //passing paremeters to components
  return(
    <section className='bookList'>
      <Book job='developer' title='The Value Of ES6'/>
      <Book pages={125}/>
      <Book/>
      <Book/>
    </section>
  );
}
const author ='Eric Mathhes'
//you can call your input parameter what you want but props is a
  //a reserved word and an industry standard to use. It will also make your components easier to reuse JUST MAKE SURE TO COMMENT 
const Book = (props)=>{
  //props is an object
  console.log(props)
  const title='Python Crash Course, 2nd Edition'
  const img='https://images-na.ssl-images-amazon.com/images/I/81vmJCNCm6L._AC_UL200_SR200,200_.jpg'
  return <article className='book'>
   <img src={img} alt={title} />
   <h1>{title}</h1>
   <h3>{author.toUpperCase}</h3>
   <h4>{props.job}</h4>
   <h4>{props.pages}</h4>
   {/* <p>{let x=6</p> */}
   {/* <p>{24+5}</p> */}
  </article>
}
//notice what renders for props...

ReactDOM.render(<BookList/>,document.getElementById('root'))