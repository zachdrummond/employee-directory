import { Component } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Row from "./Row";

class EmployeeTable extends Component {
  state = {
    employees: [],
  };

  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/?results=20&nat=us")
      .then((response) => {
        console.log(response.data.results[0]);
        this.setState({ employees: response.data.results });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          <Row employees={this.state.employees} />
        </tbody>
      </Table>
    );
  }
}

export default EmployeeTable;
