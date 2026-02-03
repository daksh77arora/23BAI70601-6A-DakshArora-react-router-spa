import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'React Router Book', price: 29.99, category: 'Books', description: 'Complete guide to React Router' },
  { id: 2, name: 'JavaScript Course', price: 49.99, category: 'Courses', description: 'Master modern JavaScript' },
  { id: 3, name: 'TypeScript Handbook', price: 34.99, category: 'Books', description: 'Learn TypeScript from basics' },
  { id: 4, name: 'React Advanced', price: 59.99, category: 'Courses', description: 'Advanced React patterns' },
  { id: 5, name: 'Node.js Guide', price: 39.99, category: 'Books', description: 'Backend with Node.js' },
  { id: 6, name: 'Full Stack Bundle', price: 99.99, category: 'Bundles', description: 'Complete full stack package' },
];

export default function Products() {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div>
      <h1>Our Products</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Browse our collection of programming resources. Click on any product to view details.
      </p>

      <div className="product-grid">
        {products.map(product => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.id)}
          >
            <div style={{
              width: '60px',
              height: '60px',
              background: '#667eea',
              borderRadius: '50%',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem'
            }}>
              {product.category === 'Books' ? '📚' : product.category === 'Courses' ? '🎓' : '📦'}
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">${product.price}</div>
            <span style={{
              display: 'inline-block',
              background: '#f0f0f0',
              padding: '0.25rem 0.75rem',
              borderRadius: '12px',
              fontSize: '0.85rem',
              color: '#666'
            }}>
              {product.category}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          Can't find what you're looking for?
        </p>
        <button onClick={() => navigate('/contact')}>
          Contact Us
        </button>
      </div>
    </div>
  );
}

export { products };
