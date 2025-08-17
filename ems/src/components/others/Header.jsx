import React, { useState, useEffect } from 'react'
import { setLocalStorage } from '../../utils/localStorage';

const Header = ({ changeUser, data }) => {

    const [userName, setUserName] = useState('')

    useEffect(() => {
        if (!data) {
            setUserName('Admin');
        } else {
            setUserName(data.firstname);
        }
    }, [data]);

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        changeUser('')

    }
    return (
        <div className='flex items-end justify-between'>

            <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{userName} &#128075;</span></h1>
            <button onClick={logOutUser}
                className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
        </div>
    )
}

export default Header