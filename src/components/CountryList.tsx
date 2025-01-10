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

  return (
    <div>
      {countries.map((country) => (
        <div key={country.cca3}>
          <h2>{country.name.common}</h2>
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} width="100" />
          <p>Region: {country.region}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <Link to={`/country/${country.name.common}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};
  