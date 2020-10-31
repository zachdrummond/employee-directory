import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchBar = (props) => {
  return (
    <Form inline className="justify-content-center mb-5">
      <FormControl
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        placeholder="Search by Name"
        className="mr-sm-2"
        id="search"
      />
      <Button onClick={props.handleFormSubmit}>Search</Button>
    </Form>
  );
};

export default SearchBar;
