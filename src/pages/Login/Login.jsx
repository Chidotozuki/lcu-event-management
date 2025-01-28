import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle email/password sign-in
  const handleLogin = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
      if (error) throw error;
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='login-main'>
      <div className='login-container'>
      <h1 className='login-title'>Login</h1>
      {errorMessage && <p className='login-error'>{errorMessage}</p>}
      <div className='login-form'>
        <label className='login-login-label'>Email</label>
        <input
          className='login-input'
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='login-button' onClick={handleLogin} disabled={loading}>
          {loading ? 'Loading...' : 'Login with Email'}
        </button>
      </div>
      <hr className='login-divider' />
      <button className='login-googleButton' onClick={handleGoogleLogin}>
        Login with Google
      </button>
    </div>
    </div>
  );
};



export default Login;
