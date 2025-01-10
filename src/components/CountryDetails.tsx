import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCountryDetails } from "../services/api";

interface Country {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  region: string;
  population: number;
  capital: string[];
  subregion: string;
  languages: { [key: string]: string };
}

const CountryDetails = () => {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCountryDetails = async () => {
      try {
        const data = await fetchCountryDetails(name!);
        setCountry(data[0]);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCountryDetails();
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const countryDetailsStyle = {
    padding: "16px",
  };

  const countryDetailsImageStyle = {
    width: "100%",
    height: "auto",
    borderBottom: "1px solid #ddd",
    marginBottom: "8px",
  };

  const countryDetailsTitleStyle = {
    fontSize: "1.5rem",
    margin: "8px 0",
  };

  const countryDetailsTextStyle = {
    margin: "4px 0",
    color: "#555",
  };

  return (
    <div style={countryDetailsStyle}>
      {country && (
        <>
          <h2 style={countryDetailsTitleStyle}>{country.name.common}</h2>
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} style={countryDetailsImageStyle} />
          <p style={countryDetailsTextStyle}>Region: {country.region}</p>
          <p style={countryDetailsTextStyle}>Subregion: {country.subregion}</p>
          <p style={countryDetailsTextStyle}>Capital: {country.capital.join(", ")}</p>
          <p style={countryDetailsTextStyle}>Population: {country.population.toLocaleString()}</p>
          <p style={countryDetailsTextStyle}>Languages: {Object.values(country.languages).join(", ")}</p>
        </>
      )}
    </div>
  );
};

export default CountryDetails;