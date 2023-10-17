import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage";

function App() {
  const user = null

  return (
    <div className="App">
      <Router>
        <Routes>
        {!user ? (
            <Route path="/" element={<LoginPage />} />
          ) : (
            <Route path="/" element={<HomePage />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
