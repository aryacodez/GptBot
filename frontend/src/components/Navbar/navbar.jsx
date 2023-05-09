import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    //API - 1
    await fetch("/api/v1/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then(() => {
        alert("Logout Successful");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div
        className="container-fluid p-2 pe-5 d-flex justify-content-end"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="d-flex justify-content-between">
          <Link to="/chat" style={{ textDecoration: "none", color: "#000" }}>
            <div className="p-2 me-3">Chat-Bot</div>
          </Link>
          <Link to="/scraper" style={{ textDecoration: "none", color: "#000" }}>
            <div className="p-2 me-3">Scraper</div>
          </Link>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
