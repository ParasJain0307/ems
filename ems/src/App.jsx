import React, { useState, useEffect, useContext } from 'react'

import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState('')
  const authData = useContext(AuthContext)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser', '')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == 'xxx') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ 'role': 'admin' }))
    } else if (authData) {
      const employeeData = authData.employees.find((e) => email === e.email && password === e.password)
      if (employeeData) {
        setUser('employee')
        setLoggedInUserData(employeeData)
        localStorage.setItem('loggedInUser', JSON.stringify({ 'role': 'employee', 'data': employeeData }))
      }
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={LoggedInUserData} /> : null)}
      {/* <Login /> */}
      {/* <AdminDashboard /> */}
      {/* <EmployeeDashboard /> */}
    </>
  )
}

export default App