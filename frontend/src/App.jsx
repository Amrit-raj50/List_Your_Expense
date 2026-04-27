import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Totals from './pages/Totals';
import './App.css';

const API_BASE = 'http://127.0.0.1:3000';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchExpenses = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/alllist`);
      const data = await response.json();
      if (response.ok) {
        setExpenses(data.list || []);
      } else {
        setError(data.msg || 'Failed to fetch expenses');
      }
    } catch (err) {
      setError('Server connection failed.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <Router>
      <div className="container">
        <Navbar />
        
        {error && <div className="global-error">{error}</div>}
        
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                expenses={expenses} 
                fetchExpenses={fetchExpenses} 
                API_BASE={API_BASE} 
              />
            } 
          />
          <Route 
            path="/totals" 
            element={<Totals expenses={expenses} />} 
          />
        </Routes>

        <footer className="footer">
          <p>List Your Expense &copy; 2024</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
