import React from "react";
import { useNavigate } from "react-router-dom";

const SupplyChainOperations = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar with Logout at Bottom */}
      <div
        style={{
          width: "220px",
          backgroundColor: "#d1fae5", // light green (tailwind's green-100)
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // push logout button to bottom
          alignItems: "flex-start",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div></div> {/* Empty div to occupy space at top */}
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

      {/* Power BI Iframe */}
      <div
        style={{
          flexGrow: 1,
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          title="Inventory"
          width="1000"
          height="673.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiYTAyMmYxOTEtNDM4My00NTI1LTg0YmQtNGZiMGUzNDM5Y2ZlIiwidCI6ImEwOTgxODIzLWRmMTUtNDgyYi1iYTY3LWU3ZDI3YTYyZGZkOSJ9"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
};

export default SupplyChainOperations;
