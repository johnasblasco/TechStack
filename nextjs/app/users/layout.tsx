import React from 'react'

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h1 className='text-red-400'> USER NAVBAR</h1>
            {children}
        </div>
    )
}

export default UsersLayout