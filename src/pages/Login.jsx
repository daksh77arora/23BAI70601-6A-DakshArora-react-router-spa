import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../utils/auth';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  // Get the page they tried to visit, or default to dashboard
  const from = location.state?.from?.pathname || '/dashboard';

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple authentication (in real app, validate with backend)
    if (credentials.username && credentials.password) {
      auth.login(() => {
        navigate(from, { replace: true });
      });
    } else {
      alert('Please enter both username and password');
    }
  };

  const handleLogout = () => {
    auth.logout(() => {
      navigate('/');
    });
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  // If already authenticated, show logout option
  if (auth.checkAuth()) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 0' }}>
        <h1>You are logged in! ✓</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          You have access to protected routes like the Dashboard.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}>
          <button onClick={() => navigate('/dashboard')}>
            Go to Dashboard
          </button>
          <button onClick={handleLogout} className="logout">
            Logout
          </button>
        </div>

        <div style={{
          maxWidth: '600px',
          margin: '2rem auto',
          padding: '1.5rem',
          background: '#d4edda',
          borderRadius: '8px',
          border: '1px solid #c3e6cb',
          color: '#155724'
        }}>
          <strong>✓ Authentication Status:</strong> You are currently authenticated and can
          access protected routes. Try visiting the Dashboard or click Logout to end your session.
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      <p style={{ color: '#666', textAlign: 'center', marginBottom: '2rem' }}>
        Enter any username and password to access protected routes
      </p>

      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Enter any username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter any password"
              required
            />
          </div>

          <button type="submit" style={{ width: '100%' }}>
            Login
          </button>
        </form>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          background: '#fff3cd',
          borderRadius: '8px',
          border: '1px solid #ffc107',
          fontSize: '0.9rem'
        }}>
          <strong>💡 Demo Mode:</strong> This is a demonstration of authentication and protected routes.
          Enter any username and password to login. After login, you'll be able to access the Dashboard
          which is a protected route.
        </div>

        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          background: '#f8f9fa',
          borderRadius: '8px',
          fontSize: '0.9rem'
        }}>
          <strong>🔒 Protected Routes:</strong>
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
            <li>Try visiting /dashboard without login - you'll be redirected here</li>
            <li>After login, you can access protected routes</li>
            <li>Logout to test the protection again</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
