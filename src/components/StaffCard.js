import React from 'react'
import DeleteButton from './DeleteButton'
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';


const StaffCard = ({user}) => {
  return (
    <tr className="border-b bg-gray-50 border-gray-200">
               <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                <Link to={`/users/${user._id}`}>
              <EditIcon />
               </Link>
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
              {user.username}
              </td>
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
              {user.firstName}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {user.lastName}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {user.email}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {user.role}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {user.service}
              </td>
  
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <DeleteButton  id = {user._id} element = "users"/>
              </td>
            </tr>
   
  )
}

export default StaffCard