import React from 'react';
import { Form, Button, FormControl, InputGroup, Row, Col, FormGroup } from 'react-bootstrap';

interface SearchFormProps {
  searchName: string;
  setSearchName: (term: string) => void;
  category: string;
  setCategory: (category: string) => void;
  sorting: string;
  setSorting: (sorting: string) => void;
  handleSearch: () => void;
}

const SearchForm: React.FC<SearchFormProps> = (props) => {
  const { searchName, setSearchName, category, setCategory, sorting, setSorting, handleSearch } = props;

  return (
    <div className='search_control search_control_tint'>
      <div className='header_main'>
        <div className='header_logo'>Search for books</div>
      </div>
      <Form onSubmit={(e) => {
        e.preventDefault(); handleSearch();
      }}>
        <InputGroup>
          <div className='input_group_form_button'>
            <Form.Control 
              id="searchName" 
              name="searchName"
              className='form_control' 
              placeholder='Search...'
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <Button className='search_button' onClick={handleSearch}></Button>
          </div>
        </InputGroup>
        <Row className='rows'>
          <Col className='cols'>
            <FormGroup className='category_control'>
              <Form.Label className='control_label' htmlFor='category'>Category:</Form.Label>
              <FormControl 
                className='category_control_select' 
                as="select" 
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All</option>
                <option value="art">Art</option>
                <option value="computers">Computers</option>
                <option value="history">History</option>
                <option value="medical">Medical</option>
                <option value="poetry">Poetry</option>
              </FormControl>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className='sorting_control'>
              <Form.Label className='control_label' htmlFor='sorting'>Sorting:</Form.Label>
              <FormControl 
                className='category_control_select' 
                as="select" 
                id="sorting"
                name="sorting"
                value={sorting}
                onChange={(e) => setSorting(e.target.value)}
              >
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
