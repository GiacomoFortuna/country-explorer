import { Link } from "react-router-dom";

const Header = () => {
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

  const toggleButtonStyle = {
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "1.25rem",
  };

  return (
    <div style={headerStyle}>
      <div style={titleStyle}>Country Explorer</div>
      <div style={navLinksStyle}>
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>
        {/* Aggiungi altre pagine se necessario */}
        <button style={toggleButtonStyle} aria-label="Toggle dark mode">
          🌙
        </button>
      </div>
    </div>
  );
};

export default Header;


