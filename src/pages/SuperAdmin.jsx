import React, { useState } from "react";
import Inventory_Management from "../assets/premium_photo.avif";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Utils";

const SuperAdmin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/auth/login-superAdmin`, {
        email: formData.email,
        password: formData.password,
      });

      // assuming backend returns token & user details
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        alert("Login Successful!");
        navigate("/account/company-admin");
      } else {
        alert(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col md:flex-row shadow-xl rounded-2xl overflow-hidden bg-white w-full max-w-5xl h-[80vh]">
        <div className="hidden md:block md:w-1/2 h-full">
          <img
            src={Inventory_Management}
            alt="inventory-management"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center items-center p-10 md:w-1/2 w-full h-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Super Admin Login
          </h2>

          <form className="w-full max-w-sm space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-left text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          {/* <p className="mt-6 text-gray-600 text-sm">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/account/company-admin")}
              className="text-blue-600 font-medium hover:underline cursor-pointer"
            >
              Create Account for Company Admin
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;