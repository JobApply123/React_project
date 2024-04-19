import React,{useState} from 'react'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    
        // Validate email format
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
        setIsValidEmail(isValid);
      };
    
      const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    
        // Validate password length (at least 6 characters)
        const isValid = newPassword.length >= 6;
        setIsValidPassword(isValid);
      };
  return (
    <div>
    <h2>Login Form</h2>
    <label htmlFor="emailInput">Email:</label>
    <input
      type="text"
      id="emailInput"
      value={email}
      onChange={handleEmailChange}
    />
    {!isValidEmail && (
      <p style={{ color: 'red' }}>Please enter a valid email address.</p>
    )}

    <label htmlFor="passwordInput">Password:</label>
    <input
      type="password"
      id="passwordInput"
      value={password}
      onChange={handlePasswordChange}
    />
    {!isValidPassword && (
      <p style={{ color: 'red' }}>Password must be at least 6 characters long.</p>
    )}
  </div>
);
};
  


export default Login