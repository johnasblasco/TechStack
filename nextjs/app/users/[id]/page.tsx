import React from 'react'

interface UsersPageProps {
    params: {
        id: string
        name: string
    }
}

const UsersPage = async ({ params }: UsersPageProps) => {
    const { id, name } = params

    return (
        <div>
            <h1>User Page</h1>
            <h2>{name}</h2>
            <h2>{id}</h2>
        </div>
    )
}

export default UsersPage
