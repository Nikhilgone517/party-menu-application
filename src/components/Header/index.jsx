import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Header = () => {
  const navigate = useNavigate();
  const onHandlelogout = () => {
    localStorage.removeItem("party_menu_token");
    localStorage.removeItem("user");
    navigate("/signin", { replace: true });
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <h1 className="bold-white-text">Party Menu</h1>
        <p>Welcome, Admin User</p>
      </div>
      <div className="header-buttons">
        <button className="header-button" onClick={() => navigate("/saved-recipes")}>Saved Recipe</button>
        <button className="header-button" onClick={onHandlelogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
