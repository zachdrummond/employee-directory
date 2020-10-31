import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import React from "react";

const SearchBar = (props) => {
  //console.log(props);
  return (
    <Form inline className="justify-content-center mb-5">
      <FormControl
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        id="search"
      />
      <Button onClick={props.handleFormSubmit}>Search</Button>
    </Form>
  );
};

export default SearchBar;
