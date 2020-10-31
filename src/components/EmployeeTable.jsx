import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import EmployeeRows from "./EmployeeRows";
import SearchBar from "./SearchBar";
import "../styles/EmployeeTable.css";

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
        />
        <Table striped bordered hover className="text-center eTable">
          <thead>
            <tr>
              <th>Image</th>
              <th>
                Name
                <Button variant="link" onClick={this.sortTableByName} size="sm">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-sort-alpha-down"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11A.5.5 0 0 1 4 2z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M6.354 11.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L4 12.793l1.646-1.647a.5.5 0 0 1 .708 0z"
                    />
                    <path d="M9.664 7l.418-1.371h1.781L12.281 7h1.121l-1.78-5.332h-1.235L8.597 7h1.067zM11 2.687l.652 2.157h-1.351l.652-2.157H11zM9.027 14h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055l-2.578 3.719V14z" />
                  </svg>
                </Button>
              </th>
              <th>Phone</th>
              <th>Email</th>
              <th>
                Date of Birth
                <Button
                  variant="link"
                  onClick={this.sortTableByDateOfBirth}
                  size="sm"
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-sort-numeric-down"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11A.5.5 0 0 1 4 2z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M6.354 11.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L4 12.793l1.646-1.647a.5.5 0 0 1 .708 0z"
                    />
                    <path d="M12.438 7V1.668H11.39l-1.262.906v.969l1.21-.86h.052V7h1.046zm-2.84 5.82c.054.621.625 1.278 1.761 1.278 1.422 0 2.145-.98 2.145-2.848 0-2.05-.973-2.688-2.063-2.688-1.125 0-1.972.688-1.972 1.836 0 1.145.808 1.758 1.719 1.758.69 0 1.113-.351 1.261-.742h.059c.031 1.027-.309 1.856-1.133 1.856-.43 0-.715-.227-.773-.45H9.598zm2.757-2.43c0 .637-.43.973-.933.973-.516 0-.934-.34-.934-.98 0-.625.407-1 .926-1 .543 0 .941.375.941 1.008z" />
                  </svg>
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            <EmployeeRows state={this.state} />
          </tbody>
        </Table>
      </>
    );
  }
}

export default EmployeeTable;
