import React, { useState } from 'react';

function Calculator() {
  // State to track numbers and result
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  // Functions for operations
  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivide = () => {
    if (num2 === '0') {
      setResult('Cannot divide by 0');
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div>
      <h1>Basic Calculator</h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
      </div>

      <h2>Result: {result !== null ? result : ''}</h2>
    </div>
  );
}

export default Calculator;
