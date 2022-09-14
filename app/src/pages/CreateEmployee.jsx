import React, { useState } from 'react'
import DatePicker from '../components/datepicker/DatePicker'
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

  const birthDateOptions = {
    startYear: 1920,
    stopYear: 2022,
    defaultYear: { name: '1980', value: 1980 },
    defaultMonth: { name: 'January', value: 0 }
  }

  const startDateOptions = {
    startYear: 1990,
    stopYear: 2022,
    defaultYear: { name: '2022', value: 2022 },
    defaultMonth: { name: 'August', value: 7 }
  }

  function handleFormSubmit (e) {
    e.preventDefault()
    console.log(document.forms[0])
    setModalDisplayed(true)
  }
  return (
  <>
    <div className='container'>
      <h1>Create Employee</h1>
      <form id='create-employee-form' onSubmit={(e) => handleFormSubmit(e)}>

        <label htmlFor='first-name'>First name</label>
        <input id='first-name' type='text'/>

        <label htmlFor='last-name'>Last name</label>
        <input id='last-name' type='text'/>

        <label id='date-of-birth'>Date of Birth</label>
        {<DatePicker startYear={birthDateOptions.startYear} stopYear={birthDateOptions.stopYear} defaultYear={birthDateOptions.defaultYear} defaultMonth={birthDateOptions.defaultMonth}/>}

        <label id='start-date'>Start Date</label>
        {<DatePicker startYear={startDateOptions.startYear} stopYear={startDateOptions.stopYear} defaultYear={startDateOptions.defaultYear} defaultMonth={startDateOptions.defaultMonth}/>}

        <fieldset id='create-employee-form-fieldset'>
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
        <div className='submit-button-container'>
          <button id='submit-form-button' type='submit'>Save</button>
        </div>
      </form>
    </div>
    {<Modal title={modalTitle} content={modalContent} modalDisplayed={modalDisplayed} setModalDisplayed={setModalDisplayed}/>}
  </>
  )
}

export default CreateEmployee
