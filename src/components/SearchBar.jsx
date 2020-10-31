import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import React from "react";

const SearchBar = (props) => {
  return (
    <Form inline className="justify-content-center mb-5">
      <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
