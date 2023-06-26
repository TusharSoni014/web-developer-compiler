import React from "react";
import "./labcard.scss";
import { useNavigate } from "react-router-dom";

export default function LabCard({ data }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(data.url)}
      style={{ background: data.backgroundColor, color: data.color }}
      className="lab-card-item-container"
    >
      <div className="logo-container">{data.logo}</div>
      <div className="lab-name">{data.name}</div>
    </div>
  );
}
