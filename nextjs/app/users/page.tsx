import React from 'react'

const Users = async () => {

    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    console.log(users);


    return (
        <div>
            <h1>USERS PAGE</h1>


            <h2>USERS LISTS:</h2>
            {
                users.map((user: any, index: number) => {
                    return (
                        <div key={index}>
                            <p>{user.name}</p>
                        </div>
                    );
                })


            }

        </div>
    )
}

export default Users