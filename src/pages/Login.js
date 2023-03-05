import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formState, setFormState] = useState({})
  const [loginError, setLoginError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const authorization = sessionStorage.getItem('authorization')
    if (authorization) {
      navigate('../dashboard', { replace: true })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/login', formState)
      if (res.status === 200) {
        sessionStorage.setItem('authorization', JSON.stringify(res.data))
        navigate('../dashboard', { replace: true })
      }
    } catch (error) {
      if (error) {
        setLoginError(error.response.data)
        console.log(error.response.data)
      }
    }
  }

  
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form className="w-full max-w-sm p-8 rounded-md shadow-md bg-white" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            placeholder="Enter email"
            onChange={(e) => {
              setFormState({
                ...formState,
                email: e.target.value
              })
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            placeholder="Enter password"
            onChange={(e) => {
              setFormState({
                ...formState,
                password: e.target.value
              })
            }}
          />
        </div>
        {loginError && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">{loginError}</div>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
