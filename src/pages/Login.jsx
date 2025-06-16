import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaComputer } from "react-icons/fa6";
import Inventory_Management from "../assets/premium_photo.avif";
import axios from "axios";
import { BASE_URL } from "../Utils";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role_id: "",
  });

  const departments = [
    { id: "", label: "Who am I ?" },
    { id: 1, label: "Supply Chain Leadership" },
    { id: 2, label: "Supply Chain Operations" },
    { id: 3, label: "Finance" },
    { id: 4, label: "CFO/Head of Finance" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, formData);
      alert("Login successful!");
      console.log("Response:", response);
      switch (response.data.user.role_id) {
        case 1:
          navigate("/supply-chain-leadership");
          break;
        case 2:
          navigate("/supply-chain-operations");
          break;
        case 3:
          navigate("/finance");
          break;
        case 4:
          navigate("/cfo/head-of-finance");
          break;
        default:
          console.warn("Unknown role. No redirection.");
          break;
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message); // Show the backend error message
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
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
          <p className="text-4xl font-bold">
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
        <div className="text-left mb-6">
          <p className="text-3xl font-bold">Login</p>
          <p className="text-sm mt-2 text-gray-600">
            Choose a department below to manage inventory tasks and track
            operations
          </p>
        </div>

        {/* Form */}
        <div className="w-full md:w-[60%] space-y-6">
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Choose a department</label>
            <select
              name="role_id"
              value={formData.role_id}
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

          <div className="flex flex-row items-center justify-between">
            <button className="flex items-center space-x-2">
              <span className="w-4 h-4 border border-gray-400 rounded-sm"></span>
              <span>Remember me</span>
            </button>
            <p className="text-blue-600 cursor-pointer">Forgot Password?</p>
          </div>

          {/* Login Button */}
          <div className="pt-4">
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition duration-200 w-full"
            >
              Sign in
            </button>
          </div>
        </div>
        <p className="pt-5">
          Don't have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up for free!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
