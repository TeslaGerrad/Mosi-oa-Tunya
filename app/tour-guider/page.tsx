// Signup.js
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Tour (){
    const {push} = useRouter()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    push('/tour-guider/dashboard')
    // Add your signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Tour Guider Signup</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              className="mt-1 p-2 block w-full border rounded-md"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 p-2 block w-full border rounded-md"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 p-2 block w-full border rounded-md"
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

