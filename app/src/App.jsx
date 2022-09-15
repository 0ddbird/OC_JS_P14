import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee'
import EmployeeList from './pages/EmployeeList'
import Home from './pages/Home'
import './sass/main.scss'
import HandShakeIcon from './assets/handshake.svg'
import addUserIcon from './assets/adduser.svg'
import usersIcon from './assets/users.svg'
import { tableData } from './mocks/employees'

export const AppContext = React.createContext()

function App () {
  const [employees, setEmployees] = useState(tableData)

  return (
    <div className="App">
    <AppContext.Provider value={{ employees, setEmployees }}>
      <BrowserRouter>
      <div className='nav'>
        <NavLink className='home-navlink' to='/'><img className='nav-icon' src={HandShakeIcon} alt='back to home' /> HRnet </NavLink>
        <div className='nav-right-subcontainer'>
        <NavLink className='create-navlink' to='/create'><img className='nav-icon' src={addUserIcon} alt='Créer un profil employé' /></NavLink>
        <NavLink className='employees-navlink' to='/employees'><img className='nav-icon' src={usersIcon} alt='Consulter tous les profils' /></NavLink>
        </div>

      </div>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<CreateEmployee />}></Route>
          <Route path='/employees' element={<EmployeeList />}></Route>
        </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  )
}

export default App
