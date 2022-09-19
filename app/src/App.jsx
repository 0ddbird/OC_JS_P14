import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Components
import CreateEmployee from './pages/CreateEmployee'
import EmployeeList from './pages/EmployeeList'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'
// Mocks
import { tableData } from './mocks/employees'
// Assets
import './sass/main.scss'

export const AppContext = React.createContext()

function App () {
  const [employees, setEmployees] = useState(tableData)

  return (
    <div className="App">
    <AppContext.Provider value={{ employees, setEmployees }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<CreateEmployee/>}></Route>
          <Route path='/employees' element={<EmployeeList/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  )
}

export default App
