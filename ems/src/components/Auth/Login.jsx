import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className='flex flex-col items-center justify-center'>
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }} required value={email} className='border-2 outline-none  font-medium text-white bg-transparent border-emerald-600 py-2 px-6 text-lg rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />

                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }} required value={password} className='border-2 outline-none  font-medium text-white bg-transparent border-emerald-600 py-2 px-6 text-lg  rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter your password' />
                    <button className='text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 py-2 px-8 w-full text-lg rounded-full mt-5 placeholder:text-white'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login