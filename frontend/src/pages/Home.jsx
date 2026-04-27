import { useState } from 'react';

function Home({ expenses, fetchExpenses, API_BASE }) {
  const [type, setType] = useState('');
  const [rupees, setRupees] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!type || !rupees) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_BASE}/api/list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, rupees: Number(rupees) }),
      });

      const data = await response.json();

      if (response.ok) {
        setType('');
        setRupees('');
        fetchExpenses();
      } else {
        setError(data.msg || 'Failed to add expense');
      }
    } catch (err) {
      setError('Failed to add expense. Check server status.');
    } finally {
      setLoading(false);
    }
  };

  const totalExpense = expenses.reduce((sum, exp) => sum + (exp.rupees || 0), 0);

  return (
    <main className="main-content">
      <section className="form-card">
        <h2>Add New Expense</h2>
        <form onSubmit={handleSubmit} className="expense-form">
          <div className="input-group">
            <label htmlFor="type">Expense Type</label>
            <input
              id="type"
              type="text"
              placeholder="e.g. Groceries, Rent, Coffee"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="rupees">Amount (₹)</label>
            <input
              id="rupees"
              type="number"
              placeholder="Enter amount"
              value={rupees}
              onChange={(e) => setRupees(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Adding...' : 'Add Expense'}
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
      </section>

      <section className="list-section">
        <div className="list-header">
          <h2>Recent Expenses</h2>
          <div className="total-badge">
            Current: <span>₹{totalExpense.toLocaleString()}</span>
          </div>
        </div>

        <div className="expense-list">
          {expenses.length === 0 ? (
            <div className="empty-state">No expenses recorded yet.</div>
          ) : (
            <table className="expense-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {[...expenses].reverse().slice(0, 10).map((exp) => (
                  <tr key={exp._id}>
                    <td>{exp.type}</td>
                    <td className="amount">₹{exp.rupees?.toLocaleString()}</td>
                    <td className="date">
                      {new Date(exp.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
