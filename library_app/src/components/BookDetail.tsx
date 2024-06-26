import React from 'react';
import {Card,Button} from 'react-bootstrap';
interface BookDetailProps {
book:any;
onBack:()=>void;
}
const BookDetail: React.FC<BookDetailProps> = ({book,onBack}) => {
  if(!book) return null;
  return(
    <Card className='book_detail_card'>
      <div className='card_detail_img'>
<Card.Img className='img-fluid detail_img' src={book.volumeInfo.imageLinks?.thumbnail}/></div>
<Card.Body className='card_details_body'>
<Card.Text className='details_authors_text'>
 {book.volumeInfo.categories?.join(", ")}
  </Card.Text>
  <Card.Title className='details_title_text'>{book.volumeInfo.title}</Card.Title>
  <Card.Text className='details_categories_text'>
 {book.volumeInfo.authors?.join(", ")}
  </Card.Text>
 
  <Card.Text className='details_description_text'>
 {book.volumeInfo.description}
  </Card.Text>
  <Button onClick={onBack}>BackToList</Button>
</Card.Body>
    </Card>
  )
};

export default BookDetail;
