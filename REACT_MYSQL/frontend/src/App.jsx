import React, { useState, useEffect } from 'react'
import mainRoutes from './Routes/MainRoutes';
import axios from 'axios';

const App = () => {
	useEffect(() => {
		axios.get('http://localhost:8000/students')
			.then(res => {
				console.log(res.data);
				setStudents(res.data)
			})
			.catch(err => console.log("NOT WORKING"))

	}, [])

	// Students handle
	const [students, setStudents] = useState([])

	//handle add button
	const handleAdd = () => {

	}


	return (
		<>
			<mainRoutes />
			<div className='m-14 h-screen p-10'>
				<button onClick={handleAdd} className='bg-blue-700 text-white p-4 rounded-md text-xl hover:scale-90 cursor-pointer'>ADD STUDENT</button>
				<h1 className='text-4xl text-center'>Student Table</h1>


				<table className='text-center table-auto border-collapse border border-slate-500 w-full mt-10'>
					<thead>
						<tr>
							<th className='border border-slate-600'>ID</th>
							<th className='border border-slate-600'>Name</th>
							<th className='border border-slate-600'>Email</th>
							<th className='border border-slate-600'>Age</th>
							<th className='border border-slate-600'>Gender</th>
						</tr>
					</thead>
					<tbody>

						{
							students.map((student, index) => {
								return (
									<tr key={index}>
										<td className='border border-slate-700'>{student.id}</td>
										<td className='border border-slate-700'>{student.name}</td>
										<td className='border border-slate-700'>{student.email}</td>
										<td className='border border-slate-700'>{student.age}</td>
										<td className='border border-slate-700'>{student.gender}</td>
									</tr>
								)
							})
						}


					</tbody>

				</table>

			</div>

		</>
	)
}

export default App