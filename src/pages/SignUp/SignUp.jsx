import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useAuth } from '../../context/AuthContext';

const SignUp = () => {
  const { signUp, loading } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Sign-Up
  const handleSignUp = async () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;

    // Validation checks
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setErrorMessage('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    setErrorMessage('');
    setSuccessMessage('');

    await signUp({ fullName: `${firstName} ${lastName}`, password, phone: "",email});
    navigate('/dashboard');
  };

  return (
    <div className='sign-main'>
      <div className='sign-container'>
      <h1 className='sign-title'>Sign Up</h1>
      {errorMessage && <p className='sign-error'>{errorMessage}</p>}
      {successMessage && <p className='sign-success'>{successMessage}</p>}
      <div className='sign-form'>
        <label className='sign-label'>First Name</label>
        <input
          className='sign-input'
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleInputChange}
        />

        <label className='sign-label'>Last Name</label>
        <input
          className='sign-input'
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleInputChange}
        />

        <label className='sign-label'>Email</label>
        <input
          className='sign-input'
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label className='sign-label'>Password</label>
        <input
          className='sign-input'
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <label className='sign-label'>Confirm Password</label>
        <input
          className='sign-input'
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />

        <button className='sign-button' onClick={handleSignUp} disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </div>
    </div>
    </div>
  );
};


export default SignUp;
