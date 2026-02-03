import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();

  // Split path and filter empty strings
  const paths = location.pathname.split('/').filter(x => x);

  return (
    <div className="breadcrumb">
      <nav>
        <Link to="/">Home</Link>
        {paths.map((name, index) => {
          const path = `/${paths.slice(0, index + 1).join('/')}`;
          const isLast = index === paths.length - 1;

          return (
            <span key={path}>
              {' / '}
              {isLast ? (
                <span style={{ color: '#333', fontWeight: 'bold' }}>{name}</span>
              ) : (
                <Link to={path}>{name}</Link>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
