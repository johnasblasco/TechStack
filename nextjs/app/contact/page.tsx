import React from 'react'
import Link from 'next/link'
import ButtonClient from './button';
const page = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = await data.json();
    console.log(posts);


    return (

        <div>
            <Link className='bg-blue-500' href={"/"}>Back to the place where use to be</Link>
            <h2>MAXIMIZE USING SERVER COMPONENT! IF YOU WANT TO ADD CLIENT COMPONENT MAKE A NEW COMPONENT OF IT LIKE THIS BUTTON BELOW</h2>
            <ButtonClient />
            <h1>Contact Page</h1>
            {
                posts.map((post: any, index: number) => {
                    return (
                        <div key={index}>
                            <p>{post.id}</p>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default page