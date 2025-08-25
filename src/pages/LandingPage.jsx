import React from "react";
import Inventory_Management from "../assets/premium_photo.avif";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col md:flex-row shadow-xl rounded-2xl overflow-hidden bg-white">
        
        {/* Left side image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={Inventory_Management}
            alt="inventory-management"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right side content */}
        <div className="flex flex-col justify-center items-center text-center p-10 md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to Inventory Management
          </h1>
          <p className="text-gray-600 mb-8">
            Please select your role to continue
          </p>

          <div className="space-y-4 w-full max-w-sm">
            <button 
                onClick={()=>navigate("/super-admin/login")}
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition">
              Login as Super Admin
            </button>
            <button 
                onClick={()=>navigate("/company-admin/login")}
                className="w-full py-3 bg-green-600 text-white font-medium rounded-xl shadow hover:bg-green-700 transition">
              Login as Company Admin
            </button>
            <button 
                onClick={()=>navigate("/login")}
                className="w-full py-3 bg-purple-600 text-white font-medium rounded-xl shadow hover:bg-purple-700 transition">
              Login as End User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
