import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
  return(
    <section className='bookList'>
      {books.map((book)=>{
        console.log(book)
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  );
}

const Book = (props)=>{
  const {img, author,title} = props;

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </article>
  );
}

const books=[
  {
    id:1,
    img:'https://images-na.ssl-images-amazon.com/images/I/81vmJCNCm6L._AC_UL200_SR200,200_.jpg',
    title:'Python Crash Course, 2nd Edition',
    author:'Eric Mathhes'
  },
  {
    id:2,
    img:'https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL._AC_UL200_SR200,200_.jpg',
    title:'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming 3rd Edition',
    author:'Marijn Haverbeke'
  },
  {
    id:3,
    img:'https://images-na.ssl-images-amazon.com/images/I/91WFb-PpoNL._AC_UL200_SR200,200_.jpg',
    title:'The Pragmatic Programmer',
    author:'David Thomas,Andrew Hunt'
  },
];

ReactDOM.render(<BookList/>,document.getElementById('root'))
