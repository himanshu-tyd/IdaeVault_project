import './App.css'
import Signup from './components/signup'
import Login from './components/login'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Your protected page

function App() {

  return (
     <Router>
    <div class>
      <Navbar />
    <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Protected route */}
    </Routes>
   </div>
   </Router>
  )
}

function Navbar() {
  return <div className='navbar navborder'>
    <div>
    <h1>IdeaVault</h1>
    </div>
    <div className='navbar'>
      <h2>Signup</h2>
      <h2> Login</h2>
    </div>
  </div>
}

export default App
