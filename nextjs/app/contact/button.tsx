'use client';
import React from 'react'
const ButtonClient = () => {

    const handleClick = () => {
        alert("HELLO WORLD");
    }

    return (
        <button onClick={handleClick} className='bg-red-600'>CLICK ME</button>
    )
}

export default ButtonClient;