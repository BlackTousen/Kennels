import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
// import { AnimalCard } from "./animal/AnimalCard";
// import { EmployeeCard } from "./employee/Employee";
import { LocationCard } from "./location/Location";
// import { CustomerCard } from "./customer/Customer";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { AnimalForm } from "./animal/AnimalForm";
import { EmployeeForm } from "./employee/EmployeeForm";
import { LocationForm } from "./location/LocationForm";
import { CustomerForm } from "./customer/CustomerForm";
import { AnimalDetail } from "./animal/AnimalDetail";
import { EmployeeDetail } from "./employee/EmployeeDetails";
import { LocationDetail } from "./location/LocationDetail";

export const ApplicationViews = (props) => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <AnimalProvider>
        <Route exact path="/animals">
          <AnimalList />
        </Route>
      </AnimalProvider>
      {/* Render the employee list when http://localhost:3000/employees */}
      <EmployeeProvider>
        <Route exact path="/employees">
          <EmployeeList />
        </Route>
      </EmployeeProvider>
      {/* Render the location list when http://localhost:3000/locations */}
      <LocationProvider>
        <Route exact path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>
      {/* Render the customer list when http://localhost:3000/customers */}
      <CustomerProvider>
        <Route exact path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
        </LocationProvider>
      </EmployeeProvider>
      <LocationProvider>
        <Route exact path="/locations/create">
          <LocationForm />
        </Route>
      </LocationProvider>
      <CustomerProvider>
        <Route exact path="/customers/create">
          <CustomerForm />
        </Route>
      </CustomerProvider>
      <AnimalProvider>
        <Route exact path="/animals/detail/:animalId(\d+)">
          <AnimalDetail />
        </Route>
      </AnimalProvider>
      <EmployeeProvider>
        <Route exact path="/employees/detail/:employeeId(\d+)">
          <EmployeeDetail />
        </Route>
      </EmployeeProvider>
      <LocationProvider>
        <Route exact path="/locations/detail/:locationId(\d+)">
          <LocationDetail />
        </Route>
      </LocationProvider>
    </>
  );
};
