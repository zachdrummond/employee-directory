import React from "react";
import moment from "moment";

const EmployeeRows = ({ state }) => {
  const employeeFilter = state.employees.filter((employee) => {
    const { first, last } = employee.name;
    if (
      first.toLowerCase().startsWith(state.search) ||
      last.toLowerCase().startsWith(state.search)
    ) {
      return employee;
    } else {
      return null;
    }
  });

  return (
    <>
      {employeeFilter.map((employee, index) => (
        <tr key={index}>
          <td>
            <img src={employee.picture.medium} alt="Employee" />
          </td>
          <td>
            {employee.name.first} {employee.name.last}
          </td>
          <td>{employee.cell}</td>
          <td>{employee.email}</td>
          <td>{moment(employee.dob.date).format("MM/DD/YYYY")}</td>
        </tr>
      ))}
    </>
  );
};

export default EmployeeRows;
