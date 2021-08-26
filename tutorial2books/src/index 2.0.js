import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
  return(
    <section className='bookList'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}
const author ='Eric Mathhes'
const Book = ()=>{
  const title='Python Crash Course, 2nd Edition'
  const img='https://images-na.ssl-images-amazon.com/images/I/81vmJCNCm6L._AC_UL200_SR200,200_.jpg'
  return <article className='book'>
   <img src={img} alt={title} />
   <h1>{title}</h1>
   <h3>{author.toUpperCase}</h3>
   {/* <p>{let x=6</p> */}
   {/* <p>{24+5}</p> */}
  </article>
}

ReactDOM.render(<BookList/>,document.getElementById('root'))