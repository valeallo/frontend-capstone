import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import EditIcon from '@mui/icons-material/Edit';
import Face5Icon from '@mui/icons-material/Face5';
import AssignModal from "./AssignModal";


const PaiCard = ({ pai }) => {
  const [modal, setModal] = useState(false)
  const service = pai.service
  const id = pai._id
  const [doctor, setDoctor] = useState('')
  const [button, setButton] = useState(false)
  
  const getDoctor = () => {
    
    if (pai.assistedBy) {
      setDoctor(pai.assistedBy[0].doctorName)
      console.log(doctor)
    } else {
      setButton(true)
    }
  
  }

    useEffect(() => {
      getDoctor()
    }, [])
 
  return (
    <tr className="border-b bg-gray-50 border-gray-200">
      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
        <Link to={`/pai/${pai._id}`} >
          <EditIcon />
        </Link>
      </td>
      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
        {pai.patientName} {pai.patientLastName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {pai.service}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <div className="flex flex-col">
        {pai.dateOfActivation}
        {pai.expiringDate}
        </div>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {pai.numberOfTreatments}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {pai.status}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
     {button?(
      <button
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 w-24  rounded-full bg-pink-400"
                    onClick={() => setModal(true)}
                >
                    Assegna
                </button>) : (<span>{doctor}</span>) }
      </td>

      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <DeleteButton id={pai._id} element="pai" />
      </td>
      {modal && <AssignModal close={setModal} service={service} id={pai.id} />}
    </tr>
  );
};

export default PaiCard;
