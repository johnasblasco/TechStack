import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddStudent from '../Components/addStudent'

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add' element={<AddStudent />} />
            </Routes>
        </div>
    )
}

export default MainRoutes