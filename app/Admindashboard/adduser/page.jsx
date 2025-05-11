"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaUser } from 'react-icons/fa'
import axios from 'axios'
const AddUserPage = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
  let response = await axios.post('/api/user', {
      name,
      email,
      password,
      phone,
    })
    if (response.status === 200) {
      alert('User added successfully')
      router.push('/Admindashboard')
    } else {
      alert('Failed to add user')
    }

  }

  return (
    <div className="h-screen w-full p-0">
      <div className="w-96 mx-auto p-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <FaUser className="inline-block mr-2" /> Add User
          </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUserPage

