import React from "react";
import "./header.scss";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <h3 onClick={() => navigate("/")}>WD Compiler</h3>
      <a target="_blank" href="https://github.com/tusharsoni014">
        <img
          src="https://avatars.githubusercontent.com/u/71227235?v=4"
          alt="https://avatars.githubusercontent.com/u/71227235?v=4"
        />
      </a>
    </div>
  );
}
