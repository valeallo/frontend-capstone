import React from 'react'
import axios from 'axios'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const DeleteButton = ({id, element}) => {
    const handleDelete = () => {
        axios.delete(`http://localhost:5000/${element}/${id}`)
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