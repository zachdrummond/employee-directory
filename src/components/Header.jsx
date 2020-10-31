import Jumbotron from "react-bootstrap/Jumbotron";
import "../styles/Header.css"

const Header = () => {
  return (
    <Jumbotron className="text-center p-3 jumbotron">
      <h1>Employee Directory</h1>
      <p>
        Click on headers to filter by heading or use the search box to narrow
        your results.
      </p>
    </Jumbotron>
  );
};

export default Header;
