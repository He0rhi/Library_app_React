import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface BookDetailProps {
  book: any;
  onBack: () => void;
}

const normalizeAuthors = (authors: string[] | undefined) => {
  return authors?.join(", ") || "";
};

const normalizeCategories = (categories: string[] | undefined) => {
  return categories?.join(", ") || "";
};

const normalizeThumbnail = (imageLinks: { thumbnail?: string } | undefined) => {
  return imageLinks?.thumbnail || "";
};

const normalizeDescription = (description: string | undefined) => {
  return description || "No description available.";
};

const BookDetail: React.FC<BookDetailProps> = ({ book, onBack }) => {
  if (!book) return null;

  const { volumeInfo } = book;
  const { imageLinks, title, authors, categories, description } = volumeInfo;

  return (
    <Card className='book_detail_card'>
      <div className='card_detail_img'>
        <Card.Img className='img-fluid detail_img' src={normalizeThumbnail(imageLinks)} />
      </div>
      <Card.Body className='card_details_body'>
        <Card.Text className='details_authors_text'>
          {normalizeCategories(categories)}
        </Card.Text>
        <Card.Title className='details_title_text'>{title}</Card.Title>
        <Card.Text className='details_categories_text'>
          {normalizeAuthors(authors)}
        </Card.Text>
        <Card.Text className='details_description_text'>
          {normalizeDescription(description)}
        </Card.Text>
        <Button className='back_button' onClick={onBack}>Back</Button>
      </Card.Body>
    </Card>
  );
};

export default BookDetail;
