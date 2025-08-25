import React from "react";
import { useNavigate } from "react-router-dom";

const HeadOfFinance = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          backgroundColor: "#d1fae5",
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div></div>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            alignSelf: "center",
            marginBottom: "1rem",
          }}
        >
          Logout
        </button>
      </div>

      {/* Fullscreen Power BI Iframe */}
      <div
        style={{
          flexGrow: 1,
          padding: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <iframe
          title="CFO v2"
          src="https://app.powerbi.com/view?r=eyJrIjoiY2MwOTgwNjYtMDQ4MC00MzhmLWFhNzUtNmYzMmJkMDQ4ZTIyIiwidCI6ImEwOTgxODIzLWRmMTUtNDgyYi1iYTY3LWU3ZDI3YTYyZGZkOSJ9" 
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default HeadOfFinance;
