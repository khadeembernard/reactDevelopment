import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
  //passing paremeters to components
  return(
    <section className='bookList'>
      <Book job='developer' title='The Value Of ES6'/>
      <Book 
        pages={125}
      />
      <Book 
        author={firstBook.author} 
        title={firstBook.title}
      />
      <Book 
        author={secondBook.author} 
        title={secondBook.title}
      />
    </section>
  );
}
const firstBook={
  img:'https://images-na.ssl-images-amazon.com/images/I/81vmJCNCm6L._AC_UL200_SR200,200_.jpg',
  title:'Python Crash Course, 2nd Edition',
  author:'Eric Mathhes'
}
const secondBook={
  img:'https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL._AC_UL200_SR200,200_.jpg',
  title:'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming 3rd Edition',
  author:'Marijn Haverbeke'
}
//you can call your input parameter what you want but props is a
  //a reserved word and an industry standard to use. It will also make your components easier to reuse JUST MAKE SURE TO COMMENT 
const Book = (props)=>{
  //props is an object
  console.log(props)
  const author ='Eric Mathhes'
  // const title='Python Crash Course, 2nd Edition'
  // const img='https://images-na.ssl-images-amazon.com/images/I/81vmJCNCm6L._AC_UL200_SR200,200_.jpg'
  return <article className='book'>
   <img src={img} alt={title} />
   <h1>{title}</h1>
   <h3>{props.author.toUpperCase}</h3>
   <h4>{props.job}</h4>
   <h4>{props.pages}</h4>
   {/* <p>{let x=6</p> */}
   {/* <p>{24+5}</p> */}
  </article>
}
//notice what renders for props...

ReactDOM.render(<BookList/>,document.getElementById('root'))