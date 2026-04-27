import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">💰 ExpenseTracker</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Add & View</Link>
        <Link to="/totals" className="nav-link">Total Analytics</Link>
      </div>
    </nav>
  );
};

export default Navbar;
