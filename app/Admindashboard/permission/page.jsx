"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const page = () => {
  const [roles, setRoles] = useState([])
  const [loading, setLoading] = useState(true)

  const loadRoles = async () => {
    setLoading(true)
    try {
      const response = await axios.get('/api/role')
      setRoles(response.data)
    } catch (error) {
      console.error('Error fetching roles:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCheckboxChange = async (roleId, permission) => {
    try {
      const response = await axios.post('/api/role/managerole', { roleId, permission })
    } catch (error) {
      console.error('Error updating permission:', error)
    }
  }

  useEffect(() => {
    loadRoles()
  }, [])

  if (loading) {
    return  (
      <div className='mt-50 ml-150'>
          <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500'></div>
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-400 overflow-scroll h-150 ">
      {roles.map((role) => (
        <div key={role.id} className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">{role.name}</h2>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Manage Role</label>
            <input
              type="checkbox"
              value="role"
              defaultChecked={role.permissions.includes('role')}
              onChange={() => handleCheckboxChange(role.id, 'role')}
              className="mr-2"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Manage Permissions</label>
            <input
              type="checkbox"
              value="permission"
              defaultChecked={role.permissions.includes('permission')}
              onChange={() => handleCheckboxChange(role.id, 'permission')}
              className="mr-2"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">View Permissions</label>
            <input
              type="checkbox"
              value="permissionview"
              defaultChecked={role.permissions.includes('permissionview')}
              onChange={() => handleCheckboxChange(role.id, 'permissionview')}
              className="mr-2"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Add Product</label>
            <input
              type="checkbox"
              value="addproduct"
              defaultChecked={role.permissions.includes('addproduct')}
              onChange={() => handleCheckboxChange(role.id, 'addproduct')}
              className="mr-2"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Edit Product</label>
            <input
              type="checkbox"
              value="editproduct"
              defaultChecked={role.permissions.includes('editproduct')}
              onChange={() => handleCheckboxChange(role.id, 'editproduct')}
              className="mr-2"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Display Product</label>
            <input
              type="checkbox"
              value="displayproduct"
              defaultChecked={role.permissions.includes('displayproduct')}
              onChange={() => handleCheckboxChange(role.id, 'displayproduct')}
              className="mr-2"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Delete Product</label>
            <input
              type="checkbox"
              value="deleteproduct"
              defaultChecked={role.permissions.includes('deleteproduct')}
              onChange={() => handleCheckboxChange(role.id, 'deleteproduct')}
              className="mr-2"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Manage Vendor</label>
            <input
              type="checkbox"
              value="managevendor"
              defaultChecked={role.permissions.includes('managevendor')}
              onChange={() => handleCheckboxChange(role.id, 'managevendor')}
              className="mr-2"
            />
          </div>
            <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Manage category</label>
            <input
              type="checkbox"
              value="managecategory"
              defaultChecked={role.permissions.includes('managecategory')}
              onChange={() => handleCheckboxChange(role.id, 'managecategory')}
              className="mr-2"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
export default page

