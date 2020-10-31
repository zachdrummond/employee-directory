import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import EmployeeRows from "./EmployeeRows";
import SearchBar from "./SearchBar";

class EmployeeTable extends Component {
  state = {
    employees: [],
    search: "",
  };

  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/?results=20&nat=us")
      .then((response) => {
        this.setState({ employees: response.data.results });
      })
      .catch((error) => console.log(error));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      employees: this.state.employees.filter((employee) => {
        switch (this.state.search) {
          case employee.name.first:
            return employee;
          case employee.name.last:
            return employee;
          default:
            return null;
        }
      }),
    });
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

  sortTableByDateOfBirth = () => {
    this.setState({
      employees: this.state.employees.sort((a, b) => {
        if (a.dob.date < b.dob.date) {
          return -1;
        } else if (a.dob.date > b.dob.date) {
          return 1;
        } else {
          return 0;
        }
      }),
    });
  };

  render() {
    return (
      <>
        <SearchBar
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
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
                <Button variant="link" onClick={this.sortTableByDateOfBirth}>
                  Date of Birth
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            <EmployeeRows employees={this.state.employees} />
          </tbody>
        </Table>
      </>
    );
  }
}

export default EmployeeTable;
