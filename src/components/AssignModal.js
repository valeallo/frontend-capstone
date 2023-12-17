import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AssignModal = ({ close, service, id }) => {
  const [staff, setStaff] = useState([]);
  const [formData , setFormData] = useState({})

  const fetchStaff = async () => {
     const apiUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get(
      `${apiUrl}/service/${service}`
    );
    const data = response.data;
    setStaff(data);
  };


  const handleAssign = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${apiUrl}/assistedBy/${id}`,{
        formData
    });}

  useEffect(() => {
    fetchStaff();
  }, []);

  return (
    <div className="w-screen h-screen fixed top-1/2 left-1/2 flex items-center transform -translate-y-1/2 -translate-x-1/2 backdrop-blur-lg">
      <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-stone-100 min-w-[500px] p-4 rounded-xl h-fit ">
        <div className="flex flex-col relative justify-center items-center w-[500px] h-fit p-4 bg-stone-100">
          <div
            className="absolute right-2 top-2 cursor-pointer"
            onClick={() => close(false)}
          >
            X
          </div>

          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"></h2>
              </div>
              <form className="mt-8 space-y-6">
                <div className="-space-y-px rounded-md shadow-sm">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  
                  >
                    {staff &&
                      staff.map((staff) => <option> {staff.firstName}</option>)}
                  </select>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#4e38b3] py-2 px-4 text-sm font-medium text-white hover:bg-[#3D2C8D] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Assegna
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignModal;
