import React from 'react'

export const NewTask = ({data}) => {
    return (
        <div className='h-full w-[300px] p-5 bg-green-400 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.task_date}</h4>
            </div>
            <h2 className='mt-5 text-xl font-bold'>{data.task_title}</h2>
            <p className='text-sm mt-2'>{data.task_description}</p>
            <div className='flex justify-between mt-4'>
                <button className='bg-yellow-500 rounded py-1 px-2 text-sm'>Accept Task</button>
            </div>
        </div>
    )
}
