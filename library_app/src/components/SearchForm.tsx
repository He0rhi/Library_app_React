import React from 'react';
import { Form, Button, FormControl, InputGroup, Row, Col, FormGroup } from 'react-bootstrap';


interface SearchFormProps {
  searchName:string;
setSearchName:(term:string)=>void;
category:string;
setCategory:(category:string)=>void;
sorting:string;
setSorting:(sorting:string)=>void;
handleSearch:()=>void;
}

const SearchForm: React.FC<SearchFormProps> = ({ searchName,setSearchName, category,setCategory,sorting,setSorting,handleSearch}) => {
  
  return(
    <div className='search_control search_control_tint'>
       <div className='header_main'>
    <div className='header_logo'>Search for books</div>
   </div>
      <Form onSubmit={(e)=>{
        e.preventDefault(); handleSearch();
      }}
      >
        <InputGroup>
        <div className='input_group_form_button'>
        <Form.Control className='form_control' placeholder='Search...'
        onChange={(e)=>setSearchName(e.target.value)}
        onKeyDown={(e)=>{
          if(e.key==='Enter'){
            handleSearch();
          }
        }}
        /><Button className='search_button' onClick={handleSearch}></Button>
</div>

       
        

        </InputGroup>
        <Row className='rows'>
      <Col className='cols'>
        <FormGroup className='category_control' controlId='category'>
          <Form.Label className='control_label'>Category:</Form.Label>
          <FormControl className='category_control_select' as="select" onChange={(e) => setCategory(e.target.value)}>
            <option className='options' value="all">All</option>
            <option value="art">Art</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
          </FormControl>
        </FormGroup>
      </Col>
      <Col >
        <FormGroup controlId='sorting'>
          <Form.Label className='control_label'>Sorting:</Form.Label>
          <FormControl className='category_control_select'  as="select" onChange={(e) => setSorting(e.target.value)}>
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </FormControl>
        </FormGroup>
      </Col>
    </Row>
      </Form>
    </div>
  )
};

export default SearchForm;
