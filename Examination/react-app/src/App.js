import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import homes from "./project/homes";
import courses from "./project/courses";
import contact from "./project/contact";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">homes</Link>
        <Link to="/courses">courses</Link>
        <Link to="/contact">contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<homes />} />
        <Route path="/courses" element={<courses />} />
        <Route path="/contact" element={<contact />} />
      </Routes>
    </Router>
  );
}

export default App;
