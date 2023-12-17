import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

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
      const res = await axios.post('${process.env.REACT_APP_API_URL}/users/login', formState)
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
    <>
     
    <section className="h-screen w-full flex flex-wrap">
               <div className="w-[50%] hidden md:block" style={{
                   backgroundImage: `url("https://i.ibb.co/Ny5mQnf/1.jpg")`,
                   backgroundSize: 'cover',
                   backgroundRepeat: 'no-repeat',
                   backgroundPosition: 'center'
               }}>
               </div>
     <div className=" w-full md:w-[50%] flex flex-col justify-center items-center">
       
       
    <LoginForm />
   
    </div>
     </section>
   </>
  )
}

export default Login
