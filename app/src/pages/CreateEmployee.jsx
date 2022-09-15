import React, { useContext, useEffect, useState } from 'react'
import DatePicker from '../components/datepicker/DatePicker'
import Modal from '../components/Modal'
import Select from '../components/Select'
import { states } from '../mocks/states'
import { departments } from '../mocks/departments'
import { formDataTemplate, formErrorTemplate, defaultBirthdateOptions, defaultStartdateOptions } from '../utils/createEmployee'
import { AppContext } from '../App'
import Uploader from '../components/jsonUploader/Uploader'

const CreateEmployee = () => {
  const modalTitle = 'Confirmation'
  const modalContent = 'Employee created!'

  const defaultDate = () => {
    const date = new Date()
    const dateName = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

    return {
      name: dateName,
      value: date
    }
  }
  const { employees, setEmployees } = useContext(AppContext)
  const [modalDisplayed, setModalDisplayed] = useState(false)
  const [selectedState, setSelectedState] = useState(states[0])
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0])
  const [selectedBirthdate, setSelectedBirthDate] = useState(defaultDate())
  const [selectedStartDate, setSelectedStartDate] = useState(defaultDate())
  const [formData, setFormData] = useState(formDataTemplate)
  const [formErrors, setFormErrors] = useState(formErrorTemplate)
  const [file, setFile] = useState(undefined)

  function handleInputChange (e) {
    if (e.target.value.length > 1) {
      const newFormData = formData
      newFormData[`${e.target.id}`] = e.target.value
      setFormData(newFormData)
    } else {
      const newFormErrors = formErrors
      newFormErrors[`${e.target.id}`] = true
      setFormErrors(newFormErrors)
    }
  }

  function setDefinitiveFormObject () {
    const newFormData = formData
    newFormData.birthdate = selectedBirthdate
    newFormData.startdate = selectedStartDate
    newFormData.state = selectedState
    newFormData.department = selectedDepartment
    setFormData(newFormData)
  }

  function handleFormSubmit (e) {
    e.preventDefault()
    setDefinitiveFormObject()
    setModalDisplayed(true)
    const currentEmployees = employees
    // console.log(currentEmployees, setEmployees())
    currentEmployees.items.push(formatEmployee(formData))
    // console.log(currentEmployees)
    setEmployees(currentEmployees)
    console.log(employees)
  }

  function formatDateToString (date) {
    const isSingleDigitMonth = date.getMonth().toString().length < 2
    const standardizedMonth = isSingleDigitMonth ? `0${date.getMonth()}` : `${date.getMonth()}`

    return `${date.getFullYear()}-${standardizedMonth}-${date.getDate()}`
  }

  function formatEmployee (employeeData) {
    return {
      firstName: employeeData.firstname,
      lastName: employeeData.lastname,
      startDate: formatDateToString(employeeData.startdate.value),
      department: employeeData.department.value,
      birthDate: formatDateToString(employeeData.birthdate.value),
      street: employeeData.street,
      city: employeeData.city,
      state: employeeData.state.value,
      zipCode: employeeData.zipcode
    }
  }

  function importEmployees (file) {
    const currentEmployees = employees
    file.forEach(employee => { currentEmployees.items.push(employee) })
    setEmployees(currentEmployees)
  }

  useEffect(() => {
    if (file) importEmployees(file)
  }, [file])

  return (
  <>
    <div className='container'>
      <h1>Create Employee</h1>
      <form id='create-employee-form' onSubmit={(e) => handleFormSubmit(e)}>
        <label htmlFor='firstname'>First name</label>
        <input id='firstname' type='text' required minLength={2} onBlur={(e) => handleInputChange(e)}/>

        <label htmlFor='lastname'>Last name</label>
        <input id='lastname' type='text' required minLength={2} onBlur={(e) => handleInputChange(e)}/>

        <label id='birthdate'>Date of Birth</label>
        {<DatePicker
        startYear={defaultBirthdateOptions.startYear}
        stopYear={defaultBirthdateOptions.stopYear}
        defaultYear={defaultBirthdateOptions.defaultYear}
        defaultMonth={defaultBirthdateOptions.defaultMonth}
        setSelectedDate={setSelectedBirthDate}
        selectedDate={selectedBirthdate}
        />}

        <label id='startdate'>Start Date</label>
        {<DatePicker
        startYear={defaultStartdateOptions.startYear}
        stopYear={defaultStartdateOptions.stopYear}
        defaultYear={defaultStartdateOptions.defaultYear}
        defaultMonth={defaultStartdateOptions.defaultMonth}
        setSelectedDate={setSelectedStartDate}
        selectedDate={selectedStartDate}
        />}

        <fieldset id='create-employee-form-fieldset'>
          <legend>Adress</legend>

          <label htmlFor='street'>Street</label>
          <input id='street' type='text'minLength={2} required onBlur={(e) => handleInputChange(e)}/>

          <label htmlFor='city'>City</label>
          <input id='city' type='text'minLength={2} required onBlur={(e) => handleInputChange(e)}></input>

          <label htmlFor='state'>State</label>
          {<Select
          id='state'
          options={states}
          selected={selectedState}
          setSelected={setSelectedState}
          />}

          <label htmlFor='zipcode'>Zip Code</label>
          <input id='zipcode' type='text' minLength={2} required onBlur={(e) => handleInputChange(e)}/>
        </fieldset>

        <label htmlFor='department'>Department</label>
        {<Select
        options={departments}
        selected={selectedDepartment}
        setSelected={setSelectedDepartment}
        />}

        <div className='submit-button-container'>
          <button className='submit-button' type='submit'>Save</button>
        </div>

      </form>
      {
      <Uploader setFile={setFile}/>
      }
    </div>

    {<Modal
    title={modalTitle}
    content={modalContent}
    modalDisplayed={modalDisplayed}
    setModalDisplayed={setModalDisplayed}
    />}
  </>
  )
}

export default CreateEmployee
