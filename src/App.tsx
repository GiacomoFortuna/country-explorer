import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { CountryList } from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout><CountryList /></Layout>} />
        <Route path="/country/:name" element={<Layout><CountryDetails /></Layout>} />
        {/* Aggiungi altre route qui */}
      </Routes>
    
  );
}

export default App;




