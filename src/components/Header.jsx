import Jumbotron from "react-bootstrap/Jumbotron";

const Header = () => {
  return (
    <Jumbotron className="text-center p-3">
      <h1>Employee Directory</h1>
      <p>
        Click on headers to filter by heading or use the search box to narrow
        your results.
      </p>
    </Jumbotron>
  );
};

export default Header;
