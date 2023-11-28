import React from "react";
import "../index.css";

const RestrauntCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <h3>Lucky Foods</h3>
      <h4>Biryani,North Indian, Italian</h4>
      <h4>4.2 stars</h4>
      <h4>30 min</h4>
    </div>
  );
};

export default RestrauntCard;
