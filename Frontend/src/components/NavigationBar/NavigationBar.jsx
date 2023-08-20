import * as React from "react";
import "./NavigationBar.css";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function NavigationBar(props) {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <img
        alt="logo"
        src={logo}
        className="navbar-logo"
        onClick={() => {
          navigate("/");
        }}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
