import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { CountryList } from "./components/CountryList";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout><CountryList /></Layout>} />
        {/* Aggiungi altre route qui */}
      </Routes>
    
  );
}

export default App;




