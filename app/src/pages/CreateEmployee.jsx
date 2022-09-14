import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DatePicker from '../components/DatePicker'
import Modal from '../components/Modal'
import Select from '../components/Select'
import { states } from '../mocks/states'
import { departments } from '../mocks/departments'

const CreateEmployee = () => {
  const modalTitle = 'Confirmation'
  const modalContent = 'Employee created!'

  const [modalDisplayed, setModalDisplayed] = useState(false)
  const [selectedState, setSelectedState] = useState(states[0])
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0])

  function handleFormSubmit (e) {
    e.preventDefault()
    setModalDisplayed(true)
  }
  return (
  <>
    <div className='title'>
      <h1>HRnet</h1>
    </div>
    <div className='container'>
      <NavLink to='/employees'>View Current Employees</NavLink>
      <h2>Create Employee</h2>
      <form id='create-employee-form' onSubmit={(e) => handleFormSubmit(e)}>

        <label htmlFor='first-name'>First name</label>
        <input id='first-name' type='text'/>

        <label htmlFor='last-name'>Last name</label>
        <input id='last-name' type='text'/>

        <label id='date-of-birth'>Date of Birth</label>
        {<DatePicker />}

        <label id='start-date'>Start Date</label>
        {<DatePicker />}

        <fieldset>
          <legend>Adress</legend>
          <label htmlFor='street'>Street</label>
          <input id='street' type='text'/>

          <label htmlFor='city'>City</label>
          <input id='city' type='text'></input>

          <label htmlFor='state'>State</label>
          {<Select options={states} selected={selectedState} setSelected={setSelectedState}/>}

          <label htmlFor='zipcode'>Zip Code</label>
          <input type='text'/>
        </fieldset>
        <label htmlFor='department'>Department</label>
        {<Select options={departments} selected={selectedDepartment} setSelected={setSelectedDepartment} />}
        <button type='submit'>Save</button>
      </form>
    </div>
    {<Modal title={modalTitle} content={modalContent} modalDisplayed={modalDisplayed} setModalDisplayed={setModalDisplayed}/>}
  </>
  )
}

export default CreateEmployee
