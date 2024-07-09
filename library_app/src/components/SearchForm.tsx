import { FC, useCallback } from 'react';
import { Form, Button, FormControl, InputGroup, Row, Col, FormGroup } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
interface SearchFormProps {
  searchName: string;
  setSearchName: (term: string) => void;
  category: string;
  setCategory: (category: string) => void;
  sorting: string;
  setSorting: (sorting: string) => void;
  handleSearch: () => void;
}

const SearchForm: FC<SearchFormProps> = ({
  searchName,
  setSearchName,
  category,
  setCategory,
  sorting,
  setSorting,
  handleSearch
}) => {
  const categoryOptions = [
    { value: '', label: 'All' },
    { value: 'art', label: 'Art' },
    { value: 'computers', label: 'Computers' },
    { value: 'history', label: 'History' },
    { value: 'medical', label: 'Medical' },
    { value: 'poetry', label: 'Poetry' }
  ];
const [user] = useAuthState(auth);
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  }, [setSearchName]);

  const handleCategoryChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  }, [setCategory]);

  const handleSortingChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSorting(e.target.value);
  }, [setSorting]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);
if(!user){
  return(<p>Зарегистрируйтесь!</p>);
}
  return (
    <div className='search_control search_control_tint'>
      <div className='header_main'>
        <div className='header_logo'>Search for books</div>
        {}
      </div>
      <Form onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}>
        <InputGroup>
          <div className='input_group_form_button'>
            <Form.Control
              id='searchName'
              name='searchName'
              className='form_control'
              placeholder='Search...'
              value={searchName}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <Button className='search_button' onClick={handleSearch}></Button>
          </div>
        </InputGroup>
        <Row className='rows'>
          <Col className='cols'>
            <FormGroup className='category_control'>
              <Form.Label className='control_label' htmlFor='category'>
                Category:
              </Form.Label>
              <FormControl
                className='category_control_select'
                as='select'
                id='category'
                name='category'
                value={category}
                onChange={handleCategoryChange}
              >
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </FormControl>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className='sorting_control'>
              <Form.Label className='control_label' htmlFor='sorting'>
                Sorting:
              </Form.Label>
              <FormControl
                className='category_control_select'
                as='select'
                id='sorting'
                name='sorting'
                value={sorting}
                onChange={handleSortingChange}
              >
                <option value='relevance'>Relevance</option>
                <option value='newest'>Newest</option>
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
