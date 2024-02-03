import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loans from "./pages/Loans"; // Ensure this path is correct
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/* Define a route for the main page and include all components that should appear on the main page */}
          <Route path="/" element={
            <>
              <Banner />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
          {/* Define the route for the Loans page */}
          <Route path="/loans" element={<Loans />} />
          {/* You can add more routes for other pages as needed */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
