import React from "react";
import moment from "moment";

const Row = (props) => {
  console.log(props);
  return (
    <>
      {props.employees.map((employee, index) => (
        <tr key={index}>
          <td>
            <img src={employee.picture.medium} alt="Employee" />
          </td>
          <td>
            {employee.name.first} {employee.name.last}
          </td>
          <td>{employee.cell}</td>
          <td>{employee.email}</td>
          <td>{employee.dob.date}</td>
        </tr>
      ))}
    </>
  );
};

export default Row;
