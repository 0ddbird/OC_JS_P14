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

const employees = []

for (let i = 1; i < 10; i++) {
  ((j) => {
    const newEmployee = new Employee()
    newEmployee.firstName = `Obi ${j}`
    newEmployee.lastName = `Kenobi ${j}`
    newEmployee.startDate = `2020-09-${j}`
    newEmployee.street = `${j} new Street`
    employees.push(newEmployee)
  })(i)
}

for (let i = 1; i < 10; i++) {
  ((j) => {
    const newEmployee = new Employee()
    newEmployee.firstName = `John ${j}`
    newEmployee.lastName = `Lemon ${j}`
    newEmployee.startDate = `2021-07-${j}`
    newEmployee.street = `${j} Chili road`
    newEmployee.department = 'Sales'
    newEmployee.state = 'FI'
    employees.push(newEmployee)
  })(i)
}

for (let i = 1; i < 10; i++) {
  ((j) => {
    const newEmployee = new Employee()
    newEmployee.firstName = `Rick ${j}`
    newEmployee.lastName = `Sanchez ${j}`
    newEmployee.startDate = `1985-05-${j}`
    newEmployee.street = `${j} space`
    newEmployee.department = 'R&D'
    newEmployee.state = 'AL'
    employees.push(newEmployee)
  })(i)
}

const employee1 = {
  firstName: 'Albert',
  lastName: 'Dupont',
  startDate: '2022-09-06',
  department: 'Marketing',
  birthDate: '1990-09-06',
  street: '12, Baker Street',
  city: 'London',
  state: 'AK',
  zipCode: '123ABC'
}

const employee2 = {
  firstName: 'Bob',
  lastName: 'Aupont',
  startDate: '2022-09-06',
  department: 'Engineering',
  birthDate: '1990-09-06',
  street: '02, Baker Street',
  city: 'Paris',
  state: 'NY',
  zipCode: '465ABC'
}

const employee3 = {
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

employees.push(employee1, employee2, employee3)

export { employees }
