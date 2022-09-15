const formDataTemplate = {
  firstname: '',
  lastname: '',
  birthdate: '',
  startdate: '',
  street: '',
  city: '',
  state: '',
  zipcode: '',
  department: ''
}

const formErrorTemplate = {
  firstname: false,
  lastname: false,
  birthdate: false,
  startdate: false,
  street: false,
  city: false,
  state: false,
  zipcode: false,
  department: false
}

const defaultBirthdateOptions = {
  startYear: 1920,
  stopYear: 2022,
  defaultYear: { name: '1980', value: 1980 },
  defaultMonth: { name: 'January', value: 0 }
}

const defaultStartdateOptions = {
  startYear: 1990,
  stopYear: 2022,
  defaultYear: { name: '2022', value: 2022 },
  defaultMonth: { name: 'August', value: 7 }
}

export { formDataTemplate, formErrorTemplate, defaultBirthdateOptions, defaultStartdateOptions }
