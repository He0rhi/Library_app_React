import { useCallback,FC,memo } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

interface BookListProps {
  books: any[];
  totalItems:number;
  startIndex:number;
  loadNext:()=>void;
  loadPrev:()=>void;
  onBookSelect:(book:any)=>void;
}
const step=5;

const BookList: FC<BookListProps> = memo(({ books=[],totalItems,startIndex,loadNext,loadPrev,onBookSelect }) => {
  const memoizedLoadNext = useCallback(() => {
    loadNext();
  }, [loadNext]);

  const memoizedLoadPrev = useCallback(() => {
    loadPrev();
  }, [loadPrev]);

  const memoizedOnBookSelect = useCallback((book:any) => {
    onBookSelect(book);
  }, [onBookSelect]);

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
<Card.Img src={book.volumeInfo.imageLinks?.thumbnail} className='img-fluid card_img'></Card.Img>
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
    {startIndex + step < totalItems && (
        <div className="pagination_buttons">
          <Button className='pagination_button_left' variant="primary" onClick={memoizedLoadNext}></Button>
          <Button className='pagination_button_right' variant="primary" onClick={memoizedLoadPrev}></Button>
        </div>
      )}
  </div></div>
  );
});

export default BookList;
