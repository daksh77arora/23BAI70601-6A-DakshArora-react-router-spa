import { useParams, useNavigate } from 'react-router-dom';
import { products } from './Products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by ID
  const product = products.find(p => p.id === parseInt(id));

  // If product not found, show error
  if (!product) {
    return (
      <div className="not-found">
        <h1>Product Not Found</h1>
        <p>The product with ID {id} does not exist.</p>
        <button onClick={() => navigate('/products')}>
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '50%',
          margin: '0 auto 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem'
        }}>
          {product.category === 'Books' ? '📚' : product.category === 'Courses' ? '🎓' : '📦'}
        </div>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>

        <div style={{
          display: 'inline-block',
          background: '#667eea',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.9rem',
          marginBottom: '1rem'
        }}>
          {product.category}
        </div>

        <div className="price">${product.price}</div>

        <div className="description">
          <h3>Description</h3>
          <p>{product.description}</p>
          <p style={{ marginTop: '1rem' }}>
            This is a detailed description of the {product.name}. It provides comprehensive
            coverage of the topic and includes hands-on examples and exercises. Perfect for
            both beginners and experienced developers looking to enhance their skills.
          </p>
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
          <h3>Product Details</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #e0e0e0' }}>
              <strong>Product ID:</strong> {product.id}
            </li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #e0e0e0' }}>
              <strong>Category:</strong> {product.category}
            </li>
            <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #e0e0e0' }}>
              <strong>Price:</strong> ${product.price}
            </li>
            <li style={{ padding: '0.5rem 0' }}>
              <strong>Availability:</strong> <span style={{ color: '#28a745' }}>In Stock ✓</span>
            </li>
          </ul>
        </div>

        <div className="action-buttons">
          <button onClick={() => {
            alert(`Added "${product.name}" to cart!`);
          }}>
            🛒 Add to Cart
          </button>
          <button onClick={() => navigate('/products')} className="secondary">
            ← Back to Products
          </button>
          <button onClick={() => navigate(-1)} className="secondary">
            ← Go Back
          </button>
        </div>

        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          background: '#fff3cd',
          borderRadius: '8px',
          border: '1px solid #ffc107'
        }}>
          <strong>💡 Tip:</strong> This product detail page demonstrates dynamic routing with
          URL parameters. The product ID ({id}) is extracted from the URL using useParams() hook.
        </div>
      </div>
    </div>
  );
}
