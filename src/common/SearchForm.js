import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { Container , InputGroup , Button  ,Form} from 'react-bootstrap';
import "./SearchForm.css";

/** Search widget.
 *
 * Appears on CompanyList and JobList so that these can be filtered
 * down.
 *
 * This component doesn't *do* the searching, but it renders the search
 * form and calls the `searchFor` function prop that runs in a parent to do the
 * searching.
 *
 * { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ searchFor }) {
  console.debug("SearchForm", "searchFor=", typeof searchFor);

  const [searchTerm, setSearchTerm] = useState(""); 

  /** Tell parent to filter */
  function handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  /** Update form fields */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
      <div>
      <Container className="SearchContain text-center">         
      <form onSubmit={handleSubmit}>  
      <InputGroup size="lg" className="mb-3 SearchForm">       
        <Form.Control
          placeholder="Enter search term.."
          aria-label="searchTerm"
          aria-describedby="basic-addon2"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button style={{color:"white" ,backgroundColor:"#0072b1",border:"#0072b1"}} 
                id="button-addon2" type="submit">
          <FaSearch />
        </Button >
      </InputGroup>        
      </form>
      </Container> 
      </div>
  );
}

export default SearchForm;