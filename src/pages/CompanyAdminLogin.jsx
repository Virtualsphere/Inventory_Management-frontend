import React, { useState } from "react";
import axios from "axios";
import Inventory_Management from "../assets/premium_photo.avif";
import { Eye, EyeOff } from "lucide-react";
import { BASE_URL } from "../Utils";
import { useNavigate } from "react-router-dom";

const CompanyAdminLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/login-companyAdmin`, 
        {
          companyName,
          password,
        }
      );

      setSuccess(response.data.message);
      localStorage.setItem("token", response.data.token);
      alert("Login Successfully");
      console.log("Login successful:", response.data);
      navigate('/signup');
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col md:flex-row shadow-xl rounded-2xl overflow-hidden bg-white w-full max-w-5xl h-[80vh]">
        
        {/* Left Side Image */}
        <div className="hidden md:block md:w-1/2 h-full">
          <img
            src={Inventory_Management}
            alt="inventory-management"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="flex flex-col justify-center items-center p-10 md:w-1/2 w-full h-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Company Admin Login
          </h2>

          <form className="w-full max-w-sm space-y-5" onSubmit={handleSubmit}>
            {/* Company Name */}
            <div>
              <label className="block text-left text-gray-700 font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter your company name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-left text-gray-700 font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Error / Success messages */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyAdminLogin;
