import React from 'react'
import axios from 'axios'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const DeleteButton = ({id, element}) => {
    const handleDelete = () => {
      const apiUrl = process.env.REACT_APP_API_URL;
        axios.delete(`${apiUrl}/${element}/${id}`)
        .then(res => {
            alert("Elemento eliminato")
            window.location.reload(false);
        })}

  return (
   <button onClick={handleDelete}>
         <DeleteOutlineIcon />
   </button>
  )
}

export default DeleteButton
