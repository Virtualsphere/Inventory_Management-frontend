import React, { useState } from "react";
import Inventory_Management from "../assets/premium_photo.avif";
import { Eye, EyeOff } from "lucide-react";
import { BASE_URL } from "../Utils";
import axios from "axios";

const CompanyAdmin = () => {

  const [ formData,setFormData ] = useState({
    username: "",
    companyName: "",
    password: "",
  })

  const [logo, setLogo] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.companyName || !formData.password || !logo) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("username", formData.username);
      data.append("companyName", formData.companyName);
      data.append("password", formData.password);
      data.append("logo", logo);

      const response = await axios.post(
        `${BASE_URL}/api/add-company-admin`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert(response.data.message);
      setFormData({ username: "", companyName: "", password: "" });
      setLogo(null);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to create company admin");
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
            Create Company Admin Account
          </h2>

          <form className="w-full max-w-sm space-y-5" onSubmit={handleSubmit}>
          
            <div>
              <label className="block text-left text-gray-700 font-medium mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

          
            <div>
              <label className="block text-left text-gray-700 font-medium mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

          
            <div>
              <label className="block text-left text-gray-700 font-medium mb-1">
                Company Logo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-green-600 file:text-white hover:file:bg-green-700 cursor-pointer"
              />
              {logo && (
                <p className="text-sm text-gray-600 mt-2">
                  Selected: {logo.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-left text-gray-700 font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
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

        
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyAdmin;
