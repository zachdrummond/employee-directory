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
      <Table striped bordered hover>
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
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default EmployeeTable;
