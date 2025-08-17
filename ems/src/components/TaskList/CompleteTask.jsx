import React from 'react'

export const CompleteTask = ({ data }) => {
    return (
        <div className='h-full w-[300px] p-5 bg-yellow-400 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.task_date}</h4>
            </div>
            <h2 className='mt-5 text-xl font-bold'>{data.task_title}</h2>
            <p className='text-sm mt-2'>{data.task_description}</p>
            <div className='mt-2'>
                <button className='w-full bg-green-600 rounded py-1 px-2 text-sm'>Complete</button>
            </div>
        </div>
    )
}
