import React, { useState } from 'react';

function LoginForm() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'fullName') {
      setFullName(value);
    } else if (name === 'age') {
      setAge(value);
    }
  };

  
  const handleClear = () => {
    setEmail('');
    setPassword('');
    setFullName('');
    setAge('');
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
        </div>

        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleInputChange}
            placeholder="Enter your age"
          />
        </div>

        <button type="button" onClick={handleClear}>Clear</button>
      </form>

      <h2>Form Data:</h2>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Full Name: {fullName}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default LoginForm;
