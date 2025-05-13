'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });

      if (!response.data.user.role) {
        alert('Role not assigned yet');
        return;
      }

      localStorage.setItem('user', JSON.stringify(response.data.user));
      router.push('/Admindashboard');
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="relative mt-10">
      <div className="w-full  border-gray-500 h-13 text-center">
        <img
          src="/images/igp.png"
          alt="Logo"
          className="w-20 absolute top-1/22 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <img
          src="https://cdn.igp.com/raw/upload/assets/svg-icons/rebrand-login-ill.svg"
          alt="Illustration"
          width="100%"
        />
      </div>

      <div className="p-12 absolute top-90 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg max-w-md w-full">
        <div>
          <h1 className="text-2xl inter">Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-10">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-gray-600">
              Email <sup>*</sup>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="shadow-lg p-3 border border-gray-300 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-gray-600">
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="shadow-lg p-3 border border-gray-300 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div
            className="btn mt-6"
            style={{
              backgroundColor: '#DD2745',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button type="submit" className="text-white">
              LOGIN
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;

