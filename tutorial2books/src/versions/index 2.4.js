import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//find another book
function BookList() {
  
  return(
    //this could be an option to iterate through the books but there is a better way
    <section className='bookList'>
      {books.map((book)=>{
        console.log(book)
        const {image,title,author}=book;
        return <Book book={book}></Book>
      })}
    </section>
  );
}
//<Book book={book}/>
//use map method to wrap names in html
const Book = (props)=>{
  const {img, author,title} = props.book;
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
    img:'https://images-na.ssl-images-amazon.com/images/I/81vmJCNCm6L._AC_UL200_SR200,200_.jpg',
    title:'Python Crash Course, 2nd Edition',
    author:'Eric Mathhes'
  },
  {
    img:'https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL._AC_UL200_SR200,200_.jpg',
    title:'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming 3rd Edition',
    author:'Marijn Haverbeke'
  },
  {
    img:'https://images-na.ssl-images-amazon.com/images/I/91WFb-PpoNL._AC_UL200_SR200,200_.jpg',
    title:'The Pragmatic Programmer',
    author:'David Thomas,Andrew Hunt'
  },
];

ReactDOM.render(<BookList/>,document.getElementById('root'))
//Notice that with objects this become harder to wrap because of the inner workings of objects.