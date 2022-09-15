
const headers = [
  {
    name: 'First Name',
    value: 'firstName'
  },
  {
    name: 'Last Name',
    value: 'lastName'
  },
  {
    name: 'Start Date',
    value: 'startDate'
  },
  {
    name: 'Department',
    value: 'firstName'
  },
  {
    name: 'Birth Date',
    value: 'firstname'
  },
  {
    name: 'Street',
    value: 'street'
  },
  {
    name: 'City',
    value: 'city'
  },
  {
    name: 'State',
    value: 'state'
  },
  {
    name: 'Zip Code',
    value: 'zipCode'
  }
]

/*
class Employee {
  firstName = 'Employee'
  lastName = 'Name'
  startDate = '2022-09-06'
  department = 'Marketing'
  birthDate = '1990-09-06'
  street = '12, Baker Street'
  city = 'London'
  state = 'AK'
  zipCode = '123ABC'
}

for (let i = 1; i < 10; i++) {
  ((j) => {
    const newEmployee = new Employee()
    newEmployee.firstName = `Obi ${j}`
    newEmployee.lastName = `Kenobi ${j}`
    newEmployee.startDate = `2020-09-${j}`
    newEmployee.street = `${j} new Street`
    employees.push(newEmployee)
  })(i)
} */

const employees = [
  {
    firstName: 'Albert',
    lastName: 'Dupont',
    startDate: '2022-09-06',
    department: 'Marketing',
    birthDate: '1990-09-06',
    street: '12, Baker Street',
    city: 'London',
    state: 'AK',
    zipCode: '123ABC'
  },
  {
    firstName: 'Bob',
    lastName: 'Aupont',
    startDate: '2022-09-06',
    department: 'Engineering',
    birthDate: '1990-09-06',
    street: '02, Baker Street',
    city: 'Paris',
    state: 'NY',
    zipCode: '465ABC'
  },
  {
    firstName: 'Charly',
    lastName: 'Bupont',
    startDate: '2021-02-06',
    department: 'Marketing',
    birthDate: '1980-09-06',
    street: '59, Baker Street',
    city: 'Sydney',
    state: 'IO',
    zipCode: 'ABC896'
  },
  {
    firstName: 'Charly',
    lastName: 'Bupont',
    startDate: '2021-02-06',
    department: 'Marketing',
    birthDate: '1980-09-06',
    street: '59, Baker Street',
    city: 'Sydney',
    state: 'IO',
    zipCode: 'ABC896'
  }
]

const tableData = {
  headers,
  items: employees
}

export { tableData }
