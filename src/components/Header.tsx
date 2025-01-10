import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const headerStyle = {
    backgroundColor: "#319795", // teal.500
    padding: "16px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  };

  const navLinkStyle = {
    fontWeight: 600,
    color: "white",
    textDecoration: "none",
  };

  const searchInputStyle = {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    marginRight: "8px",
    color: "black", // Imposta il colore del testo a nero
  };

  const searchButtonStyle = {
    padding: "8px 16px",
    backgroundColor: "#287a6e",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/country/${searchTerm}`);
    }
  };

  return (
    <div style={headerStyle}>
      <div style={titleStyle}>Country Explorer</div>
      <div style={navLinksStyle}>
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>
        <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search country"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchInputStyle}
          />
          <button type="submit" style={searchButtonStyle}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;


