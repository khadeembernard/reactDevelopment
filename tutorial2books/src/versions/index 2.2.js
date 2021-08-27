import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
  return(
    <section className='bookList'>
      <Book 
        author={firstBook.author} 
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>lorem15</p>
      </Book>
      <Book 
        author={secondBook.author} 
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = (props)=>{
  //Or destructure it in the parameter call both ways work the same
  //you can nest destructure ex {img,title,author:{fName,lName}}
  const {img, author,title} = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h3>{author.toUpperCase}</h3>
      {props.children}
    </article>
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

ReactDOM.render(<BookList/>,document.getElementById('root'))