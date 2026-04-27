function Totals({ expenses }) {
  // Aggregate by type
  const totalsByType = expenses.reduce((acc, exp) => {
    const type = exp.type || 'Other';
    acc[type] = (acc[type] || 0) + (exp.rupees || 0);
    return acc;
  }, {});

  const grandTotal = expenses.reduce((sum, exp) => sum + (exp.rupees || 0), 0);
  const totalCount = expenses.length;

  return (
    <div className="totals-page">
      <header className="page-header">
        <h2>Expense Analytics</h2>
        <p>Comprehensive breakdown of your spending</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card highlight">
          <h3>Grand Total</h3>
          <p className="stat-value">₹{grandTotal.toLocaleString()}</p>
          <p className="stat-label">Spent across {totalCount} entries</p>
        </div>
      </div>

      <section className="breakdown-section">
        <h3>Breakdown by Category</h3>
        <div className="category-cards">
          {Object.entries(totalsByType).length === 0 ? (
            <p>No data to analyze.</p>
          ) : (
            Object.entries(totalsByType)
              .sort((a, b) => b[1] - a[1]) // Sort by amount descending
              .map(([type, amount]) => (
                <div key={type} className="category-item">
                  <div className="category-info">
                    <span className="category-name">{type}</span>
                    <span className="category-amount">₹{amount.toLocaleString()}</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${(amount / grandTotal) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Totals;
