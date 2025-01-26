import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

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
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}
      <div style={styles.form}>
        <label style={styles.label}>Email</label>
        <input
          style={styles.input}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button style={styles.button} onClick={handleLogin} disabled={loading}>
          {loading ? 'Loading...' : 'Login with Email'}
        </button>
      </div>
      <hr style={styles.divider} />
      <button style={styles.googleButton} onClick={handleGoogleLogin}>
        Login with Google
      </button>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    marginBottom: '1rem',
  },
  error: {
    color: 'red',
    marginBottom: '1rem',
  },
  form: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    textAlign: 'left',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  googleButton: {
    width: '100%',
    padding: '0.75rem',
    border: 'none',
    backgroundColor: '#db4437',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  divider: {
    margin: '1rem 0',
    borderTop: '1px solid #ddd',
  },
};

export default Login;
