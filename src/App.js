import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Ziel from "./pages/Ziel/Ziel";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        {/* Header */}
        <Header />

       {/* Main */}
        <Container className="flex-grow-1 d-flex align-items-top justify-content-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ziel" element={<Ziel />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        
          {/* Footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
