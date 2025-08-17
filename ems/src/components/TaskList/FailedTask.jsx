import React from 'react'

export const FailedTask = ({ data }) => {
    return (
        <div className='h-full w-[300px] p-5 bg-blue-400 rounded-xl flex-shrink-0'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-yellow-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.task_date}</h4>
            </div>
            <h2 className='mt-5 text-xl font-bold'>{data.task_title}</h2>
            <p className='text-sm mt-2'>{data.task_description}</p>
        </div>
    )
}
