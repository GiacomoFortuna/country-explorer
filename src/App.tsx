import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Layout> {/* Add children here if needed */} </Layout>} />
          {/* Aggiungi altre route qui */}
        </Routes>
      </Router>
    
  );
}

export default App;



