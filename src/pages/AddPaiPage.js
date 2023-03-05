import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import { useParams, useNavigate } from "react-router-dom";

const AddPaiPage = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_BASE_URL}/addPai`,
      formData
    );
    console.log("response:", response);
    if (response.status === 200) {
      alert("Pai aggiunto correttamente!");

      navigate("/");
    }
  };

  return (
    <div className="pai_page flex w-screen h-screen">
      <Nav className="w-20%" />
      <div className="w-80% flex flex-col justify-evenly">
        <h1> Aggiungi un Pai: </h1>
        <form type="submit" onSubmit={handleSubmit}>
          <div className="w-full flex flex-row justify-evenly">
            <div className="w-[40%] flex flex-wrap -mx-3 mb-6">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="patientName"
                  >
                    Nome
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="patientName"
                    name="patientName"
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, patientName: e.target.value })
                    }
                    required={true}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="patientLastName"
                  >
                    Cognome
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="patientLastName"
                    name="patientLastName"
                    type="text"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        patientLastName: e.target.value,
                      })
                    }
                    required={true}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="patientPhoneNumber"
                  >
                    Numero di telefono
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="patientPhoneNumber"
                    name="patientPhoneNumber"
                    type="text"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        patientPhoneNumber: e.target.value,
                      })
                    }
                    required={true}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="patientDateOfBirth"
                  >
                    Data di Nascita
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="patientDateOfBirth"
                    name="patientDateOfBirth"
                    type="date"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        patientDateOfBirth: e.target.value,
                      })
                    }
                    required={true}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="patientAddress"
                  >
                    Indirizzo
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="patientAddress"
                    name="patientAddress"
                    type="text"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        patientAddress: e.target.value,
                      })
                    }
                    required={true}
                  />
                </div>
              </div>
            </div>

            <div className="w-[40%] flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="patientCity"
                  >
                    Servizio
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      required={true}
                    >
                      <option>Scegli un servizio</option>
                      <option>Assistenziale</option>
                      <option>Infiermeristico</option>
                      <option>Fisioterapia</option>
                      <option>Logopedia</option>
                      <option>Psicoterapia</option>
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
              
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="numberOfTreatments"
                >
                  Numero accessi
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="numberOfTreatments"
                  name="numberOfTreatments"
                  type="number"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      numberOfTreatments: e.target.value,
                    })
                  }
                  required={true}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="patientDateOfBirth"
                >
                  Data di inizio
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="dateOfActivation"
                  name="dateOfActivation"
                  type="date"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dateOfActivation: e.target.value,
                    })
                  }
                  required={true}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="patientDateOfBirth"
                >
                  Data di scadenza
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="expiringDate"
                  name="expiringDate"
                  type="date"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      expiringDate: e.target.value,
                    })
                  }
                  required={true}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="status"
                >
                  Stato
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    required={true}
                  >
                    <option>Scegli uno stato</option>
                    <option>aperto</option>
                    <option>chiuso</option>
                    <option>scaduto/da rinnovare</option>
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
            Invia
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPaiPage;
