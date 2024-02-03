// Loans.js
import React from 'react';

// Dummy loan data
const loanOptions = [
  { id: 1, name: 'Small Business Loan', interestRate: '5%', amount: 'Up to $10,000' },
  { id: 2, name: 'Entrepreneur Start-up Loan', interestRate: '6%', amount: 'Up to $50,000' },
  { id: 3, name: 'Women Empowerment Loan', interestRate: '4.5%', amount: 'Up to $25,000' }
];

const Loans = () => {
  return (
    <div className="loans-container">
      <h2>Available Loan Options</h2>
      <ul>
        {loanOptions.map((loan) => (
          <li key={loan.id}>
            <h3>{loan.name}</h3>
            <p>Interest Rate: {loan.interestRate}</p>
            <p>Maximum Amount: {loan.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Loans;
