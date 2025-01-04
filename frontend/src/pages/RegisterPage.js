import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData.name, formData.email, formData.password, navigate);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
