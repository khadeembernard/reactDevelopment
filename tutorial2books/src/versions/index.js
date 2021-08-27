import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
  //{names} works books doesnt because its an object
  return(
    <section className='bookList'>
      {books}
    </section>
  );
}
//use map method to wrap names in html
const Book = (props)=>{
  const {img, author,title} = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h3>{author.toUpperCase}</h3>
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
];
const names=['James','Speed','Dan'];
const newNames = names.map((name)=>{
  console.log(name);
  
  return <h1>{name}</h1>;
//check console log see that now there is no undifined this is to show that you can wrap js outputs in react jsx and output it
});
console.log(newName)
ReactDOM.render(<BookList/>,document.getElementById('root'))
//Notice that with objects this become harder to wrap because of the inner workings of objects.