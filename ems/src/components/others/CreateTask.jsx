import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [assignto, setAssignto] = useState('')
    const [category, setcategory] = useState('')

    const { employees, updateEmployees } = useContext(AuthContext)
    const submitHandler = (e) => {
        e.preventDefault()

        const NewTask = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false }


        const updatedEmployees = employees.map((emp) => {
            if (emp.firstname === assignto) {
                return {
                    ...emp,
                    tasks: [...emp.tasks, NewTask],
                    task_count: {
                        ...emp.task_count,
                        newTask: emp.task_count.newTask + 1
                    }
                }
            }
            return emp
        })


        updateEmployees(updatedEmployees)

        setAssignto('')
        setTaskTitle('')
        setcategory('')
        settaskDescription('')
        settaskDate('')


    }
    return (
        <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} action="" className='flex w-full flex-wrap items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={taskTitle} onChange={(e) => {
                            setTaskTitle(e.target.value)
                        }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make UI' name="" id="" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input value={taskDate} onChange={(e) => {
                            settaskDate(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input value={assignto} onChange={(e) => {
                            setAssignto(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" name="" id="" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input value={category} onChange={(e) => {
                            setcategory(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" name="" id="" placeholder='design, dev etc..' /></div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea value={taskDescription} onChange={(e) => {
                        settaskDescription(e.target.value)
                    }} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" cols='30' rows='10' id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask