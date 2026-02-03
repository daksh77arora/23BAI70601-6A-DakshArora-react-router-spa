import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/auth';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout(() => {
      navigate('/login');
    });
  };

  const stats = [
    { label: 'Total Products', value: '6', icon: '📦' },
    { label: 'Active Users', value: '1,234', icon: '👥' },
    { label: 'Revenue', value: '$12.5K', icon: '💰' },
    { label: 'Orders', value: '89', icon: '🛒' },
  ];

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <div>
          <h1>Dashboard</h1>
          <p style={{ color: '#666' }}>Welcome to your protected dashboard</p>
        </div>
        <button onClick={handleLogout} className="logout">
          Logout
        </button>
      </div>

      <div style={{
        padding: '1rem',
        background: '#d4edda',
        borderRadius: '8px',
        border: '1px solid #c3e6cb',
        color: '#155724',
        marginBottom: '2rem'
      }}>
        <strong>✓ Success!</strong> You are viewing a protected route. This page is only
        accessible to authenticated users. If you try to access this URL without logging in,
        you'll be redirected to the login page.
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {stats.map((stat, index) => (
          <div key={index} className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea' }}>
              {stat.value}
            </div>
            <div style={{ color: '#666', marginTop: '0.5rem' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Recent Activity</h2>
        <div style={{ marginTop: '1rem' }}>
          <div style={{
            padding: '1rem',
            borderBottom: '1px solid #e0e0e0',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>New product added: JavaScript Course</span>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>2 hours ago</span>
          </div>
          <div style={{
            padding: '1rem',
            borderBottom: '1px solid #e0e0e0',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>User registration: john@example.com</span>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>5 hours ago</span>
          </div>
          <div style={{
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>Order completed: #12345</span>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>1 day ago</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/products')}>
            View Products
          </button>
          <button onClick={() => navigate('/contact')} className="secondary">
            Contact Support
          </button>
          <button onClick={() => navigate('/')} className="secondary">
            Go Home
          </button>
        </div>
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        background: '#d1ecf1',
        borderRadius: '8px',
        border: '1px solid #bee5eb',
        color: '#0c5460'
      }}>
        <strong>ℹ️ Protected Route Implementation:</strong> This dashboard is wrapped in a
        ProtectedRoute component that checks authentication status. The component uses Navigate
        to redirect unauthenticated users to the login page. Try logging out and attempting to
        access /dashboard directly to see the protection in action.
      </div>
    </div>
  );
}
