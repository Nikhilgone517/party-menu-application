import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onHandlelogout = () => {
    localStorage.removeItem("party_menu_token");
    localStorage.removeItem("user");
    navigate("/signin", { replace: true });
  };

  return (
    <div>
      <div>
        <h1>Party Menu</h1>
        <p>Welcome, Admin User</p>
      </div>
      <div>
        <button onClick={() => navigate("/saved-recipes")}>Saved Recipe</button>
        <button onClick={onHandlelogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
