import React from 'react'
import axios from 'axios'

const DeleteButton = ({id, element}) => {
    const handleDelete = () => {
        axios.delete(`http://localhost:5000/${element}/${id}`)
        .then(res => {
            console.log(res)
            console.log(res.data)
            window.location.reload(false);
        })}

  return (
   <button onClick={handleDelete}>X</button>
  )
}

export default DeleteButton