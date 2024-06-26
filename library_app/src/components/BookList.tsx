import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

interface BookListProps {
  books: any[];
  totalItems:number;
  startIndex:number;
  loadNext:()=>void;
  loadPrev:()=>void;
  onBookSelect:(book:any)=>void;
}

const BookList: React.FC<BookListProps> = ({ books,totalItems,startIndex,loadNext,loadPrev,onBookSelect }) => {
  return (
  <div className='book_list_main'>
    <p className='total_items'>Книг найдено: {totalItems}</p>
    <div className='book_list'>
    <Row>
      {books.map((book,index)=>(
        <Col key={`${book.id}-${index}`} >
<Card className='book_card' onClick={()=>{
  onBookSelect(book)
}}>
<Card.Img src={book.volumeInfo.imageLinks?.thumbnail} className='img-fluid'></Card.Img>
<Card.Body className='card_body'>
<Card.Text className='categories_text'>{book.volumeInfo.categories?.[0]}</Card.Text>

  <Card.Title className='title_text'>{book.volumeInfo.title}</Card.Title>
  <Card.Text className='authors_text'>{book.volumeInfo.authors?.[0]}</Card.Text>

</Card.Body>
</Card>
        </Col>
      )
    )}
    </Row>
    {startIndex + 5 < totalItems && (
        <div className="text-center">
          <Button variant="primary" onClick={loadPrev}>Load prev</Button>
          <Button variant="primary" onClick={loadNext}>Load next</Button>
        </div>
      )}
  </div></div>
  );
};

export default BookList;
