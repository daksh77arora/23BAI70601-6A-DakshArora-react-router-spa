import { Outlet, NavLink } from 'react-router-dom';
import { auth } from '../utils/auth';
import Breadcrumbs from './Breadcrumbs';

export default function Layout() {
  const isAuthenticated = auth.checkAuth();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Contact
            </NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Dashboard
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {isAuthenticated ? 'Logout' : 'Login'}
            </NavLink>
          </li>
          {isAuthenticated && (
            <li className="auth-badge">
              ✓ Authenticated
            </li>
          )}
        </ul>
      </nav>

      <Breadcrumbs />

      <div className="container">
        <Outlet />
      </div>

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'white',
        fontSize: '0.9rem'
      }}>
        <p>© 2026 React Router SPA | Experiment 3 | Full Stack II</p>
      </footer>
    </div>
  );
}
