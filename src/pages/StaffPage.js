import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import StaffCard from '../components/StaffCard'

const StaffPage = () => {
    const [professionals, setProfessionals] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(false)


    const fetchProfessionals = async () => {
        setIsLoading(true)
        try {
        const res = await fetch('http://localhost:5000/users')
        const data = await res.json()
        setProfessionals(data)
        setIsLoading(false)
    } catch (error) {
        setErr(true)
        setIsLoading(false)
    }
    }

    useEffect(() => {
        fetchProfessionals()
    }, [])


return(
    <div className="dashboard_page flex w-screen h-screen">
    <Nav />
    <div className= " w-full p-20 space-y-10 ">
        <div className="bg-zinc-200 w-full h-20">
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
            <thead className="border-b">
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                    MODIFICA
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                    USERNAME
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                    NOME
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                   COGNONE
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                    EMAIL
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                    PERMESSI
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                    SERVIZIO
                  </th>
               
              </thead>
              
              <tbody>
              {isLoading && !err && <p>page is loading</p> }
      { professionals && !isLoading && err && (
        <p>Oops qualcosa non è andata a buon fine...</p>
      )}
              {professionals &&
        !err &&
        professionals.map((user, _index) => {
                return <StaffCard key={_index} user={user} />
            }
            )}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
)

  return (
    <div>
         <div className="dashboard_page flex w-screen h-screen">
      <Nav />
      <div className= " w-full p-20 space-y-10 ">
        <div className="bg-zinc-200 w-full h-20">
        {isLoading && !err && <p>page is loading</p> }
      { professionals && !isLoading && err && (
        <p>Oops qualcosa non è andata a buon fine...</p>
      )}
              {professionals &&
        !err &&
        professionals.map((user, _index) => {
                return <StaffCard key={_index} user={user} />
            }
            )}
        </div>
        <div className="bg-red-200 w-full h-20">
            <h1>Hello</h1>
        </div>
        <div className="bg-blue-200 w-full h-20">

        </div>
      </div>
    </div>
       
    </div>
    
  )
}

export default StaffPage