export const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error(`Failed to fetch countries: ${response.status} ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error("Error fetching countries:", error);
      throw error;
    }
  };