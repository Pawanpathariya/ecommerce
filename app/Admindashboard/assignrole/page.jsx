'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
const AssignRolePage = () => {
    const [users, setUsers] = useState([]);
    const [alluser, setalluser] = useState([]);
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/api/user');
            setalluser(response.data);
            console.log(response.data);
            const usersWithoutRoles = response.data.filter(user => !user.roleId);
            setUsers(usersWithoutRoles);
            
            const roleResponse = await axios.get('/api/role');
            setRoles(roleResponse.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRole = async (userId, roleId) => {
        setLoading(true);
        try {
            const response = await axios.post('/api/assignrole', { userId, roleId });
            console.log(response.data);
            toast.success('Role assigned successfully!');
            loadUsers();
        } catch (error) {
            console.error('Error assigning role:', error);
            toast.error('Error assigning role. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    if (loading) {
        return (
            <div className='mt-50 ml-150'>
                <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500'></div>
            </div>
        );
    }

    return (
        <div className='container mx-auto p-4 ml-50'>
            <h1 className='text-3xl font-bold mb-4 text-center'>Assign Role</h1>
            <div className='bg-white rounded-lg shadow-md p-4'>
                <table className='w-full border-collapse'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='p-2 border'>Name</th>
                            <th className='p-2 border'>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className='odd:bg-white even:bg-gray-100'>
                                <td className='p-2 border'>{user.name}</td>
                                <td className='p-2 border'>
                                    <select
                                        className='border p-2'
                                        onChange={(e) => handleRole(user.id, e.target.value)}
                                    >
                                        <option value=''>Select Role</option>
                                        {roles.map((role) => (
                                            <option key={role.id} value={role.id}>
                                                {role.name}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h1 className='text-3xl font-bold mb-4 mt-4 text-center'>All Users</h1>
            <div className='bg-white rounded-lg shadow-md p-4'>
                <table className='w-full border-collapse'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='p-2 border'><FaUser className='inline-block mr-2' />Name</th>
                            <th className='p-2 border'>Email</th>
                            <th className='p-2 border'>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alluser.map((user) => (
                            <tr key={user.id} className='odd:bg-white even:bg-gray-100'>
                                <td className='p-2 border'>{user.name}</td>
                                <td className='p-2 border'>{user.email}</td>
                                <td className='p-2 border'>{user.roleId ? user.role.name : 'No Role Assigned'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignRolePage;

