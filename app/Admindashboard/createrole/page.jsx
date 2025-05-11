"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CreateRolePage = () => {
  const [roleName, setRoleName] = useState('')
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post('/api/role', { roleName })
      alert('Role created successfully')
      setRoleName('')
      getuser() // refresh list
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to create role')
    }
    setLoading(false)
  }

  const getuser = async () => {
    setLoading(true)
    try {
      const roleResponse = await axios.get('/api/role')
      setUser(roleResponse.data)
    } catch (error) {
      console.error('Error:', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getuser()
  }, [])

  return (
    <div className="w-full mt-10 p-8 rounded-lg shadow-lg m-auto">
      <h1 className="text-3xl font-semibold mb-4">Create Role</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4 w-300" >
          <label htmlFor="roleName" className="block text-gray-700 text-sm font-bold mb-2">
            Role Name:
          </label>
          <input
            type="text"
            id="roleName"
            name="roleName"
            value={roleName}
            required
            className="shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setRoleName(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {loading ? 'Creating...' : 'Create Role'}
        </button>
      </form>

     {loading && (
  <div className="flex justify-center items-center my-6">
    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-500"></div>
  </div>
)}

      <h1 className="text-3xl font-semibold mb-4 mt-10">Roles</h1>
      <table className="min-w-full border border-gray-200 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Sno</th>
            <th className="py-2 px-4 border-b">Role Name</th>
          </tr>
        </thead>
        <tbody>
          {user.map((role, index) => (
            <tr key={role.id}>
              <td className="py-2 px-4 border-b text-center">{index + 1}</td>
              <td className="py-2 px-4 border-b text-center">{role.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CreateRolePage
