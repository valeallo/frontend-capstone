import React from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'

const PaiCard = ({pai}) => {
  return (
       
        <tr className="border-b bg-gray-50 border-gray-200">
        <Link to={`/pai/${pai._id}`}  >
                  <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                  {pai.patientName}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {pai.service}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {pai.status}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {pai.numberOfTreatments}
                  </td>
                  </Link>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <DeleteButton  id = {pai._id} element = "pai"/>
                  </td>
                </tr>
     
        
       

   
  )
}

export default PaiCard