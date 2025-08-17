import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'


export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const { employees, admin } = getLocalStorage()
        setUserData({ employees, admin })
    }, [])


    const updateEmployees = (updatedEmployees) => {
        setUserData((prev) => ({ ...prev, employees: updatedEmployees }))
        localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    }
    return (
        <div>
            <AuthContext.Provider value={{ ...userData, updateEmployees }}>
                {children}
            </AuthContext.Provider>

        </div >
    )
}

export default AuthProvider