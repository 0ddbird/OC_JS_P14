import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee'
import EmployeeList from './pages/EmployeeList'
import './sass/main.scss'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CreateEmployee />}>
          </Route>
          <Route path='/employees' element={<EmployeeList />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
