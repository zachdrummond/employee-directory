import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <Jumbotron className="text-center">
      <h1>Employee Directory</h1>
      <p>
        Click on headers to filter by heading or use the search box to narrow
        your results.
      </p>
      <Form inline className="justify-content-center">
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button type="submit">Search</Button>
      </Form>
    </Jumbotron>
  );
};

export default Header;
