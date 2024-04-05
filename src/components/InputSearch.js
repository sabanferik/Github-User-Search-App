import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const InputSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 mx-auto">
        <InputGroup className="mb-3 w-100">
          <Form.Control
            placeholder="Github's username"
            aria-label="Github's username"
            aria-describedby="basic-addon2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default InputSearch;