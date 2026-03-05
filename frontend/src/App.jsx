import { useState } from "react";
import {  Routes, Route,  } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import "./App.css";
import Contact from "./pages/Contact.jsx";
import Users from "./pages/Users.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
      </Routes>

  );
}

export default App;
