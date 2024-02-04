import React, { useState, useEffect } from 'react';
import './Loans.css';

function Loans() {
  // State to store the loaded financial products
  const [financialProducts, setFinancialProducts] = useState({ financial_products: [] });

  // Effect to fetch the data on mount
  useEffect(() => {
    fetch('/data/financial_products.json') // Adjust the path if necessary
      .then(response => response.json())
      .then(data => setFinancialProducts(data))
      .catch(error => console.error('Error fetching financial products:', error));
  }, []); // Empty dependency array means this effect runs once on mount

  // Dynamically generate table rows
  const rows = financialProducts.financial_products.map((product, index) => (
    <tr key={index}>
     <td>
      <img src={product.imagePath} alt={product.name} style={{width: "150px", height: "auto"}} /> {/* Adjust image display properties as needed */}
    </td>
      <td>{product.name}</td>
      <td>{product.interest_rate || product.amount}</td>
      <td>{product.term || product.sector}</td>
      <td>{product.max_amount || 'N/A'}</td>
      <td>
        <ul>
          {product.requirements.map((req, reqIndex) => <li key={reqIndex}>{req}</li>)}
        </ul>
      </td>
    </tr>
  ));

  return (
    <div className="loans-container">
      <h2>Financial Products</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Name</th>
            <th>Interest Rate (APR)</th>
            <th>Term</th>
            <th>Max Amount</th>
            <th>Requirements</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default Loans;
