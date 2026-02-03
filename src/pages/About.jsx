export default function About() {
  return (
    <div>
      <h1>About This Project</h1>

      <div style={{ marginTop: '2rem' }}>
        <h2>🎓 Experiment 3: Implementing Routing in SPA</h2>
        <p style={{ color: '#666', lineHeight: '1.8', marginTop: '1rem' }}>
          This project demonstrates the implementation of client-side routing using React Router DOM v6.
          It showcases various routing concepts including basic navigation, dynamic routes with parameters,
          nested routes with layouts, protected routes with authentication, and programmatic navigation.
        </p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>✨ Key Features Implemented</h2>
        <div className="card">
          <h3>1. Client-Side Routing</h3>
          <p>No page reloads - instant navigation with preserved state using BrowserRouter.</p>
        </div>

        <div className="card">
          <h3>2. Navigation with Active States</h3>
          <p>NavLink components with active highlighting for current route.</p>
        </div>

        <div className="card">
          <h3>3. Dynamic Routes with URL Parameters</h3>
          <p>Product detail pages accessible via /products/:id route pattern.</p>
        </div>

        <div className="card">
          <h3>4. Nested Routes with Layout</h3>
          <p>Layout component using Outlet for consistent navigation across all pages.</p>
        </div>

        <div className="card">
          <h3>5. Protected Routes with Authentication</h3>
          <p>Dashboard route protected with auth guard - redirects to login if not authenticated.</p>
        </div>

        <div className="card">
          <h3>6. 404 Not Found Page</h3>
          <p>Wildcard route catches all unmatched URLs and displays friendly error page.</p>
        </div>

        <div className="card">
          <h3>7. Programmatic Navigation</h3>
          <p>useNavigate hook enables navigation triggered by button clicks and form submissions.</p>
        </div>

        <div className="card">
          <h3>8. Breadcrumb Navigation</h3>
          <p>Dynamic breadcrumbs generated from current URL path for better UX.</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>🛠️ Technologies Used</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ padding: '0.5rem 0', color: '#666' }}>⚛️ React 18</li>
          <li style={{ padding: '0.5rem 0', color: '#666' }}>🧭 React Router DOM v6</li>
          <li style={{ padding: '0.5rem 0', color: '#666' }}>⚡ Vite (Build Tool)</li>
          <li style={{ padding: '0.5rem 0', color: '#666' }}>🎨 Custom CSS Styling</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>👨‍🏫 Course Information</h2>
        <p style={{ color: '#666', lineHeight: '1.8' }}>
          <strong>Course:</strong> Full Stack - II (23CSH-382)<br />
          <strong>Program:</strong> AI201 - 4th Semester<br />
          <strong>Instructor:</strong> Mr. Prince Pal Singh<br />
          <strong>Department:</strong> AIT-CSE CORE & AIML<br />
          <strong>Session:</strong> 2025-26 (Jan-Jun 2026)
        </p>
      </div>
    </div>
  );
}
