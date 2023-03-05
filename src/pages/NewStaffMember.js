import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import { useParams } from 'react-router-dom'



const NewStaffMember = ({editMode}) => {
    const [formData , setFormData] = useState({})
    let { id } = useParams()
    

 const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(editMode) {
            axios.patch(`http://localhost:5000/users/${id}`, formData)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
        } else {
        console.log('submit')
        console.log(formData)
        axios.post('http://localhost:5000/addUser', formData)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
        }
    }


  return (
    <div className="new_staff_member flex w-screen h-screen">
        <h1>{editMode ? 'Update Your Staff Member' : 'Create a Staff Member'}</h1>
        <div className="staff-member-container">
            <form type="submit" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />

                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />

                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />

                <label htmlFor="password">TemporaryPassword</label>
                <input type="text" name="password" value={formData.password} onChange={handleChange} />

                <label htmlFor="role">Role</label>
                <input type="text" name="role" value={formData.role} onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    </div>

  )
}

export default NewStaffMember