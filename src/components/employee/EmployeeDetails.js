import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useHistory, useParams } from "react-router-dom";

export const EmployeeDetail = () => {
  const { releaseEmployee, getEmployeeById } = useContext(EmployeeContext);

  const [employee, setEmployee] = useState({});
  const [location, setLocation] = useState({});
  const history = useHistory();
  const { employeeId } = useParams();

  useEffect(() => {
    console.log("Employee useEffect", employeeId);
    getEmployeeById(employeeId).then((response) => {
      setEmployee(response);
      setLocation(response.location);
    });
  }, []);

  return (
    <section className="employees">
      <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Location: {location.name}</div>
        <button
          onClick={() => {
            releaseEmployee(employee.id).then(() => {
              history.push("/employees");
            });
          }}
        >
          Release Employee
        </button>
      </section>
    </section>
  );
};
