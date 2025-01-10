import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCountries } from "../services/api";

export const CountryList = () => {
  const [countries, setCountries] = useState<Array<{ cca3: string; name: { common: string }; flags: { svg: string }; region: string; population: number }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(String(error));
        }
      } finally {
        setLoading(false);
      }
    };

    getCountries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const countryListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "16px",
    padding: "16px",
  };

  const countryCardStyle: React.CSSProperties = {
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    textAlign: "center",
    padding: "16px",
  };

  const countryCardImageStyle = {
    width: "100%",
    height: "auto",
    borderBottom: "1px solid #ddd",
    marginBottom: "8px",
  };

  const countryCardTitleStyle = {
    fontSize: "1.25rem",
    margin: "8px 0",
  };

  const countryCardTextStyle = {
    margin: "4px 0",
    color: "#555",
  };

  const countryCardLinkStyle = {
    display: "inline-block",
    marginTop: "8px",
    padding: "8px 16px",
    backgroundColor: "#319795",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
  };

  const countryCardLinkHoverStyle = {
    backgroundColor: "#287a6e",
  };

  return (
    <div style={countryListStyle}>
      {countries.map((country) => (
        <div key={country.cca3} style={countryCardStyle}>
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} style={countryCardImageStyle} />
          <h2 style={countryCardTitleStyle}>{country.name.common}</h2>
          <p style={countryCardTextStyle}>Region: {country.region}</p>
          <p style={countryCardTextStyle}>Population: {country.population.toLocaleString()}</p>
          <Link to={`/country/${country.name.common}`} style={countryCardLinkStyle} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = countryCardLinkHoverStyle.backgroundColor)} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = countryCardLinkStyle.backgroundColor)}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};
  