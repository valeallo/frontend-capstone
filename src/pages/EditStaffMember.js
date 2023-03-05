import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { useParams, useNavigate } from "react-router-dom";

const EditStaffMember = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  let { id } = useParams();

  console.log(formData);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    const data = {
      username: response.data.username,
      firstName: response.data.firstName,
      lastName: response.data.lastName,
      email: response.data.email,
      password: response.data.password,
      role: response.data.role,
      service: response.data.service, 
    };
    console.log("dai letti", data);
    setFormData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("dati passati", formData);
    try {
      const response = await axios.patch(`http://localhost:5000/users/${id}`, {
        formData,
      });
      console.log("status" + response.status);
      const success = response.status === 200;
      if (success) {
        alert("Utente modificato correttamente!");
        console.log(response);

        navigate('/')
      }
    } catch (err) {
      alert("Errore nella modifica dell'utente!");
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="pai_page flex w-screen h-screen">
      <Nav className="w-20%" />
      <div className="w-80% flex flex-col justify-evenly">
        <h1> Modifica Pai: </h1>
        <form type="submit" onSubmit={handleSubmit}>
          <div className="w-full flex flex-row justify-evenly ">
            
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="username"
                  name="username"
                  type="text"
                  onChange={handleChange}
                  required={true}
                  value={formData.username}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="firstName"
                >
                  Nome
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={handleChange}
                  required={true}
                  value={formData.firstName}

                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lastName"
                >
                  Cognome
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  required={true}
                  value={formData.lastName}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  required={true}
                  value={formData.email}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                />
              </div>
            
              
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="role"
                >
                  Ruolo
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="role"
                    name="role"
                    onChange={handleChange}
                    required={true}
                    value={formData.role}
                  >
                    <option>Scegli un ruolo</option>
                    <option>user</option>
                    <option>admin</option>

                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                    </svg>
                  </div>
                </div>
              </div>

            <div className="w-[40%] flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="service"
                >
                  Servizio
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    onChange={handleChange}
                    required={true}
                    value={formData.service}
                    name="service"
                  >
                    <option>Scegli un servizio</option>
                    <option>Assistenziale</option>
                    <option>Infiermeristico</option>
                    <option>Fisioterapia</option>
                    <option>Logopedia</option>
                    <option>Psicoterapia</option>
                    <option>Ufficio</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                    </svg>
                  </div>
                </div>
             
           
            
             
              
            </div>
            </div>
          </div>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditStaffMember;
