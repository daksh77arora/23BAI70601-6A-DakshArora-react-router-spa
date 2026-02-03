import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="hero">
        <h1>🚀 Welcome to React Router SPA</h1>
        <p>Experiment 3: Implementing Routing in Single Page Applications</p>
        <button onClick={() => navigate('/products')}>
          Explore Products
        </button>
      </div>

      <div className="features">
        <div className="feature">
          <h3>⚡ Client-Side Routing</h3>
          <p>Navigate instantly without page reloads. State preserved across routes.</p>
        </div>

        <div className="feature">
          <h3>🔐 Protected Routes</h3>
          <p>Authentication guards ensure secure access to private pages.</p>
        </div>

        <div className="feature">
          <h3>🎯 Dynamic Routes</h3>
          <p>URL parameters enable detailed product views and user profiles.</p>
        </div>

        <div className="feature">
          <h3>🧭 Nested Layouts</h3>
          <p>Consistent navigation and breadcrumbs across all pages.</p>
        </div>

        <div className="feature">
          <h3>📱 Responsive Design</h3>
          <p>Works seamlessly on desktop, tablet, and mobile devices.</p>
        </div>

        <div className="feature">
          <h3>🎨 Modern UI</h3>
          <p>Clean, professional design with smooth transitions.</p>
        </div>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2>Get Started</h2>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          Explore the features of this Single Page Application
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/about')}>
            Learn More
          </button>
          <button onClick={() => navigate('/products')} className="secondary">
            View Products
          </button>
          <button onClick={() => navigate('/contact')} className="secondary">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
