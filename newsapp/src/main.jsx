import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import USNews from "./pages/USNews.jsx";

const basename = "/NewsApp";

const router = (
  <Router basename={basename}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="usnews" element={<USNews />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>{router}</React.StrictMode>
);
