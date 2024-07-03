import React, { useCallback } from 'react';
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

const SearchForm: React.FC<SearchFormProps> = React.memo(({ searchName, setSearchName, category, setCategory, sorting, setSorting, handleSearch }) => {
  
  const memoizedHandleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch();
  }, [handleSearch]);

  const memoizedHandleButtonClick = useCallback(() => {
    handleSearch();
  }, [handleSearch]);

  const memoizedSetSearchName = useCallback((e:any) => {
    setSearchName(e.target.value);
  }, [setSearchName]);

  const memoizedSetCategory = useCallback((e:any) => {
    setCategory(e.target.value);
  }, [setCategory]);

  const memoizedSetSorting = useCallback((e:any) => {
    setSorting(e.target.value);
  }, [setSorting]);

  return (
    <div className='search_control search_control_tint'>
      <div className='header_main'>
        <div className='header_logo'>Search for books</div>
      </div>
      <Form onSubmit={memoizedHandleSubmit}>
        <InputGroup>
          <div className='input_group_form_button'>
            <Form.Control 
              id="searchName" 
              name="searchName"
              className='form_control' 
              placeholder='Search...'
              value={searchName}
              onChange={memoizedSetSearchName}
              onKeyDown={(e:any) => {
                if (e.key === 'Enter') {
                  memoizedHandleSubmit(e);
                }
              }}
            />
            <Button className='search_button' onClick={memoizedHandleButtonClick}></Button>
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
                onChange={memoizedSetCategory}
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
});

export default SearchForm;
