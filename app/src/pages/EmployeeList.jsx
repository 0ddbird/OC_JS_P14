import React from 'react'
import Table from '../components/table/Table'
import { employees } from '../mocks/employees'

const EmployeeList = () => {
  return (
  <>
    <h1>Current Employees</h1>
    {<Table items={employees}/>}
  </>
  )
}

export default EmployeeList
