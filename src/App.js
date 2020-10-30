import EmployeeTable from "./components/EmployeeTable";
import Header from "./components/Header";
import Container from "react-bootstrap/Table";
import Row from "react-bootstrap/Table";
import Col from "react-bootstrap/Table";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <EmployeeTable />
        </Row>
      </Container>
    </>
  );
}

export default App;
