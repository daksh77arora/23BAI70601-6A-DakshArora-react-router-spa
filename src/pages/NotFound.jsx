import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! Page Not Found</p>
      <p style={{ fontSize: '1rem', color: '#999', marginBottom: '2rem' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/">
          <button>Go to Home</button>
        </Link>
        <button onClick={() => navigate(-1)} className="secondary">
          Go Back
        </button>
      </div>

      <div style={{
        marginTop: '3rem',
        maxWidth: '600px',
        margin: '3rem auto 0',
        textAlign: 'left'
      }}>
        <h3 style={{ marginBottom: '1rem' }}>Popular Pages:</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link to="/" style={{ color: '#667eea', textDecoration: 'none' }}>
            → Home
          </Link>
          <Link to="/about" style={{ color: '#667eea', textDecoration: 'none' }}>
            → About
          </Link>
          <Link to="/products" style={{ color: '#667eea', textDecoration: 'none' }}>
            → Products
          </Link>
          <Link to="/contact" style={{ color: '#667eea', textDecoration: 'none' }}>
            → Contact
          </Link>
        </div>
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        background: '#f8f9fa',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '2rem auto',
        fontSize: '0.9rem'
      }}>
        <strong>💡 Technical Note:</strong> This 404 page is rendered by the wildcard route (path="*")
        which catches all unmatched URLs. It's defined as the last route in the Routes configuration
        to ensure it only matches when no other route does.
      </div>
    </div>
  );
}
