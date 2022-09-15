import React from 'react'
import Table from '../components/table/Table'
import { tableData } from '../mocks/employees'

const EmployeeList = () => {
  // const { employees } = useContext(AppContext)
  const tableOptions = {
    searchModule: true,
    paginationModule: true,
    countModule: true,
    navigationModule: true
  }

  return (
  <>
    <h1>Current Employees</h1>
    {<Table items={tableData} options={tableOptions}/>}
  </>
  )
}

export default EmployeeList
