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

  return (
    <div>
      {country && (
        <>
          <h2>{country.name.common}</h2>
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="100" />
          <p>Region: {country.region}</p>
          <p>Subregion: {country.subregion}</p>
          <p>Capital: {country.capital.join(", ")}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Languages: {Object.values(country.languages).join(", ")}</p>
        </>
      )}
    </div>
  );
};

export default CountryDetails;