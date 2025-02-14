import Navbar from "./components/Navbar"
import HomePage from "./Pages/HomePage"
import LoginPage from "./Pages/LoginPage"
import RoleSelectionPage from "./pages/RoleSelectionPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/role-select" element={<RoleSelectionPage />} />
          <Route path="/vendor-signup" element={<LoginPage />} />
          <Route path="/user-signup" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
