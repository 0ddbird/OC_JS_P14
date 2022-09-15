import React, { useContext } from 'react'
import { AppContext } from '../App'
import Table from '../components/table/Table'

const EmployeeList = () => {
  const { employees } = useContext(AppContext)
  const tableOptions = {
    searchModule: true,
    paginationModule: true,
    countModule: true,
    navigationModule: true
  }

  return (
  <>
    <h1>Current Employees</h1>
    {employees && <Table items={employees} options={tableOptions}/>}
  </>
  )
}

export default EmployeeList
