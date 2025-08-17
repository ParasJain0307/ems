import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

export const AllTask = () => {
    const data = useContext(AuthContext)
    console.log(data)

    return (
        <div id='alltask' className='bg-[#1C1C1C] p-5 mt-5 rounded '>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed Task</h5>
            </div>
            <div className=''>
                {data.employees.map((elem, idx) => {
                    return <div key={idx} className='border-emerald-500 border-2 mb-2 py-2 px-4 flex justify-between rounded'>
                        <h2 className='text-lg font-medium w-1/5'>{elem.firstname}</h2>
                        <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.task_count.newTask}</h3>
                        <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.task_count.active}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-white'>{elem.task_count.completed}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.task_count.failed}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}
