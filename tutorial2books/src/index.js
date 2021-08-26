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
      <Book/>
      <Book/>
    </section>
  );
}
//# instances of a book
//normally would be saved in seperate files and imported.
const Book = ()=>{
  return <article className='book'>
   <Image/>
   <Title/>
   <Author/>
  </article>
}
//right now hardcoded to one book

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81vmJCNCm6L._AC_UL200_SR200,200_.jpg" alt="Python Crash-Course" />
const Title = ()=> <h1>Python Crash Course, 2nd Edition</h1>
const Author = ()=> <h3 style={{color: '#617d98', fontSize:'0.75rem',marginTop:'0.25rem'}}>Eric Mathhes</h3>
//example of inline jsx css and just like normal inline it will override external css rules for the properties that are covered.
ReactDOM.render(<BookList/>,document.getElementById('root'))