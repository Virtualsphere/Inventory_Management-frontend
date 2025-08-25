import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaComputer } from "react-icons/fa6";
import Inventory_Management from "../assets/premium_photo.avif";
import axios from "axios";
import { BASE_URL } from "../Utils";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    role: "",
  });

  const departments = [
    { id: "", label: "Select Role" },
    { id: 1, label: "Supply Chain Leadership" },
    { id: 2, label: "Supply Chain Operations" },
    { id: 3, label: "Finance" },
    { id: 4, label: "CFO/Head of Finance" },
    { id:5, label: "CPO" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, formData);
    alert(response.data.message); // success message
    navigate("/");
  } catch (error) {
    // Handle error response
    if (error.response && error.response.data && error.response.data.message) {
      alert(error.response.data.message); // show backend error like "User already exists"
    } else {
      alert("An unexpected error occurred. Please try again.");
    }
  }
};


  return (
    <div className="flex flex-col md:flex-row w-full ">
      {/* Left Image */}
      <div className="hidden md:block">
        <img
          src={Inventory_Management}
          alt="inventory-management"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-start px-6 md:px-20 py-12 w-full">
        {/* Header */}
        <div className="flex flex-row items-center gap-3 mb-6">
          <p className="text-4xl font-bold text-blue-600">
            <FaComputer />
          </p>
          <p className="font-bold text-xl leading-6">
            Inventory
            <br />
            management
            <br />
            system
          </p>
        </div>

        {/* Title */}
        <div className="text-left mb-4">
          <p className="text-3xl font-bold">Create Account <span className="text-2xl text-blue-400">for end users</span></p>
          <p className="text-sm mt-2 text-gray-600">
            Create your account to start managing inventory and operations
          </p>
        </div>

        {/* Form */}
        <div className="w-full md:w-[60%] space-y-2">
          <div className="flex flex-col">
            <label className="mb-1 font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter first name"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter last name"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Username</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Choose a username"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter email"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter password"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Select Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full cursor-pointer"
            >
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.label}
                </option>
              ))}
            </select>
          </div>

          {/* Signup Button */}
          <div className="pt-4">
            <button
              onClick={handleSignup}
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition duration-200 w-full"
            >
              Sign up
            </button>
          </div>
        </div>

        <p className="pt-3">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
