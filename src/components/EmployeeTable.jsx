import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import EmployeeRows from "./EmployeeRows";

class EmployeeTable extends Component {
  state = {
    employees: [],
  };

  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/?results=20&nat=us")
      .then((response) => {
        this.setState({ employees: response.data.results });
      })
      .catch((error) => console.log(error));
  };

  sortTableByName = () => {
    this.setState({
      employees: this.state.employees.sort((a, b) => {
        if (a.name.last < b.name.last) {
          return -1;
        } else if (a.name.last > b.name.last) {
          return 1;
        } else {
          return 0;
        }
      }),
    });
  };

  render() {
    return (
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>Image</th>
            <th>
              <Button variant="link" onClick={this.sortTableByName}>
                Name
              </Button>
            </th>
            <th>Phone</th>
            <th>Email</th>
            <th>
              <Button variant="link">Date of Birth</Button>
            </th>
          </tr>
        </thead>
        <tbody>
          <EmployeeRows
            employees={this.state.employees}
            onClick={this.sortTableByDateOfBirth}
          />
        </tbody>
      </Table>
    );
  }
}

export default EmployeeTable;
