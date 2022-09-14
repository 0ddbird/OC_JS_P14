import React from 'react'
import Table from '../components/table/Table'
import { employees } from '../mocks/employees'

const EmployeeList = () => {
  const tableOptions = {
    searchModule: true,
    paginationModule: true,
    countModule: true,
    navigationModule: true
  }

  return (
  <>
    <h1>Current Employees</h1>
    {<Table items={employees} options={tableOptions}/>}
  </>
  )
}

export default EmployeeList
